//classes :  classes with syntax similar to java, .net 
//are special type of functions in javascript that give us desired behaviour

        class Vaccination 
        {
            constructor(name, date, place) {
                this.name = name;
                this.date = date;
                this.place = place;
            }

            getSchedule(){
                return {
                    name : this.name,
                    location : this.place,
                    date : this.date
                }
            }

            //Sqaure = () => this.length*this.length; //creating an arrow function    
            //Rectangle = () => this.length*this.width; //
        }

        let VccnObj = new Vaccination("Saranya", (new Date()).toDateString(), "7th Street New York City" )

        console.log(VccnObj.getSchedule())

// // create a class with name calculator, which accepts two params in cnstrctr - should have methods
// // add, subTract, Multiply and divide and some level of validation
// // create functions using arrow only






// Assignment

            class Calculator
            {
                constructor(x,y){
                    this.a=x;
                    this.b=y;
                }
                // add(){
                //     return (this.x+this.y);
                // }
                add= (x,y)=> {
                    return (this.a!=undefined && this.a!=undefined)?this.a+this.b : "Values undefined"
                };
                sub=()=> {
                    return (this.a!=undefined && this.b!=undefined)?this.x-this.y : "Values undefined"
                };
                multiply=()=>{
                    return (this.x!=undefined && this.y!=undefined)?this.x*this.y : "Values undefined"
                };
                divide=()=> {
                    return (this.x!=undefined && this.y!=undefined)?this.x/this.y : "Values undefined"
                };
            }


            let calVal=new Calculator(2,3);
            console.log(calVal.add(2,3));
            console.log(calVal.sub());
            console.log(calVal.multiply());
            console.log(calVal.divide());



