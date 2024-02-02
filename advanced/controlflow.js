const month =  3
switch(month) {
    case 1:
        console.log("that is jan")
        break;
        case 2:
        console.log("that is feb")
        break;
        case 3:
        console.log("that is march")
        break;
        case 4:
        console.log("that is april")
        break;
        default:
            console.log('no month')


}

// nulish coalesing  operator (??) null , undefined
let val1;
val1 = 5 ?? 10
val1 = undefined ?? 5
val1 = null ?? 10 ?? 20
console.log(val1)

const icecream  = 100
icecream >= 80 ? console.log("price is less than 100") : console.log('price is more than 100')



//falsy values
/*
-----------------------------------------------
false
0 
-0
bigint 0n
""
null
undefined
nan
---------------------------------------------------------
now truthy values
-----------------------------------------------------
"0"
"false"
" "
[]
{}
function(){}
*/
