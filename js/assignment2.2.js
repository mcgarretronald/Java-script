// function numbering(x) {
//     for (let i = 1; i <= x; i++) {
//         // console.log(x);
//         let row = '';
//         for (let y = 1; y <= i; y++) {
//             row += y;
//         } console.log(row);
//     }

// } numbering(10)

// // palindrome


// {
//     function isPalindrome(str){
//         let d = str.length -1
//         for(let i = 0; i < str.length / 2; i++) {
//             if (str[i] != str[d]) {
//                 return false;
//             }
//             d--;
//         }
//         return true;
//     }
// let str1 = "sis";
// let str2 = "nitin";
// let str3 = "nathan";
//  console.log(isPalindrome (str1));
//  console.log(isPalindrome(str2));
//  console.log(isPalindrome(str3));
// }

{
    function numbers(n){
        if (n<=1){
            return false
        }
        else if (n==2){
            return true
        }
        else {
            for(let i=2; i<n; ++i){
                if(n%i==0){
                    return false
                }
                else{
                    return true
                }
            }
        }
    }
    console.log( numbers(46))
}
{
    function drawCenteredTriangle(game){
        for(let m = 1; m <= game; m++){
            let newLine = "";
            let spaces = game - m;
            for(let s = 0; s < spaces; s++){
                newLine += " ";
            }
            for(let k = 1; k <= m; k++){
                newLine += k + " ";
            }
            console.log(newLine);
        }
    }
    drawCenteredTriangle(9)
}