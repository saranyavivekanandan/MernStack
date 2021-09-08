// currying - func returning func// delegates output to child func
//  Nested func do hold the scope of outerfunctions variables or properties
var e = 15;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}


var sum2 = sum(1)(2);
var result=sum2(3)(4); 
// var sum3 = sum2(2);
// var sum4 = sum3(3);
// var result = sum4(4);
console.log(result)
// var myFunc = sum(1)(2)(3)(4) //Chain of execution
