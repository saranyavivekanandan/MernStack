function Parent(name,address,salary,promoDetails){
    this.name=name;
    this.address=address;
    this.salary=salary;
    this.promoDetails=promoDetails;
}

var Employee=new Parent("Emp1","Emp1Address",50000,"Will be promoted in Dec 2021")
Employee.empId="111";
Employee.name="Saranya";
Employee.designation="Senior Developer";
Employee.getSalay=function(){
    return this.salary;
}

Employee.getAddress=function(){
    return this.address;
}

Employee.getPromotionDetails=function(){
    return this.promoDetails;
}

console.log(Employee.empId)
console.log(Employee.name)
console.log(Employee.address)
console.log(Employee.designation)
console.log(Employee.getSalay())
console.log(Employee.getAddress())
console.log(Employee.getPromotionDetails())
