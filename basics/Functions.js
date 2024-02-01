function sum (number1 , number2){
     return number1+number2
}
const result  = sum(22,33)

console.log(result)

function calculate (...num){  // rest operator
    return num
}

console.log(calculate(22,33,44,55,66))

const obj = {
    name : "ahmad",
    age: 22
}


function handleObject (anyobj){
   console.log(`the name of the user is ${anyobj.name} and the age of the user is ${anyobj.age}`)
}
handleObject(obj)

// arrow functions 

let add = (num1, num2) =>{
  return num1 + num2
}
add(22,33)

// another method of declaration
  let add1 = (num3, num4) => num3 + num4

  // another 

  let add2 = (num5, num6) => (num5 + num6)

  

// this keyword tell us the current context 
let object  = {
    name: 'ahmad',
    helloMessage: function (){
        console.log(`${this.name}  wellcome our website `)
    }
    
}
object.helloMessage()
object.name = "ali"
object.helloMessage()
console.log(this)

