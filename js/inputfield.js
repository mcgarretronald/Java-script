
{
    let button = document.getElementById("submitBtn")
    sampleNumbers ="0123456789"
    sampleSpecial ="#\\|*&%^$£"
    sampleLetters ="qwertyuioplkjhgfdsazxcvbnm"


    function checkpassword(password, regular) {
        for(i =0;i<regular.length;i++){
            if(password.includes(regular[i])){
                return true
            }
        }
        return false
    }


    function validatePassword(){
        let password = document.getElementById("password").value
        if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial)&& checkpassword(password,sampleLetters)){
            alert("Correct")
        }else{
            alert("password must include numbers , special Characters and Letters ")
        }
    }

    button.addEventListener('click', validatePassword)
}