//memorization
//js objects, keys will be arg to fn, value will be the return value

// const fib = (n, memo = {}) => {
//     if (n in memo) return memo[n];
//     if (n <= 2) return 1;
//     memo[n] = fib(n-1, memo) + fib(n-2, memo);
//     return memo[n];
// };

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50));


// const gridTraveler = (m, n, memo={}) => {
//     const key = m + ',' + n;
//     if (key in memo) return memo[key];
//     if (m ===1 && n===1) return 1;
//     if (m ===0 || n===0) return 0;
//     memo[key] = gridTraveler (m-1, n, memo) + gridTraveler (m, n-1, memo);
//     return memo[key];
// };

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 2));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));

// const canSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return true;
//     if (targetSum < 0 ) return false;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         if (canSum(remainder, numbers, memo) === true) {
//             memo[targetSum] = true;
//             return true;
//         }
//     }

//     memo[targetSum] = false;
//     return false;
// };

// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));

// const howSum = (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderResult = howSum(remainder, numbers, memo);
//         if (remainderResult !== null) {
//             memo[targetSum] = [...remainderResult, num];
//             return memo[targetSum];
//         }
//     }

//     memo[targetSum] = null;
//     return null;
// };

// console.log(howSum(7, [2, 3]));
// console.log(howSum(7, [5, 3, 4, 7]));
// console.log(howSum(7, [2, 4]));
// console.log(howSum(8, [2, 3, 5]));
// console.log(howSum(300, [7, 14]));


// const bestSum= (targetSum, numbers, memo={}) => {
//     if (targetSum in memo) return memo[targetSum];
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestCombination = null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderCombination = bestSum(remainder, numbers, memo);
//         if (remainderCombination !== null) {
//            const combination = [...remainderCombination, num];

//            if (shortestCombination === null || combination.length < shortestCombination.length) {
//                shortestCombination = combination;
//            }
//         }
//     }

//     memo[targetSum] = shortestCombination;
//     return shortestCombination;
// };

// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));


// DESTRUCTURING ASSIGNMENT

var sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
}
//code pulls bread and meat out of the object and creates local variables

var {bread, meat} = sandwich

console.log(bread, meat);

// bread and meat variables can be changed

var {bread, meat} = sandwich

bread = "garlic"
meat = "turkey"

console.log(bread)
console.log(meat)

console.log(sandwich.bread, sandwich.meat)

// destructuring incoming function arguments

var lordify = regularPerson => {
    console.log(`${regularPerson.firstName} of Canterbury`)
}
var regularPerson = {
    firstName: "Bill",
    lastName: "Wilson"
}

lordify(regularPerson);

// object literal enhancement--restructuring

// var name = "Louis"
// var age = 20

// var person = {name, age}

// console.log(person)


const calcA = (radius) => {
    let area = 3.142* radius* radius;
    return area;
}
const area = calcA(7);

console.log('Area is', area);

//arrow function
// const calcA = (radius) => {
//     let area = 3.142 * radius ** 2;
//     return area;
// };
// const area = calcA(7);
// console.log('Area is', area);


// classes in javascript--> old JS

// function Vacation(destination, length) {
//     this.destination = destination
//     this.length = length
// }
// Vacation.prototype.print = function () {
//     console.log(this.destination + " | " + this.length + "days")
// }

// let maui = new Vacation ("maui", 7);

// maui.print();

// classical ES6/ new JS

class vacation {

    constructor (destination, length) {
        this.destination = destination
        this.length = length
    }

    print () {
        console.log(`${this.destination} will take ${this.length} days.`);
    }
}
var maui = new vacation ("maui", 7);

maui.print();


// functional programming
var log = function (message) {
    console.log(message)
}
log('I am a Javascript developer')

let message = function(length) {
    console.log(length)
};
message('My length is 20cm')

// arrow functions
const wig = (message) => console.log(message)
wig("I am a wig")

// functions are variables, can be added to objects
const obj = {
    message: "This is a message!",
    log (message) {
        console.log(message)
    }
}
obj.log(obj.message)
// functions added to arrays
const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "Like variables",
    message => console.log(message)
]
messages[1](messages[0])
messages[3](messages[2])

// functions to other functions as arguments
const insideFn = logger => {
  logger("They can be inserted to other functions as arguments")
}
  insideFn(message => console.log(message))

// functions can be returned from other functions just like variables

var createScream = function (logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!")
    }
}

const scream = createScream(message => console.log(message))

scream("functions can be returned from other functions")
scream("createScream returns a function")
scream("invokes that returns a function")

// immutability--data that does'nt change
// mutate data

let color_lawn = {
    tittle: 'lawn',
    color: '#00ff00',
    rating: 0
}
// function to change the color ratings of the object

// function rateColor(color, rating) {
//     color.rating = rating
//     return color
// }

// console.log(rateColor(color_lawn, 5).rating)
// console.log(color_lawn.rating)


var rateColor = function(color, rating) {
    return Object.assign({}, color ,{rating:rating})
}
console.log(rateColor(color_lawn, 5).rating)
console.log(color_lawn.rating)

