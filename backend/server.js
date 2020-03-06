//import & setup express, cors, mongoose, dotenv packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//create mongoose connection
mongoose.connect("mongodb+srv://" + process.env.MONGO + "@cluster0-mbatm.mongodb.net/redditDB", {useNewUrlParser: true, useCreateIndex: true});

mongoose.connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
})

//server API endpoints
const homeRouter = require("./routes/home");
const loginRouter = require("./routes/login");
const mainRouter = require("./routes/main");
const postRouter = require("./routes/post");
const signupRouter = require("./routes/signup");

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
// app.use("/", mainRouter);
// app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/home", homeRouter);
// app.use("/post", postRouter);

//set up server to listen to port 5000/ PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server has started on port: ${port}`);
})