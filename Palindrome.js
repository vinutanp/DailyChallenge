//Q: Write a function to determine whether a given string is a 
//palindrome or not. A palindrome is a word , phrase, number or other sequenceof
//character that reads the same forward and backward, ignoring spaces, punctuation and capitalization.

const checkPalindrome=(str)=>{
    str=str.replace(/[^a-zA-Z]+/g,"").toLowerCase();
//    let rev="";
//    for(let i=str.length-1;i>=0;i--){
//     rev+=str[i];
//    }
//    if (rev == str){
//     return true;
//    }else false;


return str==str.split("").reverse().join("");

}

console.log(checkPalindrome("A man, a plan, a canal, Panama"));
console.log(checkPalindrome("anna"));
console.log(checkPalindrome("hello1"));
