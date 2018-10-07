const express = require('express');
const path = require('path');
const axios = require("axios");
const fs = require('fs');


let app = express();
// app.use(express.static(path.join(__dirname, '../Session03')));

app.get('/', (req,res) => {
    // console.log("Hello");
    // res.send({ success: 1, data: "Hello" });
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get("/web15", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web15")
      .then(res => {
           fs.writeFileSync("JSON/web15.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/JSON/web15.json");
})

app.get("/web14", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web14")
      .then(res => {
           fs.writeFileSync("JSON/web14.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/JSON/web14.json");
})

app.get("/web13", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web13")
      .then(res => {
           fs.writeFileSync("JSON/web13.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/JSON/web13.json");
})

app.get("/web12", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web12")
      .then(res => {
           fs.writeFileSync("JSON/web12.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/JSON/web12.json");
})

app.get("/web11", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web11")
      .then(res => {
           fs.writeFileSync("JSON/web11.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/JSON/web11.json");
})

app.get("/web10", function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web10")
      .then(res => {
           fs.writeFileSync("JSON/web10.json", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

    res.sendFile(__dirname + "/JSON/web10.json");
})

app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 3000!");
})