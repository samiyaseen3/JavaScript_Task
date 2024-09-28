//1

function findSmallest(arr) {

    return Math.min(...arr)

}
console.log(findSmallest([30, 45, 60, 7]), "|Q1");


//2

function AlphabeticalOrder(str) {
    // return str.split('').sort().join('');
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];

    }
    return reverse;
}

console.log(AlphabeticalOrder("hello"), "|Q2");


//Q3

// Q4


let x = [4,2,5]
function Multiply (arr1) {


}


// Q5

function doubleChar(str) {
   str.doubleChar("Coding");

}
console.log(doubleChar('Coding'),"|Q5");


function doubleChar(str1) {
    let doubleChar = ("");
    for (let i = 0; i < str1.length; i++) {
        doubleChar += str1[i] + str1[i];
    }
    return doubleChar;
}
console.log(doubleChar("Coding"), "|Q5");