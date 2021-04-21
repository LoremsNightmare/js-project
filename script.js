


// class Human{
//   constructor(){
//     this.gender = 'male';
//   }
//   printGender(){
//     console.log(this.gender);
//   }
// }


// class Person extends Human{
//   constructor(){
//     super()
//     this.name = 'olodama';
//   }
//   printName(){
//     console.log(this.name);
//   }
// }


// const person = new Person

// person.printName()
// person.printGender()









class Human{
  gender = 'male';
 
 printGender = () => {
   console.log(this.gender);
 }
}


class Person extends Human{
 name = 'olodama';
 
 printName = () => {
   console.log(this.name);
 }
}


const person = new Person

person.printName()
person.printGender()











