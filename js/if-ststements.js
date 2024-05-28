function assign(age){
    if(age<3){
        console.log("should be at home");
    }
    else if(age<=6){
        console.log("should be in kindergarten");
    }
    else if (age<=10){
        console.log("lower primary");
    }
    else if (age<=14){
        console.log("upper primary");
    }
    else if(age<=18){
        console.log("high school");
    }
    else if (age<=24){
        console.log("campus");
    }
    else if (age<=60){
        console.log("employed");
    }
    else {console.log("retired");}
}assign(10)