// ASSIGNMENT
{
    function fizzBuzz(n) {
        for (let i = 0; i <= n; i++) {
            console.log(i)
        }
    } fizzBuzz(5)
}
{
    function fizzBuzz(n) {
        if ((n % 3 == 0) && (n % 7 == 0)) {
            console.log("fizzBuzz");
        }
        else if (n % 7 == 0) {
            console.log("fizz");
        }
        else if (n % 3 == 0) {
            console.log("Buzz");
        }
        else { console.log(n); }
    }
    fizzBuzz(27)
}
// ASSIGNMENT 2
{
    let vowelcount = 0;
    function countingVowels(stringitem) {
        let stringArray = stringitem.split('');
        console.log(stringArray);
        const vowel = ('a','e','i','o','u');
        for (let x = 0; x < stringArray.length; x++) {
            if (stringArray[x].toLowerCase()=== vowel) {
                vowelcount++
            }
            else{"no vowel"}
        } return vowelcount
    }console.log(countingVowels("zindua"));
}
// ASSIGNMENT
{
    function averageStudentmarks(student, marks) {
        const studentDetail ={
            student :" ",
            marks: []
        }
        
    }

}
// 