// map method: array method used to create a new array by applying a function to every element in the original array
let myArray = [1,2,3,4,5];
let samePower = (each => each*100);
myArray= myArray.map((each,currIndex)=> samePower(each)); //currIndex: returns current item index (optional)
console.log(myArray);//[100,200,300,400,500]

// filter method: an Array method used to create a new array containing only the elements that pass a specific condition
let arr = [1,2,3,4,-4,,-9];
let positiveNumbers = arr.filter((eachItem,currIndex)=> eachItem > 0); //currIndex: returns current item index (optional)
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

// every method: check every value follow satified or not return true when every value follow the condition else false
let arr2 = [1,2,39,5];
let lessThan40 = arr2.every((each_number,currIndex) => each_number<40); //currIndex: returns current item index (optional)
console.log(lessThan40); // true 

// some method :he some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. 
const myAwesomeArray = ["a", "b", "c", "d", "e"];
const result = myAwesomeArray.some((alphabet,currIndex) => alphabet === "d"); //currIndex:returns current item index (optional)
console.log(result); // true

// reverse method: The reverse() method reverses the order of the elements in an array.The first array element becomes the last, and the last array element becomes the first 
const arr3 = ["Naveen","malli","charan"];
const reversedArr = arr3.reverse();
console.log(reversedArr); //["charan","malli","Naveen"]

/* 
Mutable & Immutable methods:
Mutable methods will change the original array and Immutable methods won't change the original array.

Mutable methods	    Immutable methods
shift()	            map()
unshift()	        filter()
push()	            reduce()
pop()	            forEach()
sort()	            slice()
reverse()	        join()
splice(), etc.	    some(), etc.
*/