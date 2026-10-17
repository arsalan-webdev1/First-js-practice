// singleton
// object.create
// object literals

const mySym = Symbol("key1")



const JSuser = {
    name: "Arsalan",
    [mySym]: "myKey1",
    age: 14,
    "full name": "Arsalaan Azhar",
    location: "Hyderabad",
    email: "arsalan@google.com",
    isloggedIn: false,
    lastloginDays: ["monday", "Sundayy"]
}

// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["full name"])
// console.log(typeof JSuser[mySym])

JSuser.email = "arsalan@chatgpt.com"
// Object.freeze(JSuser)
JSuser.email = "arsalan@microsoft.com"
// JSuser.location = "Badin"
// console.log(JSuser)

JSuser.greeting = function(){
    console.log("Hello JS user")
}
JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JSuser.greeting())
console.log(JSuser.greetingTwo())