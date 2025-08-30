// currying

function additionOfTwono(x) {
    return function (y) {
        return x + y;
    }
}

let ans = additionOfTwono(10)(20);
console.log(ans);


function additionOfThreeno(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

let op = additionOfThreeno(10)(20)(30);
console.log(op);


//setTimeout()   method// it used for giving delay

// setTimeout(()=>{
//     for(let i=1;i<=10;i++)
//     {
//         console.log(2*i);
//     }
// },200)

// setInterval(function(){
//     for(let i=1;i<=5;i++){
//         console.log("Hello");
//     }
// },)




///promise===============================

// const promise = new Promise((resolve,reject)=>{
//     let age = Math.floor(Math.random()*100)
//     if(age>=18){
//         resolve("You are allowed to vote")
//     }
//     else{
//         reject("Bhag yha seeeeeee")
//     }
// });

// promise.then((op)=>console.log(op)).catch((e)=>console.log(e))
// console.log(promise);


const promise = new Promise((resolve, reject) => {
    let age = Math.floor(Math.random() * 100)
    setTimeout(() => {
        if (age >= 18) {
            resolve("You are allowed to vote")
        }
        else {
            reject("Bhag yha seeeeeee")
        }
    }, 2000)
});
let a = promise.then((op) => console.log(op)).catch((e) => console.log(e))
console.log(a);

setTimeout(()=>{
    console.log(a);
},5000
)




// setInterval(()=>{
//     console.log("nahii");
// },1000)


// let b = setTimeout(()=>{
//     console.log("hello");
// },1000)

// clearInterval(b)