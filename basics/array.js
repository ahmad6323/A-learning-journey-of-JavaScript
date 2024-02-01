// arrays 
const hereos = ['ahmad', 'ali', 'farhan ', 'moin']
const heros2  = ['umair', 'qasim', 'zahid','hamza']


// hereos.push(heros2)
// console.log(hereos)

const allheroes = hereos.concat(heros2)

// console.log(allheroes)
// now using spread operator
const allnew = [...hereos, ...heros2]
console.log(allnew)

console.log(Array.isArray('ahmad'))
console.log(Array.from('ahmad'))
console.log(Array.from({name:'ahmad'}))   //interesting

let score = 100
let score1 = 200
let score2  = 300

console.log(Array.of(score,score1, score2))


