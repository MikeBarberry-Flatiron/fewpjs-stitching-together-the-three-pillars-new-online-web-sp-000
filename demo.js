class Dog {
  constructor(name) {
    this.name = name;
  }
  introduceYourselfFormally() {
    return "Hello, my name is " + this.name  + ". Nice to meet you."
  }
}

let byron = new Dog("Byron");
console.log(byron.introduceYourselfFormally())

let tony =  new Dog("Tony");
console.log(tony.introduceYourselfFormally())
