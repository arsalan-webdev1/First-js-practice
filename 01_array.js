// array

const MyArr = [0, 1, 2, 3, 4, 5]
const MyHeros = ["shaktiman", "Nagraj"]

const MyArr2 = new Array([])
// console.log(MyArr[1])

// array methods

// MyArr.push(6)
// MyArr.push(7)
// MyArr.pop()

// MyArr.unshift(9)
// MyArr.shift(9)

// console.log(MyArr.includes(9))
// console.log(MyArr.indexOf(3))

// const newArr = MyArr.join()

// console.log(MyArr)
// console.log(newArr)

// splice, slice

console.log("A ", MyArr)

const myn1 = MyArr.slice(1, 3)

console.log(myn1)
console.log("B ", MyArr)

const myn2 = MyArr.splice(1, 3)
console.log("c ", MyArr)
console.log(myn2)

