{
    function countvowel(user_input) {
        let vowels = "aeiouAEIOU";
        let count = 0;

        for (let i = 0; i < user_input.length; i++) {
            if (vowels.includes(user_input[i])) {
                count++
            }
        }
        return count;
    }console.log(countvowel("zinduaZINDUA"));
} 