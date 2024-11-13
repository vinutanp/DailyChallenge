//Q : write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
const findMax=(arr)=>{
    return arr.reduce((prev,cur)=> prev>cur?prev:cur)
}
console.log(findMax([1,3,18,5,10]));
console.log(findMax([-1,-3,-18,-5,-10]));
console.log(findMax([1]))