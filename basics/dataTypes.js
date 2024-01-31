// "use strict " treat all js code as newer version
let name = "ahmad"
let number  = 22
let bool = true

console.table([name, number, bool])
// number 2=> to power 53
// bigint
/*
  boolen => true or false
  null  is a stand alone value
  string ""
  undefined   // where value is not assigned
  symbol   => unique
  objects
*/
// on the bases of memory means howw memory saves the data datatypes are divided into two categories
// prmitives and non primitives
/*
   primitives are call by values
   7 types: string , number , boolean , null, undrfined, symbol, bigint 

   non primitives are call by reference
   array , object, function  

*/
let id = Symbol('123')
let anotherid = Symbol('123')
console.log(id === anotherid)


// array
let arr = [1,2,3,3,3,4,4,4]
console.log(typeof arr)

// objects
 let obj ={
  name:"ahmad",
  age:23,
  program:"it"
 }
 console.log(typeof obj)
 //function
 let myfunction = function(){
  console.log('hello')
 }
 myfunction()
 console.log(typeof myfunction)



