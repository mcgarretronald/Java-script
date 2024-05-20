{
    function getAverage(marks) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum = sum + marks[i];
        }
        return sum/marks.length;
    }
    console.log(getAverage([90,89,56,78,56,43]));
    
}
{
    // an array of objects
    //objects: students: marks, name
    // get the average marks, print out( sorted )
    //function to get the average in an array:
    //example: [78, 89, 78, 90, 65]
    function getAverage(marks){
        let sum = 0;
        for (let i = 0; i <= marks.length-1; i++){
            sum = sum + marks[i];
        }
        return sum / marks.length;
    }
   //
   sample_students = [
    {
        name: "John",
        marks: [78, 90, 54, 55, 32]
    },
    {
        name: "Dennis",
        marks: [89, 90, 56, 44, 58]
    },
    {
        name: "Agnes",
        marks: [90, 56, 45, 88, 90]
    },
    {
        name: "Alvin",
        marks: [81, 56, 77, 88, 96]
    }
   ]
   function getStudentsAverage(students){
    let student_avg = []
    for (i = 0; i <= students.length-1; i++){
        student_rslts = {
            name: students[i].name,
            avg: getAverage(students[i].marks)
        }
        if(i == 0){
            student_avg.push(student_rslts)
        }else{
            if (student_rslts.avg > student_avg[0].avg){
                let new_array = []
                new_array.push(student_rslts)
                for (k = 0; k < student_avg.length; k++){
                    new_array.push(student_avg[k])
                }
                student_avg = new_array
            }else if(student_rslts.avg > student_avg[i - 1].avg){
                popped_student = student_avg.pop()
                student_avg.push(student_rslts)
                student_avg.push(popped_student)
            }
            else{
                student_avg.push(student_rslts)
            }
        }
    }
    console.log(student_avg)
   }
   getStudentsAverage(sample_students)
}

    function getAverage(marks){
        let sum = 0;
        for (let i = 0; i <= marks.length-1; i++){
            sum = sum + marks[i];
        }
        return sum / marks.length;
    }
   
   sample_students = [
    {
        name: "John",
        marks: [78, 90, 54, 55, 32]
    },
    {
        name: "Dennis",
        marks: [89, 90, 56, 44, 58]
    },
    {
        name: "Agnes",
        marks: [90, 56, 45, 88, 90]
    },
    {
        name: "Alvin",
        marks: [81, 56, 77, 88, 96]
    }
   ]
   function getStudentsAverage(students){
    let student_avg = []
    for (i = 0; i <= students.length-1; i++){
        student_rslts = {
            name: students[i].name,
            avg: getAverage(students[i].marks)
        }
        if(i == 0){
            student_avg.push(student_rslts)
        }else{
            if (student_rslts.avg > student_avg[0].avg){
                let new_array = []
                new_array.push(student_rslts)
                for (k = 0; k < student_avg.length; k++){
                    new_array.push(student_avg[k])
                }
                student_avg = new_array
            }else if(student_rslts.avg > student_avg[i - 1].avg){
                popped_student = student_avg.pop()
                student_avg.push(student_rslts)
                student_avg.push(popped_student)
            }
            else{
                student_avg.push(student_rslts)
            }
        }

    }
}


















