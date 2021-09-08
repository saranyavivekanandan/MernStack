let fsObj = require("fs"); //importing file system module in our code so that we can use it for accessing file

// console.log("Read File using reader stream Starts");

// // //ReadFile using streams 
// // let readerStream = fsObj.createReadStream("./shorthand.js","utf8");
// // let data = "";

// // readerStream.on("data",(chunk)=>{
// //     data += chunk
// //     console.log(data);

// // })

// // readerStream.on("end",()=>{
// //     console.log("end ",data);
// // })

// // readerStream.on("error",(erroObj)=>{
// //     console.log(error)
// // })



// // //Writing into a file using write stream

// let userDetails = {
//     name : "Chris",
//     age : 22,
//     city : "New York",
//     session : "MernStack"
// }


// let writerStream = fsObj.createWriteStream("./Text.json","utf8");
// console.log("Read File using reader stream ends");


// writerStream.write(JSON.stringify(userDetails));
// writerStream.end();

// writerStream.on("finish", ()=>{ //attached an event from eventemitter class
//     console.log("Writing into the file is done")

//     fsObj.readFile('./Text.json','utf8',(err, fileData)=>{ //error first call back : error will always be a first object when executes with node modules

//         console.log("err", err);
//         console.log(JSON.parse(fileData));
    
//     });
// })

// writerStream.on("error",(erroObj)=>{
//     console.log(erroObj)
// })
// console.log("Read File Ends Using Writer Stream");

// //global objects to check the directory and file
// console.log("__filename "+ __filename)
// console.log("__dirname "+ __dirname)


//save the data in json object that are making MERN stack and MEAN stack as acronym


let JS={
    'M':'Mongo',
    'E':'Express',
    'R':'React',
    'A':'Angular',
    'N':'Node',
}
let writerStream = fsObj.createWriteStream("./Acronym.json","utf8");


writerStream.write(JSON.stringify(JS));
writerStream.end();

writerStream.on("finish", ()=>{ 
    console.log("Writing into the file is done")
    fsObj.readFile('./Acronym.json','utf8',(err, fileData)=>{ //error first call back : error will always be a first object when executes with node modules
        console.log("err", err);
        console.log(JSON.parse(fileData));
    });
})
console.log("Read File using reader stream ends");
