arr = [2,4,8,[6,[7]],9]
console.log(arr.flat());
let new_array1 = arr.flat();
let new_array = [2,4,8,6,7,9];
// console.log(new_array.splice(2,2));
// console.log(new_array.slice(-3,-1));
let array = new_array.map(n=>n*2);
console.log(array);

let str_arr = ["manish","vijay","dj","rohit","nishant"]
let new_str = str_arr.map((w) => (w.charAt(0).toUpperCase())+ w.slice(1))
console.log(new_str);

let a = [1,2,3,4,5,6]
// let b = a.splice(2)
let b = a.slice(2,3)
console.log(b);