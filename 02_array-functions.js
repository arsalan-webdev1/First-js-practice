const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const Dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(Dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allheros = marvel_heros.concat(Dc_heros)
// console.log(allheros)

const all_new_heros = [...marvel_heros, ...Dc_heros]

// console.log(all_new_heros)

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)



console.log(Array.isArray("Arsalan"))
console.log(Array.from("Arsalan"))
console.log(Array.from({name : "Arsalan"})) // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))