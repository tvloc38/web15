// console.log("123");
// aFunction(Huy);

// function aFunction(a) {
//     console.log("Hello" +a);
// }

// var bFunction = function(name, printName) {
//     printName(name);
// }

// bFunction("Huy", aFunction);

// var bFunction = function() {
//     console.log("Hello variable");
// }

// bFunction();

// var cFunction = () => {
//     console.log("Hello arrow!");
// }

// cFunction();

// callback

// function add5(getNumber, print) {
//     var num = getNumber() + 5;
//     print(num);
// }

// function randomNumber() {
//     return Math.floor(Math.random()*1000);
// }

// function printNumber(num) {
//     console.log(num);
// }

// // add5(randomNumber, printNumber)
// setTimeout(function() {
//     add5(randomNumber, printNumber);
// }, 1000*1);

// // bất đồng bộ
// console.log("Result");

// var a = 10;

// function abc() {
//     var b = 15;
    
//     console.log(a); //10
//     console.log(b); //15
// }

// abc();

// console.log(a); //10
// console.log(b); //null
// function printNum(num, waitTime) {
//     setTimeout(function() {
//         console.log(num)
//     }, waitTime*1000);
// }

// function countDown(num) {
//     for (var i=num; i >= 0;i--) {
//         printNum(i, num-i);
//         // console.log(i);
//     }
// }

// khac nhau giua let va var
// function countDown(num) {
//     for (let i=num; i >= 0;i--) {
//         setTimeout(function() {
//             console.log(i)
//         }, (num-i)*1000);
//     }
// }

function countDown(num) {
    for (let i=num; i >= 0;i--) {
        setTimeout(function() {
            console.log(i)
        }, (num-i)*1000);
        // console.log(i);
    }

    // console.log(i);
}
countDown(5);