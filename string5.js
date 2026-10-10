const Name = "Arsalan"
const repocount = 5

// console.log(Name + repocount + "value")

// console.log(`Hello my name is ${Name} and I my repocount is ${repocount}.`)

const gamename = new String("Gta-v-5")

// console.log(gamename[0])
// console.log(gamename.__proto__)

// console.log(gamename.length)
// console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf("a"))

const newstring = gamename.substring(0, 4)
console.log(newstring)

const anotherstring = gamename.slice(-8, 4)
console.log(anotherstring)

const newsrtingOne ="     gta 5     "
console.log(newsrtingOne)
console.log(newsrtingOne.trim())

const url = 'https://Arsalan.com/Arsalan20%choudhary'

console.log(url.replace('20%', '-'))

console.log(url.includes('Arsalan'))

console.log(gamename.split('-'))