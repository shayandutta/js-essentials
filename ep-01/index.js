//Template Literals

const age = 20;
const fullName = "shayan";

//output: Hello Mr. shayan your age is: 20

console.log("Hello Mr. " +fullName+ " your age is: "+age); //string concatenation

console.log(`Hello Mr. ${fullName} your age is: ${age}`) //template literal

//Q. print sum of two numbers

const a = 10;
const b = 20;

console.log(`sum of ${a} and ${b} is: ${a+b}`);