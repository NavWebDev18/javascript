// map method: array method used to create a new array by applying a function to every element in the original array
let myArray = [1,2,3,4,5];
let samePower = (each => each*100);
myArray= myArray.map((each)=> samePower(each));
console.log(myArray);//[100,200,300,400,500]

// filter method: an Array method used to create a new array containing only the elements that pass a specific condition
let arr = [1,2,3,4,-4,,-9];
let positiveNumbers = arr.filter((eachItem)=> eachItem > 0);
console.log(positiveNumbers);//[1,2,3,4]

//reduce method: t is used to reduce an array into a single value.
/* 
    array.reduce((accumulator, currentValue) => {
    return updatedValue;
}, initialValue); // initialValue is optional
| Parameter    | Meaning                               |
| ------------ | ------------------------------------- |
| accumulator  | Stores result from previous iteration |
| currentValue | Current array element                 |
| initialValue | Starting value                        |


*/
let arr1 = [5,2,3,1,0];
let borrow = arr1.reduce((acc,curr)=>  acc - curr);
console.log(borrow);//-1