// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)
// console.log(2 >= 1)
// console.log(2 <= 1)

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
// The reason for this is that when comparing null with a number, JavaScript converts null to 0 for the comparison. However, when using the equality operator (==), null is only equal to undefined and not to any other value, including 0.

// ===

console.log( "2" === 2)