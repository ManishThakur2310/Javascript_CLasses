// Pattern - 1 ----------(Right Angle Triangle)-------------------------------
console.log("PATTERN 1");
for(i=1;i<=5;i++){
    ans = ""
    for(j=1;j<=i;j++){
        ans=ans+i;
    }
    console.log(ans);
}

/*output
1
22
333
4444
55555
*/


console.log("New=====================");

// Pattern - 2 -------------Inverted Right Angled Triangle------

console.log("PATTERN = 2");
for(i=5;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        ans+=i
    }
    console.log(ans);
}
/**
55555
4444
333
22
1
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
        ans+=i+" "
    }
    
    console.log(sp + ans);
}

/*
    1
   2 2
  3 3 3 
 4 4 4 4 
5 5 5 5 5 
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
        ans+=i+" "
    }
    console.log(sp+ans);
}

/*
5 5 5 5 5
 4 4 4 4 
  3 3 3
   2 2
    1 
*/
console.log("pATTERN =5");
for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+=i;
    }
    
    console.log(sp + ans);
}

/*
    1
   222
  33333
 4444444
555555555
 */

console.log("PATTERN= 6");

for(i=5;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+=i;
    }
    
    console.log(sp + ans);
}
/*
  555555555
   4444444
    33333
     222
      1
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
        ans+=i;
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
        ans+=i;
    }
    
    console.log(sp + ans);
}
/*
    1
   222
  33333
 4444444
555555555
 4444444
  33333
   222
    1
*/

console.log("PATTERN=8 HOURGLASS");
for(i=5;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+=i;
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
        ans+=i;
    }
    
    console.log(sp + ans);
}
/**
 555555555
  4444444
   33333
    222
     1
    222
   33333
  4444444
 555555555
 */

console.log("Pattern = 9 HOLLOW SQUARE");
for(i=1;i<=5;i++){
    ans=""
    for(j=1;j<=5;j++){
        if((i==1)||(j==1)||(j==5)||(i==5)){
            ans+="5"
        }
        else{
            ans+=" "
        }
    }
    console.log(ans);
}
/*
55555
5   5
5   5
5   5
55555
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
            ans+=i;
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}

/*
    1
   2 2
  3   3
 4     4
555555555
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
            ans+=i;
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}

/*
  555555555
   4     4
    3   3
     2 2
      1
*/


console.log("Pattern 12 Incresing number ");

for(i=1;i<=5;i++){
    ans = ""
    for(j=1;j<=i;j++){
        ans=ans+j;
    }
    console.log(ans);
}

/**
 1
 12
 123
 1234
 12345
 */

 console.log("PATTERN - 13 decreaing numbers pattern");

 for(i=5;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        ans+=j
    }
    console.log(ans);
}

/**
12345
1234
123
12
1
 */

console.log("Pattern 16 Diamond with solid center");
for(i=1;i<=5;i++){
    ans = ""
    for(j=1;j<=i;j++){
        ans=ans+i;
    }
    console.log(ans);
}
 for(i=4;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        ans+=j
    }
    console.log(ans);
}

/*
1
22
333
4444
55555
4444
333
22
1
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
            ans+=i;
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
            ans+=i;
        }
        else{
            ans+=" "
        }
    }
    console.log(sp + ans);
}

/*
    1
   2 2
  3   3
 4     4
5       5
 4     4
  3   3
   2 2
    1
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
            ans+=i;
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
            ans+=i;
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}

/*
 4     4
  3   3
   2 2
    1
   2 2
  3   3
 4     4
*/

console.log("Pattern 19");
for(i=1;i<=5;i++){
    ans=""
    for(j=1;j<=5;j++){
        if((i==3)||(j==2)||(j==4)){
            ans+="5"
        }
        else{
            ans+=" "
        }
    }
    console.log(ans);
}

/*
 5 5 
 5 5 
55555
 5 5 
 5 5
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
            ans+="*";
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
            ans+="*";
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}
/*
*     *
 *   *
  * *
   *
  * *
 *   *
*     *
*/