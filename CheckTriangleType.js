//Q: Write a function called checkTrackingType that takes three parameter representing the 
//length of the sides of the triangle. The function should return a strig indicating the type 
//of triangle : "equilateral","isosceles" or "scalene"

const checkTriangleType=(a,b,c)=>{
if(a===b && b===c){
    return "equilateral"
}
if (a===b || b===c || b===c  ){
    return "isosceles"
}
return "scalene"
}
console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(4,3,3));
console.log(checkTriangleType(4,3,5));