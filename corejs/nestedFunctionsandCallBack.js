// Callback: When we pass a functon as a parameter, we call it as a callback function.

function Print(params){
    console.log(`I am a printer ${JSON.stringify(params)}`);
}

function GetDetails(name,age,address,callback){
    callback({name,age,address})
}




function GetVehicle(name,model,callback){
    callback({name,model})
}

console.log(GetDetails("Margi",21,"ZXT",Print)) //doesn't return any value so prints undefined
GetVehicle("BMW",2020,Print);

// currying - func returning func// delegates output to child func
//  Nested func do hold the scope of outerfunctions variables or properties
// var e = 15;
// function sum(a){
//   return function sum2(b){
//     return function sum3(c){
//       // outer functions scope
//       return function sum4(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }


// var sum2 = sum(1)(2);
// var result=sum2(3)(4); 
// // var sum3 = sum2(2);
// // var sum4 = sum3(3);
// // var result = sum4(4);
// console.log(result)
// // var myFunc = sum(1)(2)(3)(4) //Chain of execution
