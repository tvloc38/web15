const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/techkids-hotgirl");

const userRouter = require('./routers/userRouter');
const imageRouter = require('./routers/imageRouter');

const app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


app.use("/api/users", userRouter);
app.use("/api/images", imageRouter);


const port = 6969;
app.listen(port, (err)=> {
    if(err) console.log(err)
    else console.log("listen at port" + port);
});