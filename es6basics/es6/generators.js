// function TestMe(params) {
//     console.log(params)
// }
// TestMe("Params")//invoking or calling

// A generator function is a function that can be yeilded as many times as possible upon single invocation

//Generator Functions: Allows us to get multiple yields (or kind of returns) for the indefinite number of times
// without creating and invocation of the function

        function *printValue(num) {
            //do any asyn operation to read the value
            let updatedValue = 300;

            yield num+updatedValue;
            yield num*updatedValue;
            yield num+num*updatedValue;
            yield num*num*updatedValue;    

            return "Done";// as soon as we return function invocation completes and we can't yield further
            yield 25;
        // }

        let printValObj = printValue(10);
        console.log(printValObj.next())
        console.log(printValObj.next())
        console.log(printValObj.next())
        console.log(printValObj.next())

        console.log(printValObj.next())
        console.log(printValObj.next())


//arithmaticCalculator using - generator function - (a,b), 
//add, subtract, multiply, divide - all this we need to yield
//Arithmatic 
            function *arithmaticCalculator(a,b){
                yield a+b;
                yield a-b;
                yield a*b;
                yield a/b;
                yield a%b;
                return "Calculations done";
            }

            let calObj=arithmaticCalculator(10,5); 
            console.log(calObj.next())
            console.log(calObj.next())
            console.log(calObj.next())
            console.log(calObj.next())
            console.log(calObj.next())
            console.log(calObj.next())
        }