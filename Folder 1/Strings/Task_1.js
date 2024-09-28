let text = "welcome to orange";
console.log(text.toUpperCase());
console.log(text.slice(7,10));
console.log(text.replace('welcome' , 'hello'));
console.log(text.length);
console.log(text.concat(" Jordan"));
let parts = text.split(" ");
parts[parts.length - 1] = `"${parts[parts.length - 1]}"`
console.log(parts);
let str = parts.join(" ");
console.log(str);













