"use strict"
//1
let agePerson = prompt("Enter Your Age :");
if (agePerson > 30 && agePerson <= 60){
    console.log("You are not eligible. You may join other programs.");
}
else if(agePerson >18 && agePerson < 30){
console.log("You are eligible. Start your application.");
}
else if (agePerson<18){
console.log("You may join the kids' program");
}
else if (agePerson>60){
console.log("You may join the seniors’ program.");
}
console.log(2024 - agePerson , "BirthDate");
//2
function switchCase(inputString) {
    return inputString
        .split('') 
        .map(char => {
           
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        })
        .join(''); 
}


const sampleInput = "OrAnGe";

const sampleOutput = switchCase(sampleInput);
console.log(sampleOutput); 
//3
function toCamelCase(inputString) {
    return inputString
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(''); 
}

// Example usage:
const sampleinput = "Coding Academy by Orange";
const sampleoutput = toCamelCase(sampleinput);
console.log(sampleoutput); 
//4
function removeItem (arr,element){
const index = arr.indexOf(element);
if (index != -1){
    arr.splice(index , 1)
}
return index;
}
let item = [1,2,3,4,5,6];
const elementRemove = 2;
const result = removeItem(item,elementRemove);
console.log(result);


//5
function oddAndEven (Number){
    let number = prompt("Enter a number");
if (number % 2 != 0){
    console.log("odd number");
}
else{
console.log("even number");
}
};
oddAndEven(4);
//6
function isNumber(input) {
    return typeof input === 'number' && !isNaN(input);
}
// Example usage:
console.log(isNumber(42));         // true
console.log(isNumber('42'));       // false
console.log(isNumber(NaN));        // false
console.log(isNumber(null));       // false
console.log(isNumber(undefined));  // false
console.log(isNumber(3.14));       // true
//7
function largestOfTwoNumber (numOne , numTwo){
 return Math.max(numOne , numTwo);
}
console.log(largestOfTwoNumber(2,4));
//8
function checkTriangle(x, y, z) 
{ 
     

    if (x == y && y == z) 
        console.log("Equilateral Triangle"); 
 

    else if (x == y || y == z || z == x) 
        console.log("Isosceles Triangle"); 
 

    else
    console.log("Scalene Triangle"); 
} 
let x = 8 , y = 7 , z = 9;
checkTriangle(x , y ,z);
//9
function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}
console.log(inRange(5, 1, 10));   
console.log(inRange(-5, 1, 10));   
console.log(inRange(20, 1, 10));   
//10
function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}


