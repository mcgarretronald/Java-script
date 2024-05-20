const numbers = [56, 78, 89, 90];
// for (let [i] in numbers){
//     console.log(numbers[i]);

// of stands for actual value
function getsum(arr) {
    sum = 0;
    for (let i of arr) {
        sum = sum + i;
    } return sum

} console.log(getsum(numbers));

// in stands for index
function getsum(arr) {
    sum = 0;
    for (let i in arr) {
        sum = sum + numbers[i]
    } return sum;
} console.log(getsum(numbers));



