function call1(){
    return call2();
}

function call2(){
    return call3()
}

function call3(){
    console.log("Called call1, Call2, call3")
    console.log("--------------------------")
    console.log("No Exploring Stack Overflow")
    call1()
}

call1()