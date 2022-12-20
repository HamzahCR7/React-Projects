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

//updated class and its properties

class Animal{
  legs=4;
  character=()=>{//using arrow function inside class
  console.log(this.legs)//still can use this and avoid constructor
  }
}

class Dog extends Animal{
  whatItdoes="bark"
  nature=()=>{
    console.log("Dog has ",this.legs,"legs and it ",this.whatItdoes);//no need of constructor and super still we can access parent class properties
  }
}
const animal=new Animal();
// animal.character();
const dog=new Dog();
dog.character();
dog.nature();

//diff bw spread and rest operators
const arr=[1,3,45,66,89,56,12,90.12];
const newArray=[...arr,90];
console.log("new Arr ",newArray);
console.log(newArray.sort((a,b)=>a-b))

const person1={
  name:"Hamzah",
  age:26
}
const contactDetails={
  ...person1,phone:1239099
}
console.log(contactDetails);

const filterData =(...args) =>{
 const filtervalues=args.filter((e)=>{
return e>=20;
})
return filtervalues.map((e)=>e*23)
}
console.log(filterData(10,20,30))

//array destructing and wrapping up module 1
const numbers=[10,23,11,230];
[num1,num2, ,num4]=numbers//array destructuring
console.log(num1,num2,num4);

const a1=10;
const a2=a1;
console.log(a1==a2);
const ob1={
  name:"Messi"
}
const ob2={...ob1};
console.log(ob2==ob1);
