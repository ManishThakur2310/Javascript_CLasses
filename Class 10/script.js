//Nested For Loops

for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        console.log("for loop", i, j);
    }
}
console.log("Pattern -1 -------------------------------------------");
//===================================================================
for (let i = 0; i < 4; i++) {
    let row = " "
    for (let j = 0; j < 4; j++) {
        row += "5"
    }
    console.log(row);
}
/* 
    5555
    5555
    5555
    5555
*/

for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 4; j++) {
        row += "5" + " ";
    }
    console.log(row);
}

console.log("Pattern -2 -------------------------------------------");

//======================================================================

/* 
    +
    ++
    +++
    ++++
    +++++
*/
for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "+" + " ";
    }
    console.log(row);
}


console.log("Pattern -3 -------------------------------------------");
//============================================================================

/*
    +++++
    ++++
    +++
    ++
    +
 */



for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += j + " ";
    }
    console.log(row);
}

//==============================================================================================
/*
    54321
     4321
      321
       21
        1    
*/

console.log("New Pattern==============");


for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 5; j > i; j--) {
        row += j + " ";
    }
    console.log(row);
}
//==============================================================================================
/*
    5 4 3 2 1
     4 3 2 1
      3 2 1
       2 1
        1    
*/

console.log("New Pattern==============");

for (let i = 0; i < 5; i++) {
    let row = "";
    let sp = ""
    for (let j = 0; j <= i; j++) {
        sp += " "
    }
    for (let j = 0; j < 5 - i; j++) {
        row += 5 - i - j;
    }
    console.log(sp + row);
}

//==============================================================================================
/*
       *
      ***
     *****
    *******
*/


console.log("New Pattern==============");
for (let i = 0; i < 5; i++) {
    let row = "";
    let sp = ""
    for (let j = 0; j <= i; j++) {
        sp += " "
    }
    for (let j = 0; j < 5 - i; j++) {
        row += 5 - i - j + " ";
    }
    console.log(sp + row);
}

//==============================================================================================
/*
       *
      * * 
     * * *
    * * * * 
   * * * * *
*/

console.log("New Pattern=================");
for (let i = 1; i <= 4; i++) {
    let row = "";
    let sp = ""
    for (let j = 1; j < 5 - i; j++) {
        sp += " "
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(sp + row);
}
//====================================================

/*
    ****
    *  *
    *  *
    ****
 */

console.log("New Pattern=================");
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= 4; j++) {
        if ((i == 1) || (j == 1) || (j == 4) || (i == 4)) {
            row += "*";
        }
        else {
            row += " "
        }
    }
    console.log(row);
}
//====================================================

/*
    ****
    *  *
    *  *
    ****
 */

console.log("New Pattern==============");

for (let i = 1; i <= 4; i++) {
    let row = "";
    let sp = "";
    let sp2 = "";
    for (let j = 1; j <= 5-i; j++) {
        sp += " "
    }
    
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j == 1 || j == 2*i-1 || i == 4 ) {
            row += "*";
        }
        else {
             sp2=" "
            // for (let k = 2; k < 2*j+1; k++) {
            //     sp2 += " "
            // }
            row += sp2;
        }
    }
    console.log(sp+row);
}

//+++++++++++++++++++++++++++++
console.log("Array");
let arr = [1,25,5,4]
let ans = arr.find((item)=> item%5==0)//returns single elements
let ans1 = arr.filter((item)=> item%5==0)//returns array and elements in array. multiple elements returns
console.log(ans);
console.log(ans1);