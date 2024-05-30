
{
    let button = document.getElementById("submitBtn")
    sampleNumbers ="0123456789"
    sampleSpecial ="#\\|*&%^$£"
    sampleLowercase ="qwertyuioplkjhgfdsazxcvbnm"
    uppercase ="QWERTYUIOPLKJHGFDSAZXCVBNM"


    function checkpassword(password, regular) {
        for(i =0;i<regular.length;i++){
            if(password.includes(regular[i])){
                return true
            }
        }
        return false
    }


    function validatePassword(){
        let password = document.getElementById("password")
        password = password.value
        let passborder= document.getElementById("password")
      
        if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial)&&
         checkpassword(password,sampleLowercase)&&checkpassword(password,uppercase)){
            alert("Correct")
        }else{
            passborder.style.borderColor="red"
            alert("password must include numbers , special Characters ,UPPERCASES, lowercase ")
        
        }
    }

    button.addEventListener('click', validatePassword)
}