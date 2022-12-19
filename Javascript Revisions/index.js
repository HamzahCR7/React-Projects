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

//class and inheritance

class Human {
  constructor() {
    this.species = "human beings";
  }
  category() {
    console.log("we are all ", this.species);
  }
}
class Person extends Human {
    constructor() {
        super();
        this.name="Hamzah Aslam Ansari";
        this.species="Aadam Zaat"//we can now access object and properties now from parent class
    }
    details(){
        console.log("My name is ",this.name);
    }
}
// const breed=new Human();
// breed.category()
const person=new Person();
person.category();//we can access methods of parent class now
person.details();
