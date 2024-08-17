//constant
const name='Shruti'
console.log(name)
// name='Anvi'
// console.log
const org_name="Jetlearn"
console.log(org_name)

//let
let name1='Anvi';
console.log(name1)
name1='Ellie'
console.log(name1)

let org_name1;
org_name1="LOF"
console.log(org_name1)

//Arrow Functions 
function simpleFunc()
{
    console.log("Declared using the function keyword")
}

simpleFunc()
const arrowFunc=()=> {
    console.log("Declared using arrow functions")
}
arrowFunc()

//Object and Array destructuring

const college= {
    name1:"LOF",
    est:2018,
    isPvt:false
};

//array destructuring
const arr=['Ellie', 'Bixby', 'Holly'];
let[value1, value2, value3]=arr;
console.log(value1, value2, value3);
