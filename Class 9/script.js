
//This Keyeword

//----------By default-------------------
console.log(this);//window

//----------------------Normal Function-------------------------------------------------------
function func() {
    console.log(this);
}
func();//window


//-----------------------Empty Comnstructor----------------------------------------------------
new func();//Empty Constructor


//-------------------FUnction Inside the object-----------------------------------------------
let obj = {
    F_name: "Manish",
    L_name: "Thakur",
    C_id: 101,
    info: function () {
        console.log(this);
    }
}
obj.info()// Obj

//-------------------------Aerrow Function Inside the Object---------------------------------
let obj1 = {
    F_name: "Manish",
    L_name: "Thakur",
    C_id: 101,
    info: () => {//aerrow func
        console.log(this);
    }
}
obj1.info()//window

//--------------------------functiin inside the function inside the object----------------------------------------
let obj2 = {
    F_name: "Manish",
    L_name: "Thakur",
    C_id: 101,
    info1: function data0() {
        function data1() {
            console.log(this);
        }
        data1();
    }
}

obj2.info1()//window


//--------------Lexical Constraints--(aerrow function inside the function inside the oject)--------------

let obj3 = {
    F_name: "Manish",
    L_name: "Thakur",
    C_id: 101,
    info: function () {
        const inner = () => {
            console.log(this);
        }
        inner()
    }
}

obj3.info()//Object



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Shallow Copy----------
//1. By equal to operator(=)-----------------------------
const sobj = {
    uname : "Dhananjay",
    age : 21,
    id : 101,
    data : function info(){
        console.log("Hello");
    }
}

const sobj2 = sobj;

console.log(sobj2);

sobj2.age = 22;//update the the value from obj2
console.log(sobj);//it is automatically updated...(isme change ho rha hai agar obj2 me apan change krte hai toh)



//2. by assign --------------------

const sobj3 = {
    uname : "Dhananjay",
    age : 21,
    id :101,
    data : function info(){
        console.log("Hello");
    }
}

const sobj4 = Object.assign(sobj3);

console.log(sobj4);

sobj4.id = 202;//update the the value in obj2
console.log(sobj3);//it is automatically updated...(isme change ho rha hai agar obj2 me apan change krte hai toh)

//Nested elements me changes hote hai in shallow copy----------

const sobj5 = {
    uname : "Dhananjay",
    age : 21,
    id :101,
    addres : {
        city : "Indore",
        state : "MP"
    }
}

const sobj6 = Object.assign(sobj5);

console.log(sobj6);

sobj6.id = 202;//update the the value in obj2
sobj6.addres.state = "Gujrat"
console.log(sobj5);//it is automatically updated...


//+++++++++++++++++++++++++++++++++=+++++++++++++++++++++++++++++++++


//Deep Copy_---------------------------------------------


//1.json.parse(json.strinfy(object))------------------------------
const  dobj = {
    c_name : "Rohit",
    c_id : "104",
    addres : {
        city : "Indore",
        state : "MP"
    }
}

const dobj2 = JSON.parse(JSON.stringify(dobj))
console.log(dobj2);

dobj2.c_id = 103//root element me change nhi hota kbhi bhi deep copy me
console.log(dobj);//isme root me change nhi hoga
console.log(dobj2);//but update hojati hai...

dobj2.addres.city = "Dewas"
console.log(dobj);


//2.----structuredClone-----------------
const  new_dobj = {
    c_name : "Rohit",
    c_id : "104",
    addres : {
        city : "Indore",
        state : "MP"
    }
}

const other_dobj2 = structuredClone(new_dobj)
console.log(other_dobj2);

other_dobj2.c_id = 103//root element me change nhi hota kbhi bhi deep copy me
console.log(new_dobj);//isme root me change nhi hoga
console.log(other_dobj2);//but update hojati hai...

other_dobj2.addres.city = "Dewas"
console.log(new_dobj);