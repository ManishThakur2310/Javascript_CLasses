// Pattern - 1 ----------(Right Angle Triangle)-------------------------------
console.log("PATTERN 1");
for(i=1;i<=5;i++){
    ans = ""
    for(j=1;j<=i;j++){
        ans+= String.fromCharCode(i+64);
    }
    console.log(ans);
}

/*output
A
BB
CCC
DDDD
EEEEE
*/


// console.log("New=====================");

// Pattern - 2 -------------Inverted Right Angled Triangle------

console.log("PATTERN = 2");
for(i=5;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        ans+= String.fromCharCode(i+64);
    }
    console.log(ans);
}
/**
EEEEE
DDDD
CCC
BB
A
 */


// pattern - 3 -----------------Pyramid ----------
console.log("pATTERN=3");
for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=i;j++){
        ans+= String.fromCharCode(i+64)+" ";
    }
    
    console.log(sp + ans);
}

/*
    A
   B B 
  C C C  
 D D D D  
E E E E E  
*/

// pattern - 4 --------------------------inerverted Pyramid-----
console.log("PATTTERN= 4");
for(i=5;i>=1;i--){
    ans=""
    sp=""
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    for(j=1;j<=i;j++){
        ans+= String.fromCharCode(i+64)+" "
    }
    console.log(sp+ans);
}

/*
E E E E E
 D D D D  
  C C C 
   B B
    A
*/
console.log("pATTERN =5");
for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+= String.fromCharCode(i+64);
    }
    
    console.log(sp + ans);
}

/*
    A
   BBB
  CCCCC
 DDDDDDD
EEEEEEEEE
 */

console.log("PATTERN= 6");

for(i=5;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+= String.fromCharCode(i+64);
    }
    
    console.log(sp + ans);
}
/*
  EEEEEEEEE
   DDDDDDD
    CCCCC
     BBB
      A
 */

//Pattern=7 ------------------------
console.log("DIAMOND PATTERN 7");

for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+= String.fromCharCode(i+64);
    }
    
    console.log(sp + ans);
}
for(i=4;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+= String.fromCharCode(i+64);
    }
    
    console.log(sp + ans);
}
/*
      A
     BBB
    CCCCC
   DDDDDDD
  EEEEEEEEE
   DDDDDDD
    CCCCC
     BBB
      A
*/

console.log("PATTERN=8 HOURGLASS");
for(i=5;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+= String.fromCharCode(i+64);
    }
    
    console.log(sp + ans);
}
for(i=2;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+= String.fromCharCode(i+64);
    }
    
    console.log(sp + ans);
}
/**
 EEEEEEEEE
  DDDDDDD
   CCCCC
    BBB
     A
    BBB
   CCCCC
  DDDDDDD
 EEEEEEEEE
 */

console.log("Pattern = 9 HOLLOW SQUARE");
for(i=1;i<=5;i++){
    ans=""
    for(j=1;j<=5;j++){
        if((i==1)||(j==1)||(j==5)||(i==5)){
            ans+="A"
        }
        else{
            ans+=" "
        }
    }
    console.log(ans);
}
/*
AAAAA
A   A
A   A
A   A
AAAAA
*/

console.log("Pattern = 10 Hollow Pyramid");


for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        if((i==1)||(j==1)||(j==2*i-1)||(i==5)){
            ans+= "A"
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}

/*
    A
   A A
  A   A
 A     A
AAAAAAAAA
 */

console.log("PATTERN 11 - HOLLOW INVERTED PYRAMID ");

for(i=5;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        if((i==5)||(j==1)||(j==2*i-1)||(i==1)){
            ans+="A";
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}

/*
  AAAAAAAAA
   A     A
    A   A
     A A
      A
*/


console.log("Pattern 12 Incresing number ");

for(i=1;i<=5;i++){
    ans = ""
    for(j=1;j<=i;j++){
        ans+= String.fromCharCode(j+64);
    }
    console.log(ans);
}

/**
 A
 AB
 ABC
 ABCD
 ABCDE
 */

 console.log("PATTERN - 13 decreaing numbers pattern");

 for(i=5;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        ans+= String.fromCharCode(j+64);
    }
    console.log(ans);
}

/**
ABCDE
ABCD
ABC
AB
A
 */

console.log("Pattern = 14 Right ALigned Pyramid with Characters");


for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=i;j++){
        
            ans+= "A"+" "
        
    }
    
    console.log(sp + ans);
}

/**
    A
   A A
  A A A
 A A A A
A A A A A

 */

console.log("Pattern = 15 Inverted Right ALigned Pyramid with Characters");

for(i=5;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=i;j++){
            ans+="A"+" ";

    }
    
    console.log(sp + ans);
}

/*
A A A A A
 A A A A
  A A A
   A A
    A
*/



console.log("Pattern 16 Diamond with solid center");
for(i=1;i<=5;i++){
    ans = ""
    for(j=1;j<=i;j++){
        ans+= String.fromCharCode(i+64);
    }
    console.log(ans);
}
 for(i=4;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        ans+= String.fromCharCode(i+64);
    }
    console.log(ans);
}

/*
A
BB
CCC
DDDD
EEEEE
DDDD
CCC
BB
A
*/

console.log("Pattern 17 Hollow Diamond using Number");

for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        if((i==1)||(j==1)||(j==2*i-1)){
            ans+="A";
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}
for(i=4;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        if((j==1)||(j==2*i-1)||(i==1)){
            ans+="A";
        }
        else{
            ans+=" "
        }
    }
    console.log(sp + ans);
}

/*
    A
   A A
  A   A
 A     A
A       A
 A     A
  A   A
   A A
    A
*/

console.log("Pattern - 18 Cross wuth numbers");

for(i=4;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        if((j==1)||(j==2*i-1)||(i==1)){
            ans+="A";
        }
        else{
            ans+=" "
        }
    }
    console.log(sp + ans);
}
for(i=2;i<=4;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        if((i==1)||(j==1)||(j==2*i-1)){
            ans+="A";
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}

/*
 A     A
  A   A
   A A
    A
   A A
  A   A
 A     A
*/

console.log("Pattern 19");
for(i=1;i<=5;i++){
    ans=""
    for(j=1;j<=5;j++){
        if((i==3)||(j==2)||(j==4)){
            ans+="A"
        }
        else{
            ans+=" "
        }
    }
    console.log(ans);
}

/*
 A A 
 A A 
AAAAA
 A A 
 A A
 */

console.log("Pattern 20 X with numbers");
for(i=4;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        if((j==1)||(j==2*i-1)||(i==1)){
            ans+="A";
        }
        else{
            ans+=" "
        }
    }
    console.log(sp + ans);
}
for(i=2;i<=4;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        if((i==1)||(j==1)||(j==2*i-1)){
            ans+="A";
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}
/*
A     A
 A   A
  A A
   A
  A A
 A   A
A     A
*/