const promiseExp = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Tra tien");
    }, 5000);
    setTimeout(function() {
        reject("Ko tra");
    }, 3000);
});

promiseExp()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("Error: ", err);
    })

const muaRau = (money) => new Promise((resolve, reject) => {
    if(money > 10000) {
        resolve("Rau cua chau day!");
    } else reject("Ko ban!");
});

const anRau = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("An xong roi!!")
    }, 5000);
});