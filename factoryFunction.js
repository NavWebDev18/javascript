// factory function returns new object for each call and it follows camelCase notation 

function createCar(color,brand){
    return {
        color: color,
        brand: brand,
        start: function(){
            console.log("Start Engine");
        }
    }

} 

// if property and value same in object we can also write  it as 

function createCar1(color,brand){
    return {
        color,  // color: color
        brand,  // brand: brand
        start(){
            console.log("Start Engine");
        }
    }
}


let car1 = createCar("red","Audi");
let car2 = createCar("black","ferrari");

let fromCar1Obj1 = createCar1("yollow","Ferrari");
let fromCar1Obj2 = createCar1("white","mahendra");