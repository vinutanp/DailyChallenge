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

// const findmin=(arr)=>{
//    arr.sort((a, b) => a - b);
//    return arr[0]
// }

// console.log(findmin([1,15,13]))

//q17: write the function to convert a string to camelCase and snakecase
//  const convertToCamelCase=(str)=>{
//     str=str.trim().split(" ");
//     str=str.map((curlem,idx)=>{
//         if(idx===0){
//             return curlem
//         }else{
//           return  curlem.charAt(0).toUpperCase()+ curlem.substring(1).toLowerCase();
//         }
//     })
//     return str.join("")
//  }

//  console.log(convertToCamelCase("vinuta nagappa poojari"))

//q18 ;write a function to check if the character is lowercase or uppercase

// const isUppercase=(str)=>{
//   if(str.length>1){
//     return "should be one character"
//   }

//   if(str.charCodeAt(0)>=65 && str.charCodeAt(0)<=90){
//     return true
//   }
//   return false
// }

// console.log(isUppercase("a"))

//q19 write a function to check if the given string starts with specific substring

// const startsWith=(str1, str2)=>{
// str1=str1.toLowerCase();
// str2=str2.toLowerCase();
// // return str1.startsWith(str2)

// return str1.slice(0, str2.length) == str2;
// }
// console.log(startsWith("Hello world", "hello"));

//q20: write a function to reverse a string wihtout using any built-in methods or libraries.The 
//function should take a string as input and return the reversed string.

const reverseString = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {

        reversed += str[i];

    }
    return reversed
}

console.log(reverseString("hello world"))