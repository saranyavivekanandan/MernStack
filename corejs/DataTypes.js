
// 6 Data Types

// String "xyz "
// number  1.5 
// object { }
// null 
// undefined 
// bool //true or false

var firstValue = "An Vu";

// var is used to declare identifiers of functional type
console.log(`Type ${typeof firstValue}`);   //String 



firstValue = 101.10; //dynamic typing and dynamic casting which is present in javascript
console.log(firstValue);
console.log(`Type ${typeof firstValue}`);  //number 

firstValue = true;
console.log(firstValue);
console.log(`Type ${typeof firstValue}`); //boolean 

firstValue = {}; //object in javscript
console.log(firstValue);
console.log(`Type ${typeof firstValue}`); // object 

firstValue = undefined;
console.log(firstValue);
console.log(`Type ${typeof firstValue}`); // undefined

firstValue = null;
console.log(firstValue);
console.log(`Type ${typeof firstValue}`);  // object //data type is object as null can not represent any data type
// 
//console.log(globalThis)


//symbol data type -

mySym = Symbol(1);
console.log("Symbol ", mySym);
console.log("TypeOf Symbol ", typeof mySym); 




// console.log(`This is an example ${firstValue}`) 
// console.log("this is an example")
// console.log(firstValue) 