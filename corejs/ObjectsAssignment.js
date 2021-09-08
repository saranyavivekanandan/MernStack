// Person and Employee

var Person = {
    name : "Saranya",
    Id : 22,
    salary:15000,
    getName : function () {
        return this.name;
    },
    getSalary: function(){
        return this.Id;
    },
    getId:function(){
        return this.salary;
    }
}

console.log(Person.getName()) 
console.log(Person.getId()) 
console.log(Person.getSalary()) 


var Employee = Object.create(Person)
Employee.address = "California";
Employee.name = "Martha";
Employee.Id=33;
Employee.salary=1600; 

console.log(Employee.getName()) 
console.log(Employee.getId()) 
console.log(Employee.getSalary()) 



Employee.getAddress = function () { 
    return this.address;
}

console.log(Employee.getAddress) 
console.log(Employee.__proto__);



