//1 
let arr = [1 , 2 , 3];
let arr2 = [4 , 5 , 6];
let newArr = arr.concat(arr2);
console.log(newArr , "Q1");
//2
let arr3 =[1,2,3,4,5,6];
let newArr2 = arr3.slice(0,2).concat(arr3.slice(4));
console.log(newArr2 , "Q2");
//3 
let arr4 = [1,2,3,4,5];
let arr5 = arr4.splice(1,1);
console.log(arr5 , "Q3");
//4
let arr6 = [1,2,3,4,5,6];
console.log(arr6.join(",") , "Q4");
//5
console.log("Q5:");

let arr7 = [1,2,3,4,5,6];
arr7.forEach(element => {
    console.log(element);
});





