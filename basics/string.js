let name  =  "ahmad"
let repo  = 50
console.log(`this is string of ${name} and repo count is ${repo}`)

const game = new String("ahmad")
console.log(game[0])
console.log(game.length)
// it tells that the value of the string index value of 2

console.log(game.charAt(2))
// it gives the index value at d

console.log(game.indexOf('d'));

const newString  = game.substring(0,3)
console.log(newString)

const string2 = game.slice(-2)
console.log(string2)

const newstring1 = "muhammad"
console.log(newstring1)
console.log(newstring1.trim())


const url = "https//:muhammad%ahmad"
console.log(url.replace("%",'-'))

console.log(url.includes('ahmad'))
console.log(url.includes('ali'))









