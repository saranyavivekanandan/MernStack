// hoisting is the process of initializing var with undefined value and functions with complete definition
//  this allows us to access them before beclaration.

//1. variable hositing
//2. functional hositing

//1.Named function
//2.Anonymous function
//3.IIFE - immediately invocable function expression


// myfunc(); //not a function error
// console.log(myfunc); //undefined 


// // variable hoisting
// var sessionName=undefined;//default val for var
// console.log(`My session is ${sessionName}`);  

// // functional hoising 
// printName(); //functions get hoisted with their definition
// var sessionName="MernStack";
// console.log(`My session is ${sessionName}`);
// function printName(){
//     console.log("XYZ");
// }

// function expression
var myfun=function(){
    console.log("Robin") 
}
myfun();

// var pi=1;
// function area(r){ 
//     return pi*r*r;
// }

// function area(l,b){
//     return l*b
// }


// console.log(`Area of rectangle ${area(4,5)}`);
// console.log(`Area of circle ${area(2)}`);

  

