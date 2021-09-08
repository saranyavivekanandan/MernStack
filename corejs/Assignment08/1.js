var User={
    name:"Saranya",
    age:20,
    address:"#234 Pinehurst Ave",
    expertise:"Java"
}

var Account={
    accName:"XYZ",
    number:1234567,
    balance:"$59000",
    accType:"Savings",
    brach:"California"
}

function PrintUser(name,age,address,expertise,callback){
    callback({name,age,expertise,address})
}

function PrintAccount(name,number,balance,accType,brach,cB){
    cB({name,number,balance,accType,brach})
}

function Print(x){
    console.log(`I just print ${JSON.stringify(x)}`);
}


// PrintUser("Saran",24,"#552 Franklin","JSAVAScript",Print);
PrintUser(User.name,User.age,User.address,User.expertise,Print);
PrintAccount(Account.accName,Account.number,Account.balance,Account.accType,Account.brach,Print);