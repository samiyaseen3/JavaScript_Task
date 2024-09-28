//1

let student = {
    name: "Adam",
    age: 25,
}
student.gender = "male";
console.log(student, "|Q1");


//2

let student1 = {
    name: "Adam",
    age: 25,
}
student1.gender = "male";
let values = Object.values(student1)
console.log(values, "|Q2");


//3

let student2 = {
    name: "Adam",
    age: 25,
    gender: "male"
}
let entries = Object.entries(student2)
console.log(entries, "|Q3");


//4

let student3 = {
    name: "Adam",
    age: 25,
}
let assign = Object.assign(student3)
student3.gender = "male";
console.log(student3, "|Q4");


//5

let student4 = {
    name: "Adam",
    age: 25,
}
let seal = Object.seal(student4)
console.log(student4, "|Q5");
