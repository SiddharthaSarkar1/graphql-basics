const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGODB = process.env.MONGO_URI;

// Apollo Server
// typeDefs: GraphQL type definitions
// resolvers: How do we resolve Queries / Mutations
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
  );

  mongoose
    .connect(MONGODB, { dbName: "graphql-api" })
    .then(() => {
      console.log(`MongoDB connection successful.`);
      app.listen({ port: 5000 }, () => {
        console.log(`Server running at http://localhost:5000/graphql`);
      });
    });
}

startServer();
