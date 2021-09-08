function  Vaccine(name, brand, efficacy){
    this.name=name;
    this.brand=brand;
    this.efficacy=efficacy;
    this.PreservationDetails=function(){
        console.log("Store at Room temperature")
    };

    this.howToTake=function(){
        console.log("Two shot with the interval of 30 days")
    };
}


var vaccShot=new Vaccine("CoviShield" ,"Astrazeneca", 94.6);
vaccShot.PreservationDetails()
vaccShot.howToTake()
