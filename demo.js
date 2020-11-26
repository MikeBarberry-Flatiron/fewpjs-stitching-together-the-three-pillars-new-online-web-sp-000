class Dog {
  constructor(name) {
    this.name = name;
  }
  introduceYourselfFormally() {
    return "Hello, my name is" + this.name  + ". Nice to meet you."
  }
}

byron = Dog.new("Byron")
