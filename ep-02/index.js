// destructuring in array

const array = [1,2,3,4,5];
console.log(array[1]);
console.log(array[2]);

const [a,b,c,d,e] = array; //a=1, b=2, c=3, d=4, e=5
console.log(e);

//object destructuring

const person = {
    name: 'shayan',
    age: 21,
    gender: 'male',
    address: 'guwahati'
}

//access value(3 ways)
//1. Dot notation
console.log(person.name)
console.log(person.address)
//2.bracket notation
console.log(person["gender"]);
//destructuring
const {name, age, gender, address } = person;
console.log(name);
console.log(age);
