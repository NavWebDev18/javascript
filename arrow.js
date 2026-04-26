// arrow functions in javascript 
let sum = (a,b) => {
    let result = a + b;
    return result;
}
console.log(sum(5,6));  // output : 11

// single expession in a block  
let sub = (a,b) => a - b; 
console.log(sub(10,5)) // output : 5


// function with single parameter  
let square = n => n * n; 
console.log(square(10)); // output : 100

let name = name => `hi ${name}`;
console.log(name("Naveen")); // output : hi Naveen

// function with zero parameters  
let greet = () => "hi raa ela unnav"; 
console.log(greet()); // output : hi raa ela unnav