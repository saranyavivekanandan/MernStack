
// // name = "Myat";

// var User1 = { //object literal
//     name : "Margi",
//     age : 24,
//     street : "Somewhere in atlanta"
// }


// function GetName(idNo, street) { 
//     console.log(`Name : ${this.name}`)
//     }


//  GetName("20112", "new york 6th street") ;  
//  GetName.call(User1, "20112", "new york 6th street")


// // function avg(a,b,f){
// //     return f(a,b)/2;
// // }

// // console.log(avg(x,y,add)) // or like below
// // console.log(avg(x,y,sum)) 


// function Print(params){
//     console.log(`I am a printer ${JSON.stringify(params)}`);
// }

// function GetDetails(name,age,address,callback){
//     callback({name,age,address})
// }

// function GetVehicle(name,model,callback){
//     callback({name,model})
// }

// console.log(GetDetails("Margi",21,"ZXT",Print)) //doesn't return any value so prints undefined
// GetVehicle("BMW",2020,Print);

// name="SDE"

// let person = {
//     // name: 'John Doe',
//     getName: function() {
//         console.log(this.name);
//     }
// };

// person.getName()


// function myDisplayer(some) {
//     console.log(some)
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     // myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);

setTimeout(() => {
   console.log("5000")
}, 5000);
setTimeout(() => {
   console.log("2000")
}, 2000);
setTimeout(() => {
   console.log("1000")
}, 1000);