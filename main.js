
//1.
const person = [{ name: "Jill" }, { name: "" }, { name: "Bob" }];
//create a function 'greeting' that maps through the array.
// Use a ternary.
// If there is a name it should say 'Hello <name>' otherwise it should say,
// 'Hello Stranger'.

function greeting(arr) {
  for (const user of arr) {
    user.name !== ''
    ? console.log(`Hello ${user.name}`)
    : console.log('Hello Stranger') 
  }
}

greeting(person)


//2.
///Create a function that uses ternary to decide whether the person can drive
// If they are below 15 then log 'cannot drive', if they are 15 then log 'can drive with a parent', if they are 16 or above then 'yes they can drive'

function drive(age){
age < 15
? console.log('cannot drive')
: age === 15
? console.log('can drive with a parent')
: console.log('yes they can drive')
}

drive(16)


//3.
// create a variable speedMessage that has a value resulting from a ternary
// if the speed equals 70 it should say '70 is the perfect speed'
// if the speed is greater than or equal to 90 it should say 'Are you trying to get us killed'
// if the speed is less than 50 it should have the value 'Faster please'
// if speed is less than 10 it should say you should not drive
// create a variable allowableSpeed that sets a speed based on the range of numbers that are left. so...if allowableSpeed is set to a number in that range your default output should be `<speed> is a decent speed`
// ---

const speed = 80
const speedMessage = speed === 70
  ? console.log('70 is the perfect speed')
  : speed >= 90
  ? console.log('Are you trying to get us killed')
  : speed >= 10 && speed < 50
  ? console.log('Faster please')
  : speed < 10
  ? console.log('You should not drive')
  : console.log(`${speed} is a decent speed`)

  console.log(speedMessage)
  

//4. 
// map through an array and if the value is greater than 50 it goes in the arr1
//if the array is less than 50 it goes in arr2
// if the value is a string arr3
//floating point numbers should only have 2 decimal places with the exact numbers not rounded
//use ternary
// use an array method BUT do not return a data structure when you iterate through your items.
// OUTPUT:
//[ 445, 4555 ][ 22, 33.99, 1, 44.98 ] [ 'peaches', 'apple' ]
let arr = [
    'peaches',
    444.7,
    22,
    undefined,
    33.99999,
    null,
    1,
    'apple',
    4555,
    undefined,
    NaN,
    44.98999,
  ]
  let arr1 = []
  let arr2 = []
  let arr3 = []
  
  arr.map((item) => {
    typeof item === 'number' && item > 50
    ? arr1.push(item)
    : typeof item === 'number' && item < 50
    ? arr2.push(Math.floor(item*100)/100)
    : typeof item === 'string'
    ? arr3.push(item)
    : null
  })
 
  console.log(arr)
  console.log(arr1)
  console.log(arr2)
  console.log(arr3)
  

  
// Object Methods:
//Use object methods to solve problem
// Write a method that doubles the price of each item in the prices object and place those values in a new object called priceDoubler
let prices = {
  cigarettes: 5.99,
  coke: { lg: 2.99, sm: 1.99 },
  chips: 2.79,
}
let priceDoubler = {}

let {
  cigarettes,
  coke: {lg, sm},
  chips
} = prices

priceDoubler.cigarettes = cigarettes * 2
priceDoubler.lg = lg * 2
priceDoubler.sm = sm * 2
priceDoubler.chips = cigarettes * 2
console.log(priceDoubler)

