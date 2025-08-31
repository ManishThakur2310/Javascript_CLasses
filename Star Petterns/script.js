console.log("PATTERN 1 --(Right Angle Triangle)-");
for(i=1;i<=5;i++){
    ans = ""
    for(j=1;j<=i;j++){
        ans=ans+"*";
    }
    console.log(ans);
}

/*output
*
**
***
****
*****
*/


console.log("Pattern -2 ");
for(i=5;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        ans+="*"
    }
    console.log(ans);
}
/**
*****
****
***
**
*
 */


console.log("pATTERN=3");
for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=i;j++){
        ans+="*"+" "
    }
    
    console.log(sp + ans);
}

/*
    *
   * *
  * * * 
 * * * * 
* * * * * 
*/

console.log("PATTTERN= 4");
for(i=5;i>=1;i--){
    ans=""
    sp=""
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    for(j=1;j<=i;j++){
        ans+="*"+" "
    }
    console.log(sp+ans);
}

/*
* * * * * 
 * * * * 
  * * *
   * *
    * 
*/

console.log("pATTERN =5");
for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+="*";
    }
    
    console.log(sp + ans);
}

/*
    *
   ***
  *****
 *******
*********
 */

console.log("PATTERN= 6");

for(i=5;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+="*";
    }
    
    console.log(sp + ans);
}
/*
  *********
   *******
    *****
     ***
      *
 */

console.log("DIAMOND PATTERN 7");

for(i=1;i<=5;i++){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+="*";
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
        ans+="*";
    }
    
    console.log(sp + ans);
}
/*
      *
     ***
    *****
   *******
  *********
   *******
    *****
     ***
      *
*/


console.log("PATTERN=8 HOURGLASS");
for(i=5;i>=1;i--){
    sp="";
    for(j=1;j<=5-i;j++){
        sp+=" "
    }
    ans="";
    for(j=1;j<=2*i-1;j++){
        ans+="*";
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
        ans+="*";
    }
    
    console.log(sp + ans);
}
/**
  *********
   *******
    *****
     ***
      *
     ***
    *****
   *******
  *********
 */

console.log("Pattern = 9 HOLLOW SQUARE");
for(i=1;i<=5;i++){
    ans=""
    for(j=1;j<=5;j++){
        if((i==1)||(j==1)||(j==5)||(i==5)){
            ans+="*"
        }
        else{
            ans+=" "
        }
    }
    console.log(ans);
}
/*
*****
*   *
*   *
*   *
*****
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
            ans+="*";
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}

/*
    *
   * *
  *   *
 *     *
*********

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
            ans+="*";
        }
        else{
            ans+=" "
        }
    }
    
    console.log(sp + ans);
}

/*
  *********
   *     *
    *   *
     * *
      *
*/

console.log("Pattern 12 Incresing Stars ");

for(i=1;i<=5;i++){
    ans = ""
    for(j=1;j<=i;j++){
        ans=ans+"*";
    }
    console.log(ans);
}

/*

 *
 **
 ***
 ****
 *****

 */

console.log("PATTERN - 13 decreaing numbers pattern");

 for(i=5;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        ans+="*"
    }
    console.log(ans);
}

/*

*****
****
***
**
*

*/


console.log("Pattern 16 Diamond with solid center");
for(i=1;i<=5;i++){
    ans = ""
    for(j=1;j<=i;j++){
        ans=ans+"*";
    }
    console.log(ans);
}
 for(i=4;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        ans+="*";
    }
    console.log(ans);
}

/*
*
**
***
****
*****
****
***
**
*
*/

console.log("Pattern 17 Hollow Diamond using Stars");

for(i=1;i<=5;i++){
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

/*
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
*/

console.log("Pattern - 18 Cross wuth Stars");

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

console.log("Pattern 19");
for(i=1;i<=5;i++){
    ans=""
    for(j=1;j<=5;j++){
        if((i==3)||(j==2)||(j==4)){
            ans+="*"
        }
        else{
            ans+=" "
        }
    }
    console.log(ans);
}

/*

 * * 
 * * 
*****
 * * 
 * *
 
*/

console.log("Pattern 20 X with Stars");
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


console.log("Pattern - 21");
for(i=5;i>=1;i--){
    ans=""
    for(j=1;j<=i;j++){
        if((i==5)||(j==1)||(j==i)){
            ans+="*"
        }
        else{
            ans+=" "
        }
    }
    console.log(ans);
}

/*
*****
*  *
* *
**
*
*/ 


console.log("Pattern 19  hollow plus");
for(i=1;i<=5;i++){
    ans=""
    for(j=1;j<=5;j++){
        if((i==3)||(j==2)||(j==4)){
            ans+="*"
        }
        else{
            ans+=" "
        }
    }
    console.log(ans);
}

/*

 * * 
 * * 
*****
 * * 
 * *
 
*/


console.log("Pattern 23 Vertical Diamond");

for(i=1;i<=5;i++){
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

/*
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
*/


console.log("Pattern 24 (Z)");

for(i=1;i<=5;i++){
    ans=""
    for(j=1;j<=5;j++){
        if((i==1)||((i==2) &&(j==4))||((i==3)&&(j==3))||((i==4)&&(j==2)) ||(i==5)){
            ans+="*"
        }
        else{
            ans+=" "
        }
    }
     console.log(ans);
}

/**

*****
   *
  *
 *
*****

 */

console.log("pattern - 25 Checkboard Pattern");
for(i=1;i<=4;i++){
    ans=""
    for(j=1;j<=4;j++){
        if((i==1)||(i==3)){
            ans+="*"
        }
        else{
            ans+="*"
        }
    }
    console.log(ans);
}