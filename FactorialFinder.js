//Write a function factorial that takes a non-negative integer
//num as input and return its factorial.The factorial of a non-negative integer n,
//denoted as n!, is the product of all positive integer less than or equal to n. The 
//factorial of 0 is defined as 1.


const factorialfn=(n)=>{
    if (n==0 || n==1){
        return 1;
    }
    else{
        return n*factorialfn(n-1);
    }
}

console.log(factorialfn(4))