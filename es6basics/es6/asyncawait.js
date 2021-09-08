// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a promise object
// async and await : //Async : A way to have multi-threading in javascript like other object oriented programming language

        // function resolveAfter2Seconds() {
        //     return new Promise((resolve,reject) => {
        //             setTimeout(() => {
        //                 resolve({
        //                     "statuscode" : 200,
        //                     "statusmsg" :'resolved'
        //                     });
        //             }, 2000);

        //             setTimeout(() => {
        //                 reject({
        //                     "statuscode" : 500,
        //                     "statusmsg" :'rejected'
        //                     });
        //             }, 2000);
        //     });
        // }

        // console.log("async Execution starts");

        // // //loginuser : 

        // async function asyncCall() { //so interpreter will ask to create a new thread for this function to execute and will return on await
        //     console.log('calling async waiting call');

        //     await resolveAfter2Seconds()
        //         .then((data, err)=>{
        //             console.log("data", data)
        //             console.log("err", err)
        //         })
        //         .catch((data,err)=>{
        //             console.log("data", data)
        //             console.log("err", err)
        //         })
        //         .finally(()=>console.log("Finally!"));
            
        //     console.log('calling async waiting call - central');

        //     await resolveAfter2Seconds()
        //     .then((data, err)=>{
        //         console.log("data 2", data)
        //         console.log("err", err)
        //     })
        //     .catch((data,err)=>{
        //         console.log("data 2", data)
        //         console.log("err", err)
        //     })
        //     .finally(()=>console.log("Finally!"));

        //     console.log('calling async waiting call - ends');
        // }
        // async function a(){
        //     await asyncCall();

        //     console.log("async Execution ends");
        // }
        // a();



// use multiple promises example for authentication, authorization and getusercart to put in async and await

    function auth(){
       let authentication= new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve({"status" : 200, "msg":"auth"})},1000);
            setTimeout(()=>{reject({"status" : 400})},1000);
        })

        let authorization= new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve({"status" : 200})},1000);
        })

        let getusercard= new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({"status" : 200, "msg":"user"})
            },1000);
            setTimeout(()=>{
                resolve({"status" : 404})
            },1000);
        })
         return authentication,authorization,getusercard  ;
    }


        async function asyncCall() { 
            console.log('calling async waiting call');

            await auth()
                .then((data, err)=>{
                    console.log("data", data)
                    console.log("err", err)
                })
                .catch((data,err)=>{
                    console.log("data", data)
                    console.log("err", err)
                })
                .finally(()=>console.log("Finally!"));
            
            console.log('calling async waiting call - central');
        }

            asyncCall();
