const test = "ahmad"
let test1  = "ali"
var test2 = 112233
test3 = "js"

//now assigning the values 
test1 = "muhammad"
test2 = 44333
test3 = "javascript"

console.table([test1, test2, test3])
// NOW IN modern js we are not using the var keyword because of 
// conditional statements we must perfer let instead of var 

// now here disscussing the global and local variable 

let a = 300;
if(true){
   let a = 20;
    console.log('inner block variable ', a)
}

console.log(a)


console.log(addone(5))

function addone(num){
    return num + 1
}


console.log(addto(5)) 
 const addto = function addtwo(num){
    return num + 2
}




