/** @format */

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hello ji kese ho ${this.name}`);
  }
}

class Student extends Parent {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

class Teacher extends Parent {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let s1 = new Student("Rupesh", 18, 89);
console.log(s1);
s1.talk();
