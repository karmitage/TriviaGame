$(document).ready(function () {

    //global variables

    var trivia = {
        firstRound: {
            question: "What is the world's largest island?",
            choices: ["Madagascar", "Greenland", "Cuba"],
            answer: "Greenland"
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

    //variables to iterate over the questions
    var keys = Object.keys(trivia);
    var currentRound = keys[currentIndex];
    var time = 30;
    var currentIndex = 0;

    //setting up divs to contain info
    var timerDiv = $("<div class='countdown'><h3></h3></div>");
    var questionDiv = $("<div class='question'><h3></h3></div>");
    var choicesDiv = $("<div class='choices'></div>");
    var answerDiv = $("<div class='answer'></div>");

    //this function resets the timer and modifies divs
    function reset() {
        timer = 30;
        $(".answer").empty(); //empty answer div 
        $(".answer").remove(); //remove answer div
        $(".countdown").empty();
        $(".countdown").remove();
        $(".main").append(timerDiv); //append timer
        $(".countdown").append("Time remaining: " + time); //add timer message
        $(".main").append(questionDiv); //append the question div
        $(".main").append(choicesDiv); //append the questions
    }

    function displayQuestion() {
        //display the question in the question div
        $(".question h3").html(trivia[currentRound].question);
        console.log(trivia[currentRound].question);
        console.log(trivia[currentRound].answer);

        //use a loop to iterate over the array of possible answers, adding
        //them to the choices div
        for (var i = 0; i < trivia[currentRound].choices.length; i++) {
            $(".choices").append("<p class=answer>" + trivia[currentRound].choices[i] + "</p>");
        }

        //add on on click function for the possible answers
        //the on click function should evaluate whether the answer is correct
        $(".choices p").on("click", function () {
            //set the chosen answer to the text value selected
            var chosenAnswer = $(this).text();

            // console.log("chosen answer is: " + chosenAnswer);
            // console.log("blah is: " + trivia[key].answer);
            console.log("currentRound is: " + currentRound);
            console.log("now current index is: " + currentIndex);

            //conditional logic to evaluate whether it's right or wrong
            if (chosenAnswer === trivia[currentRound].answer) {
                //stop timer
                // clearInterval(counter);
                //remove the divs that were added to put the page in the "question" state
                $(timerDiv).remove();
                $(questionDiv).remove();
                $(choicesDiv).remove();
                $(".choices p").remove();
                $(answerDiv).remove();
                //append the div that will contain the result
                $(".main").append(answerDiv);
                $(".answer").text("Correct!");
                //increment the correct value
                correct++;
                console.log("correct: " + correct);
            }
            else {
                //stop timer
                // clearInterval(counter);
                //remove divs (as above)
                $(timerDiv).remove();
                $(questionDiv).remove();
                $(choicesDiv).remove();
                $(".choices p").remove();
                $(answerDiv).remove();
                //append div that will contain the result
                $(".main").append(answerDiv);
                $(".answer").text("Incorrect. The correct answer is: " + trivia[currentRound].answer);
                incorrect++;
                console.log("incorrect: " + incorrect);
            }
        });
    }
    function startGame() {
        //hide the start button
        $(".start").hide();
        //clear variables
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        currentIndex = 0;
        currentRound = keys[currentIndex]; //question to display
        console.log("on start the currentRound is: " + currentRound);
        console.log("at first currentIndex is: " + currentIndex);
        //call the reset function & add new divs
        reset();
        //call the display question function, which will display a question &
        //multiple choice answers, as well as the result of each user response
        displayQuestion();
        console.log("sasdjf;lasdjf;asldjkf")
        //increment array position and reset the value
        // n++;
        // key = keys[n];
        //if the user has reached the last question, display the end
        //screen with the option to start over

        console.log("trivia length is: " + Object.keys(trivia).length);
        console.log("index is: " + currentIndex);

        if (currentIndex >= Object.keys(trivia).length) {
            $(answerDiv).empty();
            $(answerDiv).text("Game over! You got " + correct + "right answers & " + incorrect + " incorrect answers");
            $(".start").show();
        }
        //if the user hasn't reached the end of the questions, increment index and display 
        //another question
        else {
            currentIndex++;
            currentRound = keys[currentIndex];
            console.log("what is going on")
            console.log(currentIndex);
            console.log("break");
            console.log(currentRound);
            reset();
            displayQuestion();

        }
    }
    //event listener
    $(".start").on("click", startGame());
});