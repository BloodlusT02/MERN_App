const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// routes import 
const userRouter = require("./routes/user.router");

// routes
app.use("/users", userRouter);

module.exports = { app }