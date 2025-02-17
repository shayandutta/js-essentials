//spread operators for object/array, used in functions too
//used to make duplicates

//make a duplicate array also add other elements
const arr = [1,2,3];
const duplicateArr = [...arr, 4,5,6,'apple']; //returning a new array using a spread operator
console.log(duplicateArr)

//Q. merge two arrays
const num1= [1,2,3,4,5];
const num2 = [6,7,8,9,10];
const newArr = [...num1, ...num2]
console.log(newArr)


//spread operators in object
//Q. merge objects

const obj1={
    a:1,
    b:2
}
const obj2={
    c: 'hello',
    d: 'developers'
}

// output:
//     res= {
//         a:1,
//         b:2,
//         c:'hello',
//         d:'developers'
//     }

const res = {...obj1, ...obj2};
console.log(res);

//spread operators in functions
function sum(...numbers){  //the numbers will come as an array from the arguements down
    console.log(numbers);
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}
console.log(sum(1,2,3,4,5))