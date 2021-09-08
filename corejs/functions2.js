//functions : are the first class member citizens in javascript
//named function


function printName(x) {
    console.log(`Printing the name ${JSON.stringify(x)}`)
};
printName("Robin");


//IIFE - immediately invocable function expression


(function (params) {
    console.log(params)
})("Margi Patel")


// // nesting of functions
// // accesssibility of parent is possible, but child cannot be accessed from parent

function name(params){
        function nameB(params){
            function nameC(params){

            }
        }
}

//  Prototype: All javascript object inherit properties and methods from a prototype


function Student() {
    this.name = 'John';
    this.gender = 'M';
}

var studObj = new Student();

console.log(Student.prototype); // object
console.log(studObj.prototype); // undefined
console.log(studObj.__proto__); // object

// console.log(typeof Student.prototype); // object
// console.log(typeof studObj.__proto__); // object

// console.log(Student.prototype === studObj.__proto__ ); // true

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

  myFather.address="ZYX";
  console.log(myFather.address); //ZYX
  console.log(myMother.address); //undefined 

  myFather.__proto__.permanentAddress ="yes"
  console.log(myFather.permanentAddress); 
  console.log(myMother.permanentAddress); 

//   Person.prototype.nationality = "English"; // to add directly to the function as function element

//   Person.prototype.newfunc= function(){
//       console.log("This function is added via prototype property");
//   }