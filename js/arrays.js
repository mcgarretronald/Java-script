{
    const numbers = [6, 8, 9, 90, 5]
    console.log(numbers)

    console.log(numbers[4])
}
{
    const names = ["john", "mark", "endo",]
    console.log(names)
    console.log(names[1])
}
// adding elements into arrays
{
    const names = []
    console.log(names)
    names[0] = "jane"
    names[1] = "judith"
    names[2] = "janice"
    console.log(names)
    // change element
    names[1]="dan"
    console.log(names)
    // lenght of array
    console.log(names.length)
    // adding to last
    names.push("sara")
    console.log(names)
    names.sort()
    console.log(names.sort())
  
}
{
    const results = [
     {
         name: "Jane",
         marks: [89, 45, 67, 89, 67]
     },
     {
         name: "Alfred",
         marks: [89, 56, 43, 78, 89]
     },
     {
         name:"Steve",
         marks: [67, 89, 56, 44, 90]
     }
    ]
    console.log(results[2].marks[3])
    console.log(results[1].name + ": " + results[1].marks[3])
    console.log(results[0].marks[2])
    console.log(results[2].name +" "+results[2].marks[0])
}