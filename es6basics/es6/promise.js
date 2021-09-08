//problem - callback hell : due to un modularised or too many callbacks 
// function name(callBack1, callBack2, callBack3) {    
//     callBack1("username", "pwd", callBack2); // connect server to authenticate
//     callBack2("role", "userid", callBack3) // get user role and then product
//     callBack3("userid") // fetch the user cart
//     //other set of callbacks
// }
// name(authentication, authorization, getUserCart)

//Promises : These are the proxy objects that give us a control to check the status of promise and 
// upon revelant status we also get the type, payload associated with that in response
// promise will have 3 states - pending, fullfilled/resolved (then), rejected (catch)

        let LunchPromise = new Promise((resolve, reject)=>{ //authentication
            //assume - these settimeout calls are authentication, authorization and getusercart
            // setTimeout(() => {
            //     resolve({
            //         "status" : 200,
            //         "msg" : "Mexican Lunch is delivered",
            //         "promise date" : (new Date).toDateString()
            //     })
            // }, 3000);
                
            setTimeout(() => {
                reject({
                    "status" : 404,
                    "msg" : "Couldnt be done due to lockdown",
                    "promise date" : (new Date).toDateString()
                })
            }, 3000);
        })

        console.log(LunchPromise)

        // LunchPromise.then((data, err)=>{
        // console.log("Then ", data)
        // }).catch((err)=>{
        // console.log("Catch ", err)
        // }).finally((data)=>console.log("Finally data ", data))

        LunchPromise.then((data, err)=>{
            console.log("Then ", data)
            //return JSON.stringify(data); can do data priming and again do then 
        })
        //.then((data, err)=>{
        //    console.log("Then - 2", data)
        //})
        .catch((err)=>{
            console.log("Catch ", err)
        }).finally((data)=>console.log("Finally data ", data))








        function getData(method, url){
            return new Promise(function(resolve, reject){
              var xhr = new XMLHttpRequest();
              xhr.open(method, url);
              xhr.onload = function(){
                if(this.status >= 200 && this.status < 300){
                  resolve(xhr.response);
                }else {
                  reject({
                    status: this.status,
                    statusText: xhr.statusText
                  });
                }
              };
              xhr.onerror = function(){
                reject({
                  status: this.status,
                  statusText: xhr.statusText
                });
              };
              xhr.send();
            });
          }
          
          getData('GET', 'http://jsonplaceholder.typicode.com/todos').then(function(data){
            let todos = JSON.parse(data);
            let output = '';
            for(let todo of todos){
              output += `
                <li>
                  <h3>${todo.title}</h3>
                  <p>Completed: ${todo.completed}</p>
                </li>
              `;
            }
          
            document.getElementById('template').innerHTML = output;
          }).catch(function(err){
            console.log(err);
          });

























          