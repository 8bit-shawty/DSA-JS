/**
 * Create an array with 5 students names, after that create a function which takes 2 params (allStudents & studentName) iterate over all students and find that specific user "studentName".
 */

const allStudents = ['Bob', "Jeff", "Court", "Elon", "Kenzie"]

function findStudent(allStudents, studentName) {
    for(let i = 0; i < allStudents.length; i++){
        if(allStudents[i] === studentName){
            console.log(`${studentName} is at index `, i)
        }
    }
}

findStudent(allStudents, "Court")