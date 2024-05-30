const button =document.getElementById("mybutton");
    const mypar=document.getElementById("myp")
    const resetbutton=document.getElementById("button2")
    let number = 0
    function counterbutton(){
        number++
            mypar.innerHTML= number
        }
        button.addEventListener("click",counterbutton)
        function reset(){
            number=0
            mypar.innerHTML=number
        }
    resetbutton.addEventListener("click",reset)





















