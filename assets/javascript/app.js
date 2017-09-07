// // variable that will hold all of the correct answers
// var correctAnswers = [];

// // variable that will hold all of the users answers
// var userAnswers = [];

// correctAnswers = 




//timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};



var correctAnswers = [
    'A',
    'B',
    'C',
    'D',
    'A'
]; 
// var questionObj = { 
//     "category": "Mythology", 
//     "type": "boolean", 
//     "difficulty": "easy", 
//     "question": "In Norse mythology, Thor once dressed as a woman.", 
//     "correct_answer": 'A', 
//     "incorrect_answers": ['A', 'B', 'C', 'D'] }
// }

//
// When my HTML document object model is completed loaded, meaning the entire HTML
// has been parsed by the browser and the DOM created in memory
//
// Then do the actions in the ready callback function
//
$( document ).ready(function() {

    console.log( "ready!" );

    $("#quizSubmit").click( function () {

        console.log("Clicked the submit answers button!!!");

        var jQueryAnswers = [];
        //
        // Select all the HTML input things from the DOM,
        // then loop through that collection returned by jQuery
        // and for each thing in the collection do some stuff
        //
        $("input[class='answer']:checked").each( function() {

            jQueryAnswers.push( $(this) );

        });

        console.log("Gather my answers!!!");

        //
        // Loop through the array and for each jquery object
        // do some stuff 
        //
        for (var i = 0; i < correctAnswers.length; i++) {

            var userAnswer = jQueryAnswers[i].val();

            if (userAnswer === correctAnswers[i]) 
            {
                console.log("Got a correct answer: "  + userAnswer);
            }
            else
            {
                console.log("Got an incorrect answer: " + userAnswer);
            }

        }

        // console.log( jQueryAnswers );

    });

});













// var answers = ["B","D","A","B","C"], 
//     tot = answers.length;

// function getCheckedValue( radioName ){
//     var radios = document.getElementsByName( radioName ); // Get radio group by-name
//     for(var i=0; i<radios.length; i++)
//       if(radios[i].checked) return radios[i].value; // return the checked value
// }

// function getScore(){
//   var score = 0;
//   for (var i=0; i<tot; i++)
//     if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
//   return score;
// }

// function returnScore(){

//   alert("Your score is "+ getScore() +"/"+ tot);
// }


// $("#quizSubmit").onclick(returnScore());











