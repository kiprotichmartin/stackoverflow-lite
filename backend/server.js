const express = require("express");
const dotenv = require("dotenv");
const app = express();
// const cors = require("cors");
dotenv.config();

app.use(express.json());
// app.use(cors());

// app.use("/products", productRoutes);

app.listen(() => {
  console.log(`Server is Running on Port : ${process.env.PORT}`);
});
