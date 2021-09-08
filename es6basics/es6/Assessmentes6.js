// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils


const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

let herosNotEvils=heroes.filter((x)=>x.isEvil ? "":x.name)
console.log(herosNotEvils);

// Print Unique family names 
console.log("-----------------------")
let un=heroes.map(hero=>hero.family)
let fn=new Set(un);
console.log(fn)
// Print Hero Names from given objects, and append sir in each of them before printing 


let sir=heroes.map((x)=>x.name +" sir");
console.log(sir);

//2. Give me an example of map and set collection each 

let map=new Map();

map.set("Key1","Val1");
map.set("Key2","Val2");
map.set("Key3","Val3");
map.set("Key4","Val4");
map.set("Key5","Val5");

console.log(map.get("Key5")); 


console.log(map.entries)
console.log(map.set("key6", "val6"))
console.log(map.values())

// Set Example

let set=new Set(["saro1","saro2","saro3"]);
console.log(set.size)
set.add("Saro4")
console.log(set.size)
console.log(set.keys())


//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns 5 ES6 features on resolved


    function prom(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({
                    msg:"Resolved"
                })
                
            },2000)
            setTimeout(()=>{
                reject({
                    msg:"Rejected"
                })
                
            },3000)
        }) 
    }

prom().then((data)=>console.log(data)).catch((err)=>{console.log(err)}).finally(()=>console.log("Finally"));


//4. Using the promise object at #3 create an async and await feature 

    async function asynCall(){
        await prom().then((data)=>console.log(data));
    }

    console.log(asynCall())



//5. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)


        let n=[1,2,3,4,5,6,7,8,9,10]
        function multSpread(a,b,c,d,e,f,g,h,i,j){
        return a*b*c*d*e*f*g*h*i*j;
        }

        console.log("multSpread(n) "+multSpread(...n));

        n=[1,2,3,4,5,6,7,8,9,10]
        function multRest(...n){
            let j=1;
        for(let a of n){
                j*=a;
        }
        return j;
        }

        console.log("multRest(n) "+multRest(...n));

//6. Print the last name through destructuring and add a contact number:9119119110 as well
        const person = { 
            userDetails :{
                first: "FirstName",
                last: "LastName"
            }
        } 


        let {userDetails:{last, contact=9119119110}} = person
        console.log(last)
        console.log(contact)

//7. Give me an example of const data manipulation
        // const x;
        const y=8;
        console.log(y) 


//8. What is the difference between for-of and for-in show with examples 

            let x=['a','b','c']

            for(let y in x){
                console.log(y);  //0 1 2
            }
            for(let y of x){
                console.log(y); // a b c
            }