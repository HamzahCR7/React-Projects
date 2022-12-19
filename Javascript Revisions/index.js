//diff between let and const
var name="Hamzah";
name="Messi"
// console.log(name)//accepted
let goat="Ronaldo";
goat="Messi"
// console.log(`Goat is ${goat}`);//accepted
const bestEuropenPlayer="Ronaldo";
// bestEuropenPlayer="Messi"
// console.log(`Goat Eueoopean  is ${goat}`);//thorws erro

//diff between arrow function and norml function
function myName(name){
    return `my  initial name is ${name}`
}
console.log(myName("Hamzah"));

const myLastName=(name,age)=>{
 return  `my  last name is ${name} and age is ${age}`
}
console.log(myLastName("Hamzah",26));
const square=(num)=>num*num;
console.log(square(10));
