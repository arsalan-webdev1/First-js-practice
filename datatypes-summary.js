// Primitive Data Types

// 7 types : String, Number, BigInt, Boolean, undefined, Symbol, null

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 34567890123456789012345678901234567890n
// if you type--> console.log(bigNumber) it shows--> // 3.4567890123456787e+37

// Reference Data Types (non-primitive)

// 3 Types: Object, Array, Function

const heros = ["shaktiman", "naagraj", "doga", "kapil"] 
let myObj = {
    name: "Arsalan",
    age: 14,
}

const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof heros)
// console.log(typeof anotherId)
// console.log(typeof myObj)
// console.log(typeof myFunction)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap Memory (Non-Primitive)

let Myyoutubename = "Arsalandotcom"

let anotherName = Myyoutubename
anotherName = "Arsalan"

// console.log(Myyoutubename)
// console.log(anotherName)

let userOne = {
    email: "arsalan@google.com",
    upi: "arsalan@upi"
}

let userTwo = userOne
userTwo.email = "arsalan@outlook.com"

console.log(userOne.email)
console.log(userTwo.email)