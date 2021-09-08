//a way to assign data without tracing from object to object and without intializing multiple variables

//Two Type of destructuring present
    //1. Array Destructing
        //a. basic assignments

            // let numbers = ["one", "two", "three"];
            // let [one, two, three] = numbers;

            // console.log(`one ${one}`);
            // console.log(`two ${two}`);
            // console.log(`three ${three}`);
            //console.log(`four ${four}`); //ReferenceError: four is not defined

        //b. default 
            // let numbers = [ , "two", "three"];
            // let [one = 1, two = 2, three = 3, four = 4] = numbers;

            // console.log(`one ${one}`);
            // console.log(`two ${two}`);
            // console.log(`three ${three}`);
            // console.log(`four ${four}`);

        //c.  rest operator (this should always be the last identifier)

                // let myList = [1,2,3,4,5];

                // let [firstValue, ...restValue] = myList;

                // console.log(firstValue)
                // console.log(restValue)

        //d.  swapping of values

                // let a =1, b= 2;

                // [a,b] = [b,a]

                // console.log(a +" "+ b)


    //2. Object Destructuring

        


        //a. single level and nested objects
            // let user = {
            //     name : "Myat",
            //     age : 21,
            //     address : "7th street new york lane",
            //     sessions : {
            //         session1 : "Javascript",
            //         session2 : "ES6",
            //         session3 : "AWS"
            //     }
            // }
            //let address = user.address;
            //let name = user.name;
            //let age = user.age;
            //let session2 = user.sessions.session2
            // let {name, age, address, sessions:{session2, session4 = "Java 17"}} = user
            // console.log(address)
            // console.log(name)
            // console.log(age)
            // console.log(session2)
            // console.log(session4)
            // //console.log(sessions)



let Student={
    fName:"Saranya",
    address:"XYZ",
    sessionTopics:{
        covered1:"CoreJs",
        covered2:"OOJS"
    }
}

let{fName,lName="Vivekanandan",sessionTopics:{covered1,covered2,covered3="ES6"}}=Student
console.log(firstName)
console.log(lName)
console.log(covered2)
console.log(covered3)
