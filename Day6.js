//Q: writw a function called calculateAverage that takes an array of numbers
//as input and returns the average of those numbers.

const calculateAverage=(arr)=>{
 let sum= arr.reduce((acum, val)=> ( acum+val),0);
 console.log(sum);
 return sum/arr.length;
}

console.log(calculateAverage([31,26,21,14,23]))