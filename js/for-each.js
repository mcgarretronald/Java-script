// {
//     const arr = [6, 7, 8, 9, 5, 4, 7, 9];
//     sum = 0;
//     arr.forEach((value, index) => {
//         sum = sum + value;
//     })
//     console.log(sum);
// // }
// {
//     const arr = [6, 7, 8, 9, 5, 4, 7, 9];
//     arr.forEach((value, index) => {
//         console.log("fourth root of " + value + " is " + (value ** 0.25));
//     })
// }

    const array = [[8, 9, 4, 56, 78,], [67, 89, 98], [56, 45, 32, 45], [45, 67, 80]]
    sum = 0;
    let totalsumArray =[]
    array.forEach((value) =>{
        for(let i = 0;i<value.length;i++){
            sum = sum + value[i];
            totalsumArray.push(sum);

        }console.log(totalsumArray);
        console.log(sum);
    
    })
   