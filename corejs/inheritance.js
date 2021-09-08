
// Using Objects
// function Vehicles(name, colour,price, hasCarplay){
//     this.name=name;
//     this.colour=colour;
//     this.price=price;
// }

// var vehicle1 = new Vehicles("Honda Civic","black","$32000",false);
// var vehicle2 = new Vehicles("BMW","Blue","$60000",true);

// vehicle2.sunRoof=function(){
//     console.log("This car has sun roof");
// }

// console.log(vehicle1);
// console.log(vehicle2); 

// Using functions

var Vehicle = {
    name:"BMW",
    color:"Blue",
    price:"$50000",
    getname : function(){
        return this.name
    },
   
}

var BMW=Object.create(Vehicle);
BMW.hasSunRoof=function(){
    return false;
}
console.log(BMW.hasSunRoof());




// Myat Win Code


var Car = {
    name : "",
    type : "",
    year : "",
    getName : function () {
        return this.name;
    },
    getType : function () {
        return this.type;
    },
    getYear : function () {
        return this.year;
    }
}
var newCar = Object.create(Car);
newCar.model="some";
newCar.name = "Toyota";
newCar.type = "RAV4";
newCar.year= "2017" ;
newCar.getModel = function(){
    return newCar.model;
}
console.log(newCar);





// Margi
var Vehicle = {
    type: "car",
    wheels : "4",
    getType : function (){
         return this.type;
    }
}
console.log(Vehicle.getType());
var BMW = Object.create(Vehicle)
BMW.type = "sports";
BMW.model ="2.1";
BMW.color = "red";
BMW.size = "2 seated";
BMW.getModel = function()
{
    return this.model;
}
BMW.getColor = function()
{
    return this.color;
}
BMW.getSize = function()
{
    return this.size;
}
console.log(BMW.getType());
console.log(BMW.getModel());
console.log(BMW.getColor());
console.log(BMW.getSize());


// Robin
var Vehicle = {
    mileage: 0,
    year: 0,
    getMileage : function(){
        return this.mileage;
    },
    getYear : function(){
        return this.year;
    }
}


var BMW = Object.create(Vehicle);


BMW.mileage = 80;
BMW.year = 1700;
BMW.model = "M3";
BMW.getModel = function(){
    return this.model;
}
console.log(BMW.getMileage());
console.log(BMW.getYear());
console.log(BMW.getModel());