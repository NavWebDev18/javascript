// class and objects

class Student{
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }

    displayStudent(){
        return `${this.name} have got score of ${this.marks} in SSC`
    }
}

let student1 = new Student("Naveen",500);
let student2 = new Student("malli",550);
console.log(student1.displayStudent());
console.log(student2.displayStudent());

// inheritance : subclass inherts the properties of parent class

class Animal{   // parent class
    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    displayDetals(){
        return `This pet name is ${this.name} and color is ${this.color}`;
    }

    eat(){
        return `${this.name} is eating food`;
    }
}

class Dog extends Animal{ // subclass
    constructor(name,color,breed){
        super(name,color);
        this.breed = breed;
    }
    breedInfo(){
        return `${this.name} belongs to ${this.breed} breed`;
    }
}

let dog = new Dog("Max","White","German Shepard");
console.log(dog.displayDetals());
console.log(dog.breedInfo())