function button1(){
    let a= document.getElementById("button1")
    a.style.backgroundColor ="red"
    a.style.color="white"
    let b =document.getElementById("body")
    b.style.backgroundColor="blue"
    b.style.color="white"
}

function button2(){
    let c =document.getElementById("button2")
    c.style.backgroundColor="red"
    c.style.color="white"
    let d =document.getElementById("body")
    d.style.backgroundColor="yellow"
    d.style.color="blue"
}
{
    {
        const arr = [[34, 67, 89], ["Dan", "John", 78], [7, "Apple", "Orange", 67, 90]]
        //normal loops
        function flatten(sample_array){
            let flattened_arr = []
            for(let i = 0; i < sample_array.length; i++){
                for (let k = 0; k < sample_array[i].length; k++){
                    flattened_arr.push(sample_array[i][k])
                }
            }
            return flattened_arr
        }
        //console.log(flatten(arr))
        function flattenForEach(sample_array){
            let flattened_arr = []
            sample_array.forEach((inner_array)=>{
                inner_array.forEach((element)=>{
                    flattened_arr.push(element)
                })
            })
            return flattened_arr
        }
        console.log(flattenForEach(arr))
    }
}
