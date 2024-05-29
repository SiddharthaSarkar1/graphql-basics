import mongoose from "mongoose";

export const connectDB = (url: string) =>
  mongoose
    .connect(url, { dbName: "first-graphql" })
    .then((c) => {
      console.log(`Connected with ${c.connection.name}`);
    })
    .catch((e) => {
      console.log(e);
    });
