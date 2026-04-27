// create date constructor 
// variation1 
let now = new Date();
console.log(now) // return current date

// variation2 
let date = new Date("2026-04-26"); //new Date(datestring)
let date = new Date("2026/04/26");  // mm-dd-yyyy or yyyy-mm-dd
let date = new Date("jul 26 2026") // first three letters of month  // mm dd yyyy or dd mm yyyy or yyyy mm dd

// variation3 

let datee = new Date(2021, 1, 20, 4, 12, 11, 0) // new Date(year, month, day, hours, minutes, seconds, milliseconds)


// methods for date function

/*  
     
    now()	Returns the numeric value corresponding to the current time (the number of milliseconds passed since January 1, 1970, 00:00:00 UTC)
    getFullYear()	Gets the year according to local time
    getMonth()	Gets the month, from 0 to 11 according to local time
    getDate()	Gets the day of the month (1–31) according to local time
    getDay()	Gets the day of the week (0-6) according to local time
    getHours()	Gets the hour from 0 to 23 according to local time
    getMinutes	Gets the minute from 0 to 59 according to local time
    getUTCDate()	Gets the day of the month (1–31) according to universal time
    setFullYear()	Sets the full year according to local time
    setMonth()	Sets the month according to local time
    setDate()	Sets the day of the month according to local time
    setUTCDate()	Sets the day of the month according to universal time

*/