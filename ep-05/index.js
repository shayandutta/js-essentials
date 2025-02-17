//function declaration
function sum(num1, num2) {
  //num1, num2 are the parameters
  console.log(num1 + num2);
}

sum(100, 200); //calling the function with arguements 100 and 200

//function expression -> when we assign a function to a variable

const sumOfTwoNum = function (n1, n2) {
  //anonymous function expression
  console.log(n1 + n2);
};

// const sumOfTwoNum = function sum(n1, n2){ //named function expression
//     console.log(n1+n1);
// }

sumOfTwoNum(2, 3);

//callback functions ->functions that depend on another function
const doSomething = function (x) {
  //x is any parameter name
  console.log("samosa ban raha hai");
  setTimeout(function () {
    callbackFunction();
  }, 3000);
};

const callbackFunction = function () {
  console.log("samosa ready hai");
};

doSomething(callbackFunction);

//HOF
// const radius = [1, 2, 3, 4];
// const area = function (radiusArray) {
//radiusArray acts as a placeholder for whatever array is passed when calling the function. In this case, radiusArray = [1, 2, 3, 4] because you call area(radius), and radius is [1,2,3,4].

//   const result = [];
//   for (let i = 0; i < radiusArray.length; i++) {
//     const ar = Math.PI * radiusArray[i] * radiusArray[i];
//     result.push(ar);
//   }
//   return result;
// };

// const ans = area(radius);
// console.log(ans);



// const circumference = function(radiusArray){
//     const result = [];
//     for(let i = 0; i<radiusArray.length; i++){
//         const ar = 2* Math.PI * radiusArray[i];
//         result.push(ar);
//     }
//     console.log(result);
// }

// circumference(radius);



//how HOF is better?
const radius = [1, 2, 3, 4];
const formulaOfArea = function(r){ //r will be radius
    return Math.PI*r*r;
}
const formulaOfCircumference = function(r){ //r will be radius
    return 2*Math.PI*r;
}
const calculate = function(radiusArray, formula){ //formula is a callback function(formulaOfCircumference or formulaOfArea) //radiusArray will take the radius values
    const result = [];
    for(let i=0; i<radiusArray.length; i++){
        const ar = formula(radiusArray[i]);
        result.push(ar);
    }
    return result;
}
console.log(calculate(radius, formulaOfArea));
console.log(calculate(radius, formulaOfCircumference));



//Arrow function

// const multiply = (num1, num2) => {
//     return num1*num2;
// }
const multiply = (num1, num2) => num1*num2; //when the arrow function body isnt big then this can be made even shorter by removing {} and return keyword
console.log(multiply(2,3));