//Q:write a function arraysAreEqual that takes two arrays arr1 and arr2
// as input and returns true if the arrays are equal(i.e., contain the same
// elements in the same order) and false otherwise.

// const arraysAreEqual=(arr1, arr2)=>{
//     if(arr1.length !== arr2.length) return false;

//    return arr1.every((curval,ind)=>
//         curval === arr2[ind] 
//     )

// }

// console.log(arraysAreEqual([1,2,3],[1,2,3]));
// console.log(arraysAreEqual([1,2,3],[1,2,6]));
// console.log(arraysAreEqual([],[]));


//Q11: write a function that takes a number as input and returns the sum if its digits

// const sunOfDigits=(num)=>{
//     let sum=Array.from(String(num),Number);
//  return sum.reduce((acc, cur)=> acc+=cur,0)

// }

// console.log(sunOfDigits(1234));


//Q12: Write a function that takes an array of integers as input and removes any duplicate elements,
// returning a new array with only unique elements.

// const removeDuplicates=(arr)=>{
//     return arr.filter((cur,index)=> arr.indexOf(cur)===index)
// }

// console.log(removeDuplicates([1,2,1,10,2,3]))



//Q13: Write a funciton that takes a string as input and returns the count of vowels in that string.
//Consider both lowecse and uppercase.

// const countVowels=(str)=>{
//     str=str.toLowerCase();
// let arr=str.split('');
// let count=0;
//     const vowels=['a','e','i','o','u'];

//     for(let i=0;i< arr.length-1;i++){
//        if(vowels.includes(arr[i])) {
//         count++;
//        }
       
//     }
//     return count;

// }
// console.log(countVowels("hello world"))

//q14: Write a function called isPowerOfTwo that takes an integer num as
//input and returns true if num is a power of two, and false otherwise.

// const powerOfTwo=(n)=>{//8

//    let res=false;
//    for(let i=0;i<num;i++){
//     if(2**i === num){
//         res=true;
//     }
//    }
//    return res

// if(n===0) return false;

// while(n!=1){
//     n=n/2;
//     if(n%2!=0 && n!=1) return false;
// }
// return true;


// }

// console.log(powerOfTwo(64));
// console.log(powerOfTwo(9));

//q16: find the minimum value in an array

const findmin=(arr)=>{
   arr.sort((a, b) => a - b);
   return arr[0]
}

console.log(findmin([1,15,13]))