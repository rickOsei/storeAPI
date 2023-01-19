const express = require("express");
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const router = require("./routes/products");
const port = process.env.PORT || 3000;
const server = express();
require("dotenv").config();

// Middlewares
server.use("/api/v1/products", router);

server.use(notFound);
server.use(errorHandlerMiddleware);
server.use(express.json());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    server.listen(port, () =>
      console.log(`Server is running on port: ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
