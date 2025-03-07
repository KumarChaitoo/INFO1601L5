//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];

function getAverageGrade(student, course) {
  // Find the course in the student's transcript
  const courseData = student.transcript.find(t => t.course === course);
  
  
  if (!courseData) {
    return -1;
  }
  
  // Calculate the average grade
  const grades = courseData.grades;
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  const average = sum / grades.length;
  
  return average;
}

// Function to get a specific assignment mark for a course for a student
function getAssignmentMark(student, course, num) {

  const courseData = student.transcript.find(t => t.course === course);
  
 
  if (!courseData || num < 1 || num > courseData.grades.length) {
    return -1;
  }
  
  // Return the grade for the specified assignment
  return courseData.grades[num - 1];
}


function averageAssessment(students, courseName, assignment) {
  let total = 0;
  let count = 0;
  
  // Iterate through each student
  for (const student of students) {
  
    const mark = getAssignmentMark(student, courseName, assignment);
    
    // If the mark is valid, add it to the total and increment the count
    if (mark !== -1) {
      total += mark;
      count++;
    }
  }
  
  // If no valid marks were found, return -1
  if (count === 0) {
    return -1;
  }
  
  // Calculate and return the average
  return total / count;
}


console.log(getAverageGrade(bob, 'INFO 1603')); 
console.log(getAssignmentMark(sally, 'INFO 1601', 2)); 
console.log(averageAssessment(students, 'INFO 1601', 1)); 