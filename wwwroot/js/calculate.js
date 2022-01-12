
// function that calculates the percentage and letter grade for the course then alerts the user
$("#button").click(function () {

    var grade;

    // assigning input to variables and parsing to an integer so they can be added 
    var a = parseFloat($("#assignments").val()) 
    var g = parseFloat($("#group").val())
    var q = parseFloat($("#quizzes").val())
    var e = parseFloat($("#exams").val())
    var i = parseFloat($("#intex").val())

    // adding inputs together 
    var x = ((a * .55) + (g * .05) + (q * .10) + (e * .20) + (i * .10))


    // if statement that reads the sum of the inputs and determines the letter grade 
    if
        (x >= 94) {
        grade = 'A';
    }
    else
        if (x >= 90) {
            grade = 'A-';
        }
        else if (x >= 87) {
            grade = 'B+';
        }
        else if (x >= 84) {
            grade = 'B';
        }
        else if (x >= 80) {
            grade = 'B-';
        }
        else if (x >= 77) {
            grade = 'C+';
        }
        else if (x >= 74) {
            grade = 'C';
        }
        else if (x >= 70) {
            grade = 'C-';
        }
        else if (x >= 67) {
            grade = 'D+';
        }
        else if (x >= 64) {
            grade = 'D';
        }
        else if (x >= 60) {
            grade = 'D-';
        }
        else if (x < 60) {
            grade = 'E';
        }

    // alert stating the percentage and letter grade 
    alert("Based on the input, your overall percentage is: " + x + "% and your letter grade is a(n) " + grade);
})




