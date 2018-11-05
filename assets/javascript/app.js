var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var minutesRemaining = 1;
var secondsRemaining = 60;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 100);
};

function decrement() {
    secondsRemaining--;
    if(minutesRemaining === 0 && secondsRemaining === 0) {
        stop();
        alert("Time's Up!!!");
        $(".questions").hide();
        $("#correct-answers").text("Correct Answers: " + correctAnswers);
        $("#incorrect-answers").text("Incorrect Answers: " + incorrectAnswers);
        $("#unanswered").text("Unanswered: " + unanswered);
    };
    if(secondsRemaining === 0) {
        minutesRemaining--;
        secondsRemaining = 60;
        
    };
    if(secondsRemaining < 10 && secondsRemaining >= 0) {
        secondsRemaining = "0" + secondsRemaining;
    };
    $('#time-left').html('<h1> 0' + minutesRemaining + ":" + secondsRemaining + '</h1>');
};

function stop() {
    clearInterval(intervalId);
    minutesRemaining = 1;
    secondsRemaining = 60;
};


function check1() {
    var question1 = document.getElementsByName("year");
    var length = question1.length
    for(i=0;i<length;i++) {
        if(question[i].checked) {
    
        }
    };
};
function check2() {
    var question2 = document.getElementsByName("occupation");
    var length = question2.length

    for(i=0;i<length;i++) {
        if(question2[i].checked) {
            var checked2 = question2[i].value;  
        }
    }
};
function check3() {
    var question3 = document.getElementsByName("occupation");
    var length = question3.length

    for(i=0;i<length;i++) {
        if(question3[i].checked) {
            var checked3 = question3[i].value;  
        }
    }
};
function check4() {
    var question4 = document.getElementsByName("surrogate");
    var length = question4.length

    for(i=0;i<length;i++) {
        if(question4[i].checked) {
            var checked4 = question4[i].value;  
        }
    }
};
function check5() {
    var question5 = document.getElementsByName("coffee-house");
    var length = question5.length

    for(i=0;i<length;i++) {
        if(question5[i].checked) {
            var checked5 = question5[i].value;  
        }
    }
};

$(document).ready(function() {
    $(".questions").hide();
    $('#time-left').html('<h1>02:00</h1>');
    $("#start").on("click", function() {
        $("#start").hide();
        $(".questions").show();
        run();
        if(checked1 === "1994") {
            correctAnswers++;
        } else{
            incorrectAnswers++;
        };
        if(checked2 === "paleontologist") {
            correctAnswers++;
        } else{
            incorrectAnswers++;
        };
        if(checked3 === "7") {
            correctAnswers++;
        } else{
            incorrectAnswers++;
        };
        if(checked4 === "erica") {
            correctAnswers++;
        } else{
            incorrectAnswers++;
        };
        if(checked5 === "rachel and joey") {
            correctAnswers++;
        } else{
            incorrectAnswers++;
        };
        
        


        
    });
});


