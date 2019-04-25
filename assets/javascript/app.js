$(document).ready(function () {

    //global variables

    var trivia = {
        firstRound: {
            question: "What is the world's largest island?",
            choices: ["Madagascar", "Greenland", "Cuba"],
            answer: "Greeland"
        },
        secondRound: {
            question: "What is the smallest recognized country?",
            choices: ["Liechtenstein", "Monaco", "Vatican City"],
            answer: "Vatican City"
        },
        thirdRound: {
            question: "What is the world's deepest lake?",
            choices: ["Lake Victoria", "Lake Superior", "Lake Baikal"],
            answer: "Lake Baikal"
        }
    }
    //variables to keep track of the user's score
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    console.log(trivia.secondRound.answer);

    //setting up divs to contain info
    var timerDiv = $("<div class='countdown'><h3></h3></div>");
    var questionDiv = $("<div class='question'><h3></h3></div>");
    var answerDiv = $("<div class='answers'></div>");
    var rightDiv = $("<div class='rightAns'></div>");

    //timer
    var counter = setInterval(count, 500);

    //this set of variables allows the game to iterate over the question object to display questions in order
    var index = Object.keys(questions);
    var currentIndex = keys[n];
    var time = 30;
    var n = 0;


    //function with reset and game setup
    function gameSetup() {
        $(".start").css("display", "none");

        var correct = 0;
        var incorrect = 0;
        var timeout = 0;
        n = 0;
        key = keys[n];

        var gameReset = function () {
            time = 30;
            $(".rightAns").empty();
            $(".rightAns").remove();
            $(".main").append(timerDiv);
            $(".countdown h3").html("Time remaining: " + time);
            $(".main").append(questionDiv);
            $(".main").append(answerDiv);
        }

        reset();




        //object keys to return questions in order
        var keys = Object.keys(questions);
        var key = keys[n];
        var time = 30;
        var n = 0;



        //* logic

        //display start screen
        //display first question and mutliple choice, initialize countdown timer
        //if the user clicks on an answer:
        //display whether they were right or wrong ("correct" message if they were right,"wrong" 
        //message if not, along with the correct answer)
        //go to the next question, initialize new countdown timer and display it
        //if the user does nothing, after the timer is expired:
        //display an "out of time!" message along with the correct answer
        //move on to the next question

        //the only user input will be the clicks on the answers, but the user could do nothing at all
        //and the game would still set the timers and move through each question

        //at the end of the game, display an end screen with the total number of correct/incorrect/unanswered questions
        //with the end screen, include an option to start over
        //restarting the game does not reload the page, it just resets the game


        //the questions can be organized as objects? (question, multiple choice options, correct answer?)

        //use set interval for the countdown

        //functions:

        //display question

        //settimer

        //






    });