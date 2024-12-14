/* User Stories / Instructions
Step 1: A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

Complete the getAverage function which takes in an array of test scores and returns the average score.

The average is calculated by adding up all the scores and dividing by the total number of scores.

Example Code
average = sum of all scores / total number of scores
A couple of function calls have been provided for you so you can test out your code.

Tips

You can use a loop to iterate over the scores array and add up all the scores.
You can use the length property to get the total number of scores. */

// Function to calculate the average of an array of scores
// function getAverage(scores) {
//     let sum = 0;// 1. Initialize a variable to store the sum of scores
    
//     // 2. Use a loop (for loop) to iterate through the scores array
//     for (let i = 0; i < scores.length; i++) {
//         // - Add each score to the sum variable
//         sum += scores[i];
//     }
//     // 3. Calculate the average by dividing the sum by the length of the scores array
//     // 4. Return the average
//     return sum / scores.length;
// }

// // Test the solution
// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/*Step 2
Now the teacher needs your help converting the student score to a letter grade.

Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

Here are the scores and their corresponding letter grades:

Score Range	Grade
100	"A++"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
Tips

Remember that you learned about conditional statements (if, else if, and else).
Remember that you learned about comparison operators (>, <, >=, <=, ===). */

// function to getGrade which will return the letter grade for the corresponding number grade
// function getGrade(score) {
//     // Use if, else if, and else statements to return the letter grades
//     if (score === 100) {
//         return "A++";

//     } else if (score >= 90) {
//         return "A";

//     } else if (score >= 80) {
//         return "B";

//     } else if (score >= 70) {
//         return "C";

//     } else if (score >= 60) {
//         return "D";

//     } else {
//         return "F";

//     }
    
// };

// console.log(getGrade(96)); // should return "A"
// console.log(getGrade(83)); // should return "B"
// console.log(getGrade(56)); // should return "F"

/*Step 3
The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".

Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not.

Tips

Use the getGrade function to get the student's grade. Then check if the grade is passing or not.*/

// function that uses if else rules to return boolean for passing/failing grades
// function hasPassingGrade(score) {

//     // My preferred method
//     if (score >= 60) {
//         return true;
//     } else {
//         return false;
//     }

//     // Alternate method
//     /* if (score >= 60) {
//         return true;
//     }
//     return false; */

//     // Alternate method
//     /* return score >= 60; */

//     // Flip failing grade to passing grade
//     /* return !(score < 60); */

//     // Flip passing grade to failing grade
//     /* if (score < 60) {
//         return false;
//     } else {
//         return true;    
//     } */

//     // Flip passing grade to failing grade
//     /* if (score < 60) {
//         return false;
//     } 
//     return true; */

//     // freeCodeCamp solution
//     // return getGrade(score) !== "F";


// };

// console.log(hasPassingGrade(100)); // should return true
// console.log(hasPassingGrade(53)); // should return false 
// console.log(hasPassingGrade(87)); // should return true
// NOTE: true = passing and false = failing
// TODO: Refactor this later to return passing or failing instead of true or false.


/*Step 4
Now that the teacher has all of the information they need, they want to be able to message the student with the results.

Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.

If the student passed the course, the string should follow this format:

Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
If the student failed the course, the string should follow this format:

Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
Replace average-goes-here with the average of the total scores. Replace grade-goes-here with the student's grade.

Tips

Use the getAverage function to get the class average.
Use the getGrade function to get the student's grade.
Use string concatenation (+) to build the message.
Be careful with the punctuation and spaces in the message. */

/**
 * This function will return a string representing a message to the student.
 * If the student passed the course, the string should follow this format:
 * Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
 * If the student failed the course, the string should follow this format:
 * Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
 * @param {Array<number>} totalScores - An array of all student scores.
 * @param {number} studentScore - The student score.
 * @return {string} A message to the student.
 */
// function studentMsg(totalScores, studentScore) {
//     // Calculate the class average
//     const classAverage = getAverage(totalScores);
    
//     // Calculate the student's grade
//     const studentGrade = getGrade(studentScore);

//     // If the student failed the course
//     if (studentGrade === "F") {
//         // Return a string with a failing message
//         return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`
//     } 
//     // If the student passed the course
//     else {
//         // Return a string with a passing message
//         return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`
//     }
// };

// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)); // should return a failing message
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 87)); // should return a passing message

// ---
// Refactor the entire gradBookApp to use const helper functions

// Define helper functions as const outside the main function
// The getAverage function takes in an array of scores and returns the average of the scores
// The average is calculated by summing all the scores and dividing by the number of scores
const getAverage = (scores) => {
    // Initialize a variable to store the sum of the scores
    const sum = 0;
    
    // Use reduce to sum all the scores in the array
    sum = scores.reduce((a, b) => a + b, 0);
    
    // Calculate the average by dividing the sum by the number of scores
    const average = sum / scores.length;
    
    // Return the average
    return average;
};

// The getGrade function takes in a single number score and returns the corresponding letter grade
// The function uses if else if statements to determine the letter grade based on the number score
const getGrade = (score) => {
    // If the score is 100, return the letter grade "A++"
    if (score === 100) {
        return "A++";
    } 
    // If the score is 90 or above, return the letter grade "A"
    else if (score >= 90) {
        return "A";
    } 
    // If the score is 80 or above, return the letter grade "B"
    else if (score >= 80) {
        return "B";
    } 
    // If the score is 70 or above, return the letter grade "C"
    else if (score >= 70) {
        return "C";
    } 
    // If the score is 60 or above, return the letter grade "D"
    else if (score >= 60) {
        return "D";
    } 
    // If the score is below 60, return the letter grade "F"
    else {
        return "F";
    }
};

// Main function
// This function takes two parameters, an array of total scores and a student score
// It returns a string message to the student based on the class average and the student's grade
const studentMsg = (totalScores, studentScore) => {
    // Calculate the class average by reusing the external getAverage function
    const classAverage = getAverage(totalScores);

    // Calculate the student's grade by reusing the external getGrade function
    const studentGrade = getGrade(studentScore);

    // If the student's grade is an "F", return a failing message
    if (studentGrade === "F") {
        return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`;
    }
    // Else if the student's grade is not an "F", return a passing message
    else {
        return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`;
    }
};

// Test the implementation
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Output: Class average: 71.5. Your grade: F. You failed the course.

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 87));
// Output: Class average: 71.5. Your grade: B. You passed the course.
