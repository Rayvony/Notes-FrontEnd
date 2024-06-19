require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index");
const notesRouter = require("./routes/notes");
const usersRouter = require("./routes/users");

const app = express();

app.use(function (req, res, next) {
  const allowedOrigins = ["http://localhost:3000", "https://notes-front-ridlyzcv1-rayvonys-projects.vercel.app"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE, UPDATE");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.use("/notes", notesRouter);
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
