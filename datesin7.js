// Dates 

let Mydate = new Date()
// console.log(Mydate.toString())
// console.log(Mydate.toDateString())
// console.log(Mydate.toISOString())
// console.log(Mydate.toJSON())
// console.log(Mydate.toLocaleDateString())
// console.log(Mydate.toString())

// let myCreatedDate = new Date(2026, 0, 23)
// let myCreatedDate = new Date(2026, 0, 23, 5, 3)
// let myCreatedDate = new Date(2026-01-14)
let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let NewDate = new Date()

// console.log(NewDate)
// console.log(NewDate.getMonth() + 1)
// console.log(NewDate.getDay())

// '${NewDate.getDay() and the time.... and so on}'

NewDate.localestring('default', {
    weekday: "long"
})