const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/answer.html');
});

app.get('/ask', (req,res) => {
    res.sendFile(__dirname + '/public/ask.html');
});

app.get('/answer', (req,res) => {
    res.sendFile(__dirname + '/public/answer.html');
});

app.post('/createquestion', (req,res) => {
    // req.body
    console.log(req.body);
    // req.on('data', (data) => {
    //     console.log(req.body);
    // });
    const questionList = JSON.parse(fs.readFileSync('./questions.json'));
    console.log(questionList.length);

    const newQuestion = {
        id: questionList.length,
        questionContent: req.body.questionContent,
        yes: 0,
        no: 0
    }

    questionList.push(newQuestion);
    fs.writeFileSync('./questions.json', JSON.stringify(questionList));

    res.redirect('/answer');
});

app.get("/getQuestion", (req, res) => {
    const questionList = JSON.parse(fs.readFileSync("./questions.json"));
    var i = Math.floor(Math.random() * questionList.length);

    res.send(questionList[i].questionContent);
});

app.get("/randomquestion", (req,res) => {
    const questionList = JSON.parse(fs.readFileSync("./questions.json"));

    if(questionList.length > 0) {
        let randomIndex = Math.floor(Math.random()*questionList.length);
        let questionRandom = questionList[randomIndex];
        res.send(questionRandom)
    }
});


app.listen(6969, (err) => {
    if(err) console.log(err)
    else console.log('Server is listening at port 6969');
});