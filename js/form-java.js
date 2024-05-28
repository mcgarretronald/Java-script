{
    function validateInput() {
        const myInput = document.getElementById("numb");
        let user_value = myInput.value

        if (isNaN(user_value) || !(user_value >= 1 && user_value <= 10)) {
            alert("wronginput")
        }
        else {
            alert("correct")
        }


    }
}
{
    function changetoUppercase() {
        let myInput = document.getElementById("numb");
        myInput.value = myInput.value.toUpperCase()


    }
}
{
    function colorChange() {
        let x = document.getElementById("h2")
        x.style.color = "blue"
        let y =document.getElementById("body")
        y.style.backgroundColor="green"
        let a =document.getElementById("button")
        a.innerHTML="clear"
    }

}
