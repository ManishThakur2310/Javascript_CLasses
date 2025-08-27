// //Even number

// function printEven(n) {
//     for (i = 1; i <= n; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }

//     }
// }

// printEven(10);



// //Odd number

// function oddEven(n) {
//     for (i = 1; i <= n; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }

//     }
// }

// oddEven(10);

//2 ka table

// function table_2(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num * i)
//     }
// }

// function table_1_to_n() {
//     for (let i = 2; i <= 10; i++) {
//         table_2(i)
//     }
// }
// table_1_to_n()


//prime number

// function isPrime(num) {
//     if (num <= 1) {
//         console.log("prime");
//         return false;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             console.log(num,"not prime");
//             return false;
//         }
//     }
//     console.log(num,"prime");
//     return true;
// }
// isPrime(25)

// function prime_1_n(n){
//     for(let i=1;i<n;i++)
//     {
//         isPrime(i)
//     }
// }

// prime_1_n(25)


// // minimum between 2 varialbse
// function minimum_btw_2(num1,num2){
//     if(num1<num2){
//         console.log(num1,"is minimum");
//     }
//     else if(num1==num2){
//         console.log("both numbers are equal");
//     }
//     else{
//         console.log(num2,"is minimum");
//     }
// }
// minimum_btw_2(15,20)

// //minimum between 3 numbers
// function minimum_btw_3(num1,num2,num3){
//     if(num1<num2 && num1<num3){
//         console.log(num1,"is minimum");
//     }
//     else if(num2<num1 && num2<num3){
//         console.log(num2,"is minimum");
//     }
//     else{
//         console.log(num3,"is minimum");
//     }
// }

// minimum_btw_3(15,10,5)

// //fibonacci series
// function fibo(num){
//     let a = 0;
//     let b = 1;
//     console.log(a)
//     console.log(b);
//     for (i = 2; i <= num; i++) {
//         let c = a + b;
//         console.log(c);
//         a=b;
//         b=c;
//     }
// }

// fibo(10)

// function isPerfect(num){
//     if(num<=1)returnfalse;

//     let sum=0;
//     for(let i=1;i<=num/2;i++){
//         if(num%i==0){
//             sum+=i
//         }
//     }
//     if(sum==num){
//         console.log(num, "is perfect number");
//     }
//     else{
//         console.log("Not a perfect number");
//     }
// }

// isPerfect(6)

