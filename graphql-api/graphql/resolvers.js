const Recipe = require("../models/Recipe");

module.exports = {
  Query: {
    async recipe(_, { ID }) {
      return await Recipe.findById(ID);
    },
    async getRecipes(_, { amount }) {
      return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createRecipe(_, { recipeInput: { name, description } }) {
      const createdRecipe = new Recipe({
        name: name,
        description: description,
        createdAt: new Date().toString(),
        thumbsUp: 0,
        thumbsDown: 0,
      });

      const res = await createdRecipe.save(); //MongoDB Saving
      console.log(res._doc);

      return {
        id: res._id,
        ...res._doc,
      };
    },
    async deleteRecipe(_, { ID }) {
      const wasDeleted = (await Recipe.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted; // 1 if something was deleted, 0 if nothing was deleted.
    },
    // async editRecipe(_, { ID, recipeInput: { name, description } }) {
    //   const wasEdited = await Recipe.updateOne(
    //     { _id: ID },
    //     { name: name, description: description }
    //   ).modifiedCount;
    //   console.log(wasEdited);
    //   return wasEdited; // 1 if something was edited, 0 if nothing was edited.
    // },
    async editRecipe(_, { ID, recipeInput: { name, description } }) {
        const result = await Recipe.updateOne(
          { _id: ID },
          { $set: { name, description } }
        );
  
        return result.modifiedCount > 0;
      }
  },
};
