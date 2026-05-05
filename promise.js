/* 
    A Promise is an object that represents a value that will be available in the future.
    Promise States:
        A Promise has 3 states:
        ⏳ Pending → still working
        ✅ Fulfilled → success
        ❌ Rejected → error
*/

// creating a promise:
    // method1 constructor func
    let myPromise = new Promise((resolve,reject) =>{
        let status = true;
        if(status) resolve("successed");
        else reject("failed");
    });

    // promise handling 
    myPromise
    .then(fromResolve => console.log(fromResolve)) // return if task is success.
    .catch(err => console.log(err)); // return if task  fails. 

    // method2 using functions 

    let myPromise = () =>{
        return new Promise((resolve,reject)=>{
            let status = true;
            if(status) resolve("successed");
            else reject("failed");
        })
    }

    // promise handling 
    myPromise()
    then(fromResolve => console.log(fromResolve)) // return if task is success.
    .catch(err => console.log(err)); // return if task  fails.  


// modern way  using async/await
const getData =  async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