let list = [
    {title: "Red Red"},
    {title: "lawn"},
    {title: "party pink"}
]

// var addColor = function(title, colors) {
//     colors.push({ title: title })
//     return colors
// }

// console.log(addColor("Glam Green", list).length)
// console.log(list.length)

// ES6 syntax
const addColor = (title, list) => [...list, {title}]
console.log(addColor("Glam Green", list).length)



// pure and impure functions

// impure function--> mutates the arguments passed in the function

// const fredrick = {
//     name: "fredrick Douglas",
//     canWrite: false,
//     canRead: false
// }

// const selfEducate = (person) => {
//     person.canWrite = true
//     person.canRead = true
//     return person
// }

// console.log(selfEducate(fredrick))
// console.log(fredrick)

// pure function-->treats the arguments sent to the function as immutable

const fredrick = {
    name: "Fredrick Douglas",
    canRead: false,
    canWrite: false
}

const selfEducate = (person) =>
({
    ...person,
    canRead: true,
    canWrite: true
})

console.log(selfEducate(fredrick))
console.log(fredrick)

// data transformation.
// array.join function

const school = [
    "Bungoma",
    "Kibabii",
    "Teremi",
    "Kamusinga"
]

console.log(school.join(", "))

// array.filter function

const kSchools = school.filter(school => school[0] ==='K')

console.log(kSchools)

// array.map-->takes a function a function as its arguments.
// this  function will be invoked once for the every item in the array

const highSchools = school.map(school => `${school} High School`)
console.log(highSchools.join("\n"))
// console.log(school.join("\n"))

const hSchool = school.map(school => ({name: school}))
console.log(hSchool)


say = "I hate coding!"
console.log(say.replace('hate', 'love'))

// reduce function and reduceRight function
const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    if (age > max) {
        return age
    } else {
        return max
    }
}, 0)

console.log('maxAge', maxAge);

// array.reduceRight

const colors = [
    {
        id: '-xekare',
        title: "rad red",
        rating: 3
    },
    {
        id: '-jbwsof',
        title: "big blue",
        rating: 2
    },
    {
        id: '-prigbj',
        title: "grizzly grey",
        rating: 5
    },
    {
        id: '-ryhbhsl',
        title: "banana",
        rating: 1

    }
]

const hashColors = colors.reduce(
    (hash, {id, title, rating}) => {
        hash[id] = {title, rating}
        return hash
    },
    {}
)

console.log(hashColors);

property = "This is the Bahai center";

console.log(property.replace("This is the Bahai center", "hi"))

// countdown numbers from 10 to 0

const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value-1, fn): value
}

countdown(10, value => console.log(value));

const serializeClockTime = date =>({
    hours: date.getHours(),
    hours: date.getMinutes(),
    hours: date.getSeconds()
})
// console.log(serializeClockTime());


function reverser(thing) {
    return thing
    .split('')
    .reverse('')
    .join('');
}

function palindrome(word) {
    // if (word == reverser(word)){
    //     return true;
    // } else {
    //     return false;
    // }
    if (word == word.split('').reverse('').join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('whitehouse'));
console.log(palindrome('racecar'));

const fruits = ['banana', 'orange', 'pineapple', 'berry'];
// console.log(fruits[0]);
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//add two numbers
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));

//reverse numbers
function reverserNum(n) {
    n = n+ "";
    return n.split('').reverse('').join('');
}
console.log(reverserNum("Micah"));

// check prime
function prime(n) {
    if (n==1){
        return false;
    } else if (n==2) {
        return true;
    } else {
        for(x=2; x<n; x++) {
            if (n%x ==0) {
                return false;
            }
        }
        return true;
    }
}

console.log(prime(37));

const addNum = (a, b)=> {
    return  (a + b);
}
console.log(addNum(1, 2));

const password = () => {
    let newPassword = 'password';

    for (i = 0; i <= newPassword.length; i++) {
        return true;
    }
    return false;
}
console.log(password())

// factorial using for loop

const factorial = (n) => {
    if (n === 0 || n === 1)
    return 1;

   for (i = n-1; i >= 1; i--) {
       n *= i;
   }

   return n;
}
console.log(factorial(6));

// factorial using recursion

function factorialize (n) {
    if (n < 0)
       return "No factorial of a negative number!";
    else if (n == 0)
       return 1;
    else {
        return (n * factorialize(n-1))
    }
}
console.log(factorialize(6))

// factorial using while loop

const fact = (num) => {
    let result = num;
    if (num === 0 || num === 1)
       return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
console.log(fact(6));

let a = 1;
let b = 0;
while (a <= 3) {
    a++;
    b += a * 2;

    console.log(b);
}


let d = 'talk';
let c = 'code';

if (d != c.length){
    console.log("don't show me the code")
} else {
    console.log("show me the code")
}

// OOP concepts
// Objects and methods
// Features:
// Actions that can be performed on objects are what we term JavaScript methods.
// The objects can also be called without using parenthesis.
// This refers to the owner object in a method.
let employee = {
    name: "James",
    department: 'Sales',
    details: function () {
        return this.name +" " + "works at" + " " +
        this.department + " " + "Department";
    }
};
console.log(employee.details());

