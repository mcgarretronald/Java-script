// array of students
    // each student has 5 subjects
    // total, average, display of the results
    students = [
        {
            name: "John",
            marks: [67, 89, 90, 56, 43]
        },
        {
            name: "Dan",
            marks: [77, 80, 91, 36, 43]
        },
        {
            name: "Anne",
            marks: [68, 59, 60, 86, 53]
        }
    ]
    function getSum(arr){
        sum = 0
        for(let i= 0; i<arr.length; i++){
            sum = sum + arr[i]
        }
        return sum;
    }
    function getAverage(arr, mySummer){
        total = mySummer(arr)
        return total / arr.length
    }
    //console.log(getAverage([89, 78, 65, 78,90,65], getSum))
    //get the total
    //divide the total by the number of elements
    function getStudentResults(student_array, myAverager){
        for(let k = 0; k<student_array.length; k++){
            console.log(student_array[k].name, myAverager(student_array[k].marks, getSum))
        }
    }
    getStudentResults(students, getAverage)

{
    function calculator(a, b, summer, multiplyer, divider, sub, displayer){
        sum = summer(a, b)
        product = multiplyer(a, b)
        div = divider(a, b)
        diff = sub(a, b)
        displayer(sum, product, div, diff)
    }
    function getSum(x, y){
        return x + y
    }
    function multiply(f, k){
        return f * k
    }
    function divide(r, w){
        return r/w
    }
    function subtract(t, y){
        return t - y
    }
    function displayResults(s, m, d, su){
        console.log("Sum: " + s )
        console.log("Mult: "+ m)
        console.log("Division: "+d)
        console.log("Diff: "+ su)
    }
    calculator(27, 3, getSum, multiply, divide, subtract, displayResults)
    function print(){
        console.log("hello")
    }
    print()
}







