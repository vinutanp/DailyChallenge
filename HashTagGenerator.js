//Q:you are required to implement a functin that generated a hash tag from a given input string.

//the input string should be converted to a hash tag format, where each word is capitalised and 
//concatenated together without spaces.
//If the length of the input string is greater than 280 character or if the input string is empty or contains
//only spaces, the function should return false. otherwise return the generated hash tag prefixed with #.

const generateHash=(sentence)=>{
    if(sentence.length>280||sentence.trim().length===0||sentence.trim().length===1){
        return false;
    }
    sentence=sentence.split(" ");
  
sentence= sentence.map((curval)=>curval.replace(curval[0], curval[0].toUpperCase())); 
sentence=sentence.join("");
return "#" + sentence;
   
}

let res=generateHash("my name is vinuta");
console.log(res)