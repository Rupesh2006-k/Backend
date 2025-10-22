/** @format */

// function create(name, age) {
//   let persion = {
//     name: name,
//     age: age,
//     talk() {
//       console.log("Hello ji kese ho");
//     },
//   };
//   return persion
// }

// function Persion(name, age) {
//   (this.name = name), (this.age = age);
// }

// Persion.prototype.talk = function () {
//   console.log(`This is the name of user ${this.name}`);
//   console.log(this);
// };

// let p1 = new Persion("rupesh", 18);
// let p2 = new Persion("Ashwin Bhai", 19);
// let p3 = new Persion("kavitaDone", 20);

class Persion {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  talk() {
    console.log(`hey hllo ji kiese ho ${this.name}`);
  }
}


let p1 = new Persion("Rupesh" ,18 );
let p2 = new Persion("ashwin" ,19 );

// class ek blue print hota hai jo ki multiple simplar object create karne ke liye use hota hai 
// prototype , in js har ek object or funtcion ke pass ek proprty hoti hian jis he prototype bolte hian ,aur agea koi proprty ya function nhi milta tho js usko proto type me dhundata hai
// constructor ek special function hota hia jo ki object create karne ke liye use hota hai  , aur constructor automaticaly call ho jata hai jab  hum new keyword ki help se object banate  hian 
// new keyword ek naya instance (object) banata hai constructor function se