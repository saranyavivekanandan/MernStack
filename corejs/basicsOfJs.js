//case sensitive
var myaddress = "Somewhere in india";
var MyAddress = "Somewhere in africa";

console.log(myaddress)
console.log(MyAddress) // alt+shift+down arrow to copy a line


// - one line comment

// this line needs to be commented - use ctrl+/

/*
    multi 
    line 
    comment
*/

// ; - is optional

let x = 10;
let y = 20; 

function add( a, b ) {
    return a + b;
 }

//  Storing Functions in Variables

 let result=add(x,y);
 console.log(result)

//  OR 

 let sum=add
 console.log(sum(100,350))


//  Passing a function to another function

function avg(a,b,f){
    return f(a,b)/2;
}

console.log(avg(x,y,add)) // or like below
console.log(avg(x,y,sum)) 


// Returning functions from functions

function compareBy( ) {
            return function (a, b) {
                        let x = 550,
                            y = 200;
                        if (x > y) {
                            return 1;
                        } else if (x < y) {
                            return -1
                        } else {
                            return 0;
                    }
            }
}

console.log(compareBy)

//----------------------------------  Anonymous Functions  --------------------------------------------------

    // Anonymous Functions- Function without any name(no name between function and ()).They are mostly used 
    // as arguments of another functions

// 1.
    let show = function () {
        console.log('Anonymous function');
    };
    show();
// 2.
    setTimeout(function () {console.log('Execute later after 1 second')}, 1000);

// 3.
    // Immediately Invocable Function Expressions

    (function() {console.log('IIFE');})    ();//() allows us to call a function

    (function () {console.log(add(x,y));})  ();
    

// ----------------------------------    Lamda Functions ------------------------------------------------------ 

    let show = function () {console.log('Anonymous function');};

    // The above anonymous function can be shortened as below

    let show = () => console.log('Anonymous function');

    // similarly 

    let add = function (a, b) {
        return a + b;
    };

    let add = (a,b) => a+b;












//  For array 

// let a=[]
// let arr=[1,2,3]
// console.log(items.length); // 3
// // To iterate 
// for(let i=0;i<items.length;i++){
//     console.log(arr[i]);
// }

// // For of
// for(let item of items) {
//     console.log(item);
// }



