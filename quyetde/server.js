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

app.get("/result", (req, res) => {
    res.sendFile(__dirname + "/public/result.html");
})

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

// app.get("/getQuestion", (req, res) => {
//     const questionList = JSON.parse(fs.readFileSync("./questions.json"));
//     var i = Math.floor(Math.random() * questionList.length);

//     res.send(questionList[i].questionContent);
// });

app.get("/randomquestion", (req,res) => {
    const questionList = JSON.parse(fs.readFileSync("./questions.json"));

    if(questionList.length > 0) {
        let randomIndex = Math.floor(Math.random()*questionList.length);
        let questionRandom = questionList[randomIndex];
        res.send(questionRandom)
    }
});

app.post('/answer', (req,res) => {
    console.log(req.body);
    const { questionid, answer } = req.body;
    // const questionid = req.body.questionid;
    // const answer = req.body.answer;
    const questionList = JSON.parse(fs.readFileSync("./questions.json"));
    
    questionList[questionid][answer] += 1;

    fs.writeFileSync('./questions.json', JSON.stringify(questionList));
    res.send({ success: 1});
});


app.post("/result", (req, res) => {
    console.log(req.body);
    const currentQuestionId = req.body.questionId;
    const questionList = JSON.parse(fs.readFileSync("./questions.json"));
    fs.writeFileSync("./result.json", JSON.stringify(questionList[currentQuestionId]));
    res.send({success: 1});
})

app.get("/current", (req, res) => {
    var currentQuestion = JSON.parse(fs.readFileSync("./result.json"));
    res.send(currentQuestion);
})


app.listen(6969, (err) => {
    if(err) console.log(err)
    else console.log('Server is listening at port 6969');
});