
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

// function timeUp() {
//     if (startTimer === 0) {
//         alert("Time is up!");

//     }
// }
// timeUp();



var correctAnswers = [
    'B',
    'D',
    'A',
    'B',
    'C'
]; 


$(document).ready(function() {

    console.log( "ready!" );

    $("#quizSubmit").click( function () {

        console.log("Clicked the submit answers button!!!");

        var jQueryAnswers = [];

        $("input[class='answer']:checked").each( function() {

            jQueryAnswers.push( $(this) );

        });

        console.log("Gather my answers!!!");


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

        console.log( jQueryAnswers );

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











