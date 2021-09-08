//bind : changes the context of a function at runtime, and doesn't executes immediately but when required


// funName.bind(obj)

var User = {
    name : "Margi",
    age : 21,
    getName : function () {                
                console.log("this "+ this.name)
                var that=this
                setTimeout(function () {                    
                    console.log("this - inside settimeout "+ this.name)      
                    console.log(this)             
                }.bind(this), 1000)

                setTimeout(function () {                    
                    console.log("this - without bind settimeout "+ this.name)                   
                }, 1000)

                setTimeout(function () {                    
                    console.log("that - inside second settimeout "+ that.name)                   
                }, 1000)

                return this.name
            }

}

User.getName();





// //html example
<button id="newBtnBind">Practice Div</button>
var btn = document.getElementById("newBtnBind")
var onclick = function(){
    alert("The name is "+ this.name)
}

btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
btn.addEventListener("click", this.onclick, false) //without bind context remains global
