//This was my first draft of my JS, i tried to add the questions dynamically but I could not add in 
//radio buttons dymanically so I coded the questions into the html instead.

var questions = [
    {question: "What year did the show first air?",
    answers: ["1995", "2001", "1994"],
        //array of answers..
        //.each
    correct: "1994",
    },
    {question: "What is Ross's occupation?",
    answers: ["Paleontologist", "Doctor", "Opthalmologist"],
    correct: "Paleontologist",
    },
    {question: "How many sisters does Joey have?",
    answers: ["5", "6", "7"],
    correct: "7",
    },
    {question: "What is Monica and Chandler's surrogate's name?",
    answers: ["Erin", "Erica", "Allison"],
    correct: "Erica",
    },
    {question: "Which friends worked at Central Perk?",
    answers: ["Joey and Phoebe", "Rachel and Joey", "Joey, Rachel, and Monica"],
    correct: "Rachel and Joey",
    }
];

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

$(document).ready(function() {
    $("#start").on("click", function() {
        $("#start").hide("fast");
        $('#time-left').html('<h1>02:00</h1>');
        run();
        for (var i=0; i < questions.length;i++) {
            $('#questions').append('<h3>' + questions[i].question + '</h3>');
            $('#questions').append(questions[i].answers[0] + " " + questions[i].answers[1] + " " + questions[i].answers[2] + '<br>');    
            var labelText = $('#radioBtnId').attr('name');
            $('' + labelText + '').insertBefore('#questions');    
        };
        
    });
});
