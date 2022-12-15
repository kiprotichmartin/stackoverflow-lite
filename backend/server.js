const express = require("express");
const dotenv = require("dotenv");
// const cors = require("cors");
const { usersRoutes } = require("./Routes/usersRoutes");
const { questionsRoutes } = require("./Routes/questionsRoutes");
const { answersRoutes } = require("./Routes/answersRoutes");
const { commentsRoutes } = require("./Routes/commentsRoutes");

dotenv.config();

const app = express();

// app.use(cors());
app.use(express.json());
app.use("/questions", questionsRoutes);
app.use("/questions", answersRoutes);
app.use("/questions", commentsRoutes);
app.use("/users", usersRoutes);

app.listen(5000 || process.env.PORT, () => {
  console.log(`Server is Running on Port : ${process.env.PORT}`);
});
