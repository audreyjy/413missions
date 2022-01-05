
$("#button").click(function () {
    alert("Based on the input, your overall percentage is : % and your letter grade is a(n)");
})



var grade 

var x = (($("#assignments").val()
    + $("#group").val()
    + $("#quizzes").val()
    + $("#exams").val()
    + $("#intex").val() / 100))


if
        x >= 94 {
    grade = 'A';
}
else
    if 90 <= x < 94 {
        grade = 'A-'
    }
    else if 87 <= x < 90 {
        grade = 'B+'
    }
    else if 84 <= x < 87 {
        grade = 'B'
    }
    else if 80 <= x < 84 % {
        grade = 'B-'
    }
    else if 77 <= x < 80 {
        grade = 'C+'
    }
    else if 74 <= x < 77 {
        grade = 'C'
    }
    else if 70 <= x < 74 {
        grade = 'C-'
    }
    else if 67 <= x < 70 {
        grade = 'D+'
    }
    else if 64 <= x < 67 {
        grade = 'D'
    }
    else if 60 <= x < 64 {
        grade = 'D-'
    }
    else if x < 60 {
        grade = 'E'
    }



//74 % <= Total < 77 % ...C
//90 % <= Total < 94 % ...A -
//70 % <= Total < 74 % ...C-
//87 % <= Total < 90 % ...B +
//67 % <= Total < 70 % ...D +
//84 % <= Total < 87 % ...B
//64 % <= Total < 67 % ...D
//80 % <= Total < 84 % ...B -
//60 % <= Total < 64 % ...D- 
//77 % <= Total < 80 % ...C+
//Total < 60 % ...E



//document.getElementById("btnSend").addEventListener("click", function () {
//    alert("From: " + document.getElementById("txtFrom").value +
//        ", Subject: " + document.getElementById("txtSubject").value +
//        ", Message: " + document.getElementById("txtMsg").value);
//})



        //+ ($("assignments").val() * 100 / 55)
        //+ ($("group").val() * 100 / 5)
        //+ ($("quizzes").val() * 100 / 10)
        //+ ($("exams").val() * 100 / 20)
        //+ ($("intex").val() * 100 / 10)
        //+ " and your percentage in the class is: "
        //+
