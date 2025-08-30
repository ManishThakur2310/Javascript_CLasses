const obj = {
    id: 101,
    "c_name": "Dhananjay"
}

Object.freeze(obj)// Freeze property (Only Read operation performs)
obj.e_name = "Hello"
console.log(obj.id);
console.log(obj.e_name);//we cannot write any value or update any value after applying freeze.
console.log(obj);


const obj2 = {
    cid: 101,
    "c_name": "Manish"
}
console.log(obj2);
Object.seal(obj2)// Seal object
obj2.e_name = "seal"
console.log(obj2);
obj2.cid = 102// in seal we can update and read value but we cannt write and delete the value
console.log(obj2);


// Array destructing
let arr = [0, 2, 4, 6]
let [x, y] = arr;
console.log(x, y);


//object destructing
const obj3 = {
    cid: 101,
    "c_name": "Manish",
    data: {
        city: "Indore"
    }
}
const { c_name, data, cid } = obj3
const { city } = data//nested objects
console.log(c_name, city);
console.log(data.city);



//for of loops is usend in array and strings
// we can use break and continue in this its control is more than for in
let array = [12, 5, 4, 8, 46]
console.log(array);

//for of array
for (value of array) {
    console.log(value);
}

//break
for (value of array) {
    if (value == 4)
        break;
    console.log("<----------",value);
}

//continue for skipping elements
for (value of array) {
    if (value == 4)
        continue;
    console.log("---------->",value);
}



//for in obj
const obj4 = {
    cid: 101,
    "c_name": "Manish",
    data: {
        city: "Indore"
    }
}






//rest operator  (...)
function rest(a,b,c,...remaining){
    console.log(remaining);
    return a*b*c;
    
}
const op = rest(10,20,30,40)
console.log(op);




