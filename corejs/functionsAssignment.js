function Parent(name, age) { 
    var name = name; //public
    var age = age; //public
    var accountBalance = "$1000"; //private
    var accountPin = "23xyzn9"; //private
    var accountType = "saving"; //public

    var Child = function (address, isAdmin) { 
        var Admin={
                //name : name // shorthand while using es6 we can use only one of it, if the key and the variable name both are same
                name,
                age,
                accountType,
                address,
                accountBalance
        }
        var NotAdmin={
            name,
            age,
            accountType,
            address
       }  
        return isAdmin ? Admin:NotAdmin;
    }
    return Child;
}

var parentObj = Parent("Saranya",26);

var childVal = parentObj("California",false)
console.log(childVal)

//please use ternary operator and isAdmin argument if its true we also see the - accountBalance alongwith other details