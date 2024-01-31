//------------operations--------------
let value = 33
let isValue = -value
console.log(isValue)

let str  = 'hello'
let str1 = " ahmad"
let combine  = str + str1

console.log(combine)

console.log(2+2)
console.log(2-2);
console.log(2*2);
console.log("1" + 2  + 2);
console.log(1 + 2 + "2")


let counter = 100 
counter++
console.log(counter)

// some memory concepts in javascript
//stack and heap 
//stack are primitive means gives you the value the variable 
 let myname = "ahmad"
 let anothername = myname
 console.log(anothername)
 anothername = "muhammad"
 console.log(anothername)
 console.log(myname)

 // this example shows that you are changing in the copy the variable not in the original value


// heap is a non primitive means it gives you a reference of the value or variable 
 let user1 = {
    email:"ak@gmail.com"
 }
 let user2 = user1
 user2.email = "ka@gmail.com"
 console.log(user1.email)
 console.log(user2.email)
 

 // so this heap example shows that you are changing in the orginal value
