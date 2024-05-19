
{
    let maths = "pass";
    let english = "fail";
    let chemistry = "fail";
    let physics = "pass";
    let kiswahili = "pass";
    let history = "pass";
    let geography = "pass";

    if ((maths == "pass") && (english == "pass") && (chemistry == "pass") && (physics == "pass") && (kiswahili == "pass") && (history == "pass") && (geography == "pass")) {
        console.log("can choose course of choice")
    } else if ((maths == "pass") && (((english === "pass") || (kiswahili === "pass"))) && ((physics == "pass") || (chemistry == "pass"))) {
        console.log("can do Computer Science")
    } else if ((maths == "pass") && (english == "pass") && (kiswahili == "pass") && ((history == "pass") || (geography == "pass"))) {
        console.log("can do Journalisim")
    } else if ((maths == "pass") && ((english == "pass") || (kiswahili == "pass")) && ((history == "pass") || (geography == "pass")) && ((physics == "pass") || (chemistry == "pass"))) {
        console.log("can do Engeenering")
    } else if ((maths == "pass") && ((english == "pass") || (kiswahili == "pass")) && (chemistry == "pass") && ((history == "pass") || (geography == "pass"))) {
        console.log("can do Medicine")
    } else {
        console.log("can not do any course")
    }


}


