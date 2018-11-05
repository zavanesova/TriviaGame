var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

//timer - working correctly
var minutesRemaining = 1;
var secondsRemaining = 60;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    secondsRemaining--;
    if(minutesRemaining === 0 && secondsRemaining === 0) {
        stop();
        alert("Time's Up!!!");
        gameOver();
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

//functions to check if radio buttons are checked 
//tried to add in radio buttons dynamically (in appdraft.js) but that wasn't working
//had to add questions/answers/radio buttons to html
function check1() {
    var question1 = document.getElementsByName("year");
    var length = question1.length
    for(i=0;i<length;i++) {
        if(question1[i].checked) {
            var checked1 = question1[i].value;
            if(checked1 === "1994") {
                correctAnswers++; //if you click on the radio button a few times it keeps adding onto correct answers, not supposed to do that
            }
            //unanswered questions not working, it just counts it as incorrect
            // }else if(!checked1) {
            //     unanswered++;
            // }
            else {
                incorrectAnswers++;
            };   
        };
    };

};
function check2() {
    var question2 = document.getElementsByName("occupation");
    var length = question2.length

    for(i=0;i<length;i++) {
        if(question2[i].checked) {
            var checked2 = question2[i].value; 
            if(checked2 === "paleontologist") {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }; 
        }
    }
};
function check3() {
    var question3 = document.getElementsByName("occupation");
    var length = question3.length

    for(i=0;i<length;i++) {
        if(question3[i].checked) {
            var checked3 = question3[i].value;  
            if(checked3 === "7") {
                correctAnswers++;
            } else{
                incorrectAnswers++;
            };
        }
    }
};
function check4() {
    var question4 = document.getElementsByName("surrogate");
    var length = question4.length

    for(i=0;i<length;i++) {
        if(question4[i].checked) {
            var checked4 = question4[i].value;  
            if(checked4 === "erica") {
                correctAnswers++;
            } else{
                incorrectAnswers++;
            };
        }
    }
};
function check5() {
    var question5 = document.getElementsByName("coffee-house");
    var length = question5.length

    for(i=0;i<length;i++) {
        if(question5[i].checked) {
            var checked5 = question5[i].value;  
            if(checked5 === "rachel and joey") {
                correctAnswers++;
            } else{
                incorrectAnswers++;
            };
        }
    }
};
function gameOver() {
    $(".questions").hide();
    $("#time-left").hide();
    $("#correct-answers").text("Correct Answers: " + correctAnswers);
    $("#incorrect-answers").text("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").text("Unanswered: " + unanswered);
    $('#reset').show();
};
//reset does not work, the radio buttons are still selected from the first game. 
// function reset(){
//     $("#correct-answers").hide();
//     $("#incorrect-answers").hide();
//     $("#unanswered").hide();
//     $("#start").show();
//     $('#time-left').html('<h1>02:00</h1>');
//     start();
//     gameOver();

// }

$(document).ready(function() {
    $(".questions").hide();
    $('#time-left').html('<h1>02:00</h1>');
    $('#reset').hide()
    $("#start").on("click", function start() {
        $("#start").hide();
        $(".questions").show();
        run(); 
    });
});


