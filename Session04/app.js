// console.log("Hello world");
const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.listen(3000)

const objData = {
    name: "Loc",
    age: 18
}

// JSON
console.log("objData: " + JSON.stringify(objData));

// writeFile

// console.log("Start write file");
// fs.writeFile('test.txt', JSON.stringify(objData), (err) => {
//     if (err) console.log(err)
//     else console.log("Success");
// })
// console.log("End write file");


// writeFileSync

// console.log("Start read file");
// fs.readFile('test.txt', (err,data) => {
//     if (err) console.log(err)
//     else console.log("Success! Data: " + data);
// });
// console.log("End read file");

// readFileSync

console.log("Start read file");
const fileDataSync = fs.readFileSync('test.txt', {encoding: 'utf-8'});
const dataObj = JSON.parse(fileDataSync);
console.log(dataObj.name + ' chua ' + dataObj.age);
console.log("End read file");