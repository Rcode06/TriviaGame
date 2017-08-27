// function submitAnswers(){
  
  
    // var correctA = 0;
  // var incorrect = 0;
  // var unanswered = 0;

  // $("#correctA").text(correctA);
  // $("#incorrect").text(incorrect);
  // $("#unanswered").text(unanswered);
  // checkAnswers()
   // Add the current wins and losses to the wins and losses div.       
  // $("#correctA").append("CORRECT ANSWERS: "  + correctA);
  // $("#incorrect").append("INCORRECT ANSWERS: "  + incorrect);
  // $("#unanswered").append("UNANSWERED:"  + unanswered);



  // var q1 = document.forms["quiz"]["q1"].value;
  // var q2 = document.forms["quiz"]["q2"].value;
  // var q3 = document.forms["quiz"]["q3"].value;
  // var q4 = document.forms["quiz"]["q4"].value;
  // var q5 = document.forms["quiz"]["q5"].value;


  // alert(q1);
  // alert(q2);
  // alert(q3);
  // alert(q4);
  // alert(q5);


  //validation
  function checkAnswers(){
    var total = 5;
    var correctA = 0;
    var incorrect = 0;
    var unanswered = 0;

    var q1 = document.forms["quiz"]["q1"].value;
    var q2 = document.forms["quiz"]["q2"].value;
    var q3 = document.forms["quiz"]["q3"].value;
    var q4 = document.forms["quiz"]["q4"].value;
    var q5 = document.forms["quiz"]["q5"].value;

  for (var i = 1; i <= total ; i++){

    if(eval("q"+i) === null || eval("q"+i) === ""){

    }

    var answers = ["snow white","luis fonsi","8","d","drumroll"];

    if(q1 === answers[0]){
      correctA++;
      console.log('correctA', correctA);
      // $("#correctA").text(correctA);
                    
    }

    else if (q1 != answers[0]){
      incorrect++;
      // $("#incorrect").text(incorrect);

    }

    else{
      unanswered++;
      // $("#unanswered").text(unanswered);
    }


    if(q2 === answers[1]){
      correctA++;
      console.log('correctA', correctA);
      // $("#correctA").text(correctA);
      
    }
    else if(q2 != answers[1]){
      incorrect++;
        // $("#incorrect").text(incorrect);
     
    }
    else{
      unanswered++;
      // $("#unanswered").text(unanswered);
      
    }


    if(q3 === answers[2]){
      correctA++;
      console.log('correctA', correctA);
      // $("#correctA").text(correctA);
      
    }
    else if(q3 != answers[2]){
      incorrect++;
      // $("#incorrect").text(incorrect);
      
    }

    else{
      unanswered++;
      // $("#unanswered").text(unanswered);
      
    }

    if(q4 === answers[3]){
      correctA++;
      console.log('correctA', correctA);
      // $("#correctA").text(correctA);
     
    }
    else if(q4 != answers[3]){
    incorrect++;
    // $("#incorrect").text(incorrect);
    }
    else{
    unanswered++;
    // $("#unanswered").text(unanswered);

    }

    if(q5 === answers[4]){

      correctA++;
      console.log('correctA', correctA);
      // $("#correctA").text(correctA);
    }
      
    else if (q5 != answers[4]){
      incorrect++; 
      // $("#incorrect").text(incorrect);
    }

    else{
      unanswered++;
      // $("#unanswered").text(unanswered);
      
    }
  }
  console.log('correctA', correctA);
    $("#correctA").append("CORRECT ANSWERS: "  + correctA);
    $("#incorrect").append("INCORRECT ANSWERS: "  + incorrect);
    $("#unanswered").append("UNANSWERED:"  + unanswered);
    // $(".game-results").show()

  };



// var results = $("#game-results");
// results.innerHTML ='<h3>Correct Answers: <span>' + correctA + '</span>Incorrect Answers:<span>'+ incorrect +'</span>Unanswered:<span>'+ unanswered + '</span></h3>';

//   var interval = setInterval(timeIt, 1000);
//  function timeIt() {
//   counter++;
//   timer.html(timeleft - counter);

//   if (counter === timeleft) {
//       clearInterval(interval);
//       // $("#game-results").show();      
//       $(".game-questions").hide();
//       checkAnswers(); 
//       $(".game-results").show() 
//   }
// }
  
$(document).ready(function(){

  var counter = 0;
  var timeleft = 29;
  var timer = $('#timer');
  

    
    $(".game-questions").hide();
    $("#game-results").hide();





  var interval = setInterval(timeIt, 1000);
function timeIt() {
  counter++;
  timer.html(timeleft - counter);

  if (counter === timeleft) {
      clearInterval(interval);
      $("#game-results").show();      
      $(".game-questions").hide();  
  }
}


  //start button function
   $("#start").on('click', function(event){
      event.preventDefault();
      $(".game-start").hide();
      $(".game-results").hide();
      $(".game-questions").show();
      timeIt();
    });

 //submit button function
 $("#finish").on('click', function(event){
      event.preventDefault();
      $(".game-questions").hide(); 
      checkAnswers();
      clearInterval(interval);
      $(".game-results").show();

    })



});