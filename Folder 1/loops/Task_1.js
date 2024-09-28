//1
console.log("For Loop");
for (let i=0;i<50;i++){
    if (i%2==0){
        console.log(i);
    }
}
console.log("-------------------------------------------------------------------------");
console.log("While Loop");
let number=0;
while(number<50){
    if(number%2==0){
        console.log(number);
    }
    number++;
}
//2
for (let i = 0; i < 50; i += 2) {
    console.log(i);
}
//3
// Print even numbers
for (let i = 0; i < 50; i += 2) {
    console.log(i);
}

// Print odd numbers
for (let i = 1; i < 50; i += 2) {
    console.log(i);
}
//4
for (let i = 1;i<=100;i++){
    if (i%3==0){
        console.log("Fizz");
        
    }
    else if (i%5==0){
      console.log("Buzz");
      
    }
    else if (i%3==0 && i%5==0){
console.log("FizzBuzz");

    }
    else{
        console.log(i);
        
    }
}
//5
function counts (i){
  for (let i = 1;i<=100;i++){
      if (i%3==0){
        console.log("Fizz");
      }
      else if (i%5==0){
        console.log("buzz");
      }
      else if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
      }
      else{
      console.log(i);
      }
  }
}
for (let i = 1; i <= 100; i++) {
    counts(i);
}
//6
function fizzBuzz(n = 1) {
    if (n > 100) return; 
  
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz");
    } else if (n % 3 === 0) {
      console.log("Fizz");
    } else if (n % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(n);
    }
    fizzBuzz(n + 1); 
  }
  //7
  function convertToBanknotes(amount, banknotes) {
    const result = [];
    for (let note of banknotes) {
        while (amount >= note) {
            result.push(note);
            amount -= note;
        }
    }
    return result;
}
const output = convertToBanknotes(57, [25, 10, 5, 1]);
console.log(output); 
  
  fizzBuzz();
  //8
  function countChar (str , char){
   const lowerStr = str.toLowerCase();
   const lowerChar = char.toLowerCase();
   let count = 0;
   for (let i=0;i<lowerStr.length;i++){
    if (lowerStr[i] == lowerChar){
      count++;
    }
   }
   return count;
  }
  const result = countChar("Coding Academy by Orange", "o")
  console.log(result);
  //9
  // a. Print the numbers 0 - 20, one number per line.
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 29; i++) {
  if (i % 2 !== 0) {
      console.log(i);
  }
}

// c. Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (let i = 12; i >= -14; i--) {
  if (i % 2 === 0) {
      console.log(i);
  }
}

// d. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
      console.log(i);
  }
}
//10
// Initialize variables
const str = 'CodingAcademy';
const arr = [7, 500, 'KH404', 'black', 36];

// e. Print each element of the array to a new line.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// f. Print each string character in reverse order to a new line.
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}
//11
let numbers = [7 , 23 , 18 , 9 , -13 , 38 , -10 , 12 , 0 , 124];
let evenNum = [];
let oddNum = [];
numbers.forEach(e => {
  if (e % 2 ==0){
    evenNum.push(e);
  }
  else {
    oddNum.push(e);
  }
});
console.log(evenNum , "even number");
console.log(oddNum , "odd number");
//12
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

function generateUniqueMeals(numMeals) {
  const proteins = ['chicken', 'noodles', 'tofu', 'beef', 'fish', 'beans'];
  const grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
  const vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
  const beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
  const desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

  const meals = [];

  const shuffledProteins = shuffleArray([...proteins]);
  const shuffledGrains = shuffleArray([...grains]);
  const shuffledVegetables = shuffleArray([...vegetables]);
  const shuffledBeverages = shuffleArray([...beverages]);
  const shuffledDesserts = shuffleArray([...desserts]);

  for (let i = 0; i < numMeals; i++) {
      const meal = {
          protein: shuffledProteins[i % shuffledProteins.length],
          grain: shuffledGrains[i % shuffledGrains.length],
          vegetable: shuffledVegetables[i % shuffledVegetables.length],
          beverage: shuffledBeverages[i % shuffledBeverages.length],
          dessert: shuffledDesserts[i % shuffledDesserts.length],
      };
      meals.push(meal);
  }

  return meals;
}


const numberOfMeals = 5;
const mealOptions = generateUniqueMeals(numberOfMeals);
console.log(mealOptions);



  