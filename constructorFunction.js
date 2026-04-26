/*
    A constructor function in JavaScript is a special type of function 
    used to create and initialize multiple objects with the same structure.
    It is usually written with a PascalCase notation name and called using the new keyword. 
    When called, it automatically creates a new object, assigns values using this, and returns that object.

*/


function CreateCar(color,brand){
    this.color = color;
    this.brand = brand;
    this.start= function(){
        console.log("start Engine");
    }; 
}

let car1 = new CreateCar("red","Ferrari");
let car2 = new CreateCar("blue","BMW");
let car3 = new CreateCar("red","Audi")

console.log(car1);
console.log(car2);
console.log(car3);