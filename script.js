var questionCount = 0;
var netflixScore = 0;
var scribblioScore = 0;
var paintScore = 0;
var workoutScore = 0;



var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var result = document.getElementById("result");

q1a1.addEventListener("click",netflix);
q1a2.addEventListener("click",scribblio);
q1a3.addEventListener("click",paint);
q1a4.addEventListener("click",workout);

q2a1.addEventListener("click", workout);
q2a2.addEventListener("click",netflix);
q2a3.addEventListener("click",scribblio);
q2a4.addEventListener("click",paint);

q3a1.addEventListener("click", scribblio);
q3a2.addEventListener("click",netflix);
q3a3.addEventListener("click",workout);
q3a4.addEventListener("click",paint);


function netflix(){
  netflixScore+=1;
  questionCount+=1;
  // alert("Ready to be entertained!");
  if(questionCount>=3){updateResult();
  }
}

function scribblio(){
  scribblioScore+=1;
  questionCount+=1;
  // alert("Power up your computer!");
  if(questionCount>=3){updateResult();
}
}
function paint(){
  paintScore+=1;
  questionCount+=1;
  // alert("Get out some art supplies!");
  if(questionCount>=3){updateResult();
}
}
function workout(){
  workoutScore+=1;
  questionCount+=1;
  // alert("Put on some good shoes!");
  if(questionCount>=3){updateResult();
}
}  
function updateResult(){
   if (netflixScore >= 2){
  result.innerHTML = "Watch Netflix with your friends using Netflix Party!";
 }
 else if(scribblioScore >=2){
  result.innerHTML = "Play Scribbl.io with your friends over Zoom, Google Meet, FaceTime, or Discord!";
 }
 else if(paintScore >=2){
  result.innerHTML = "Paint using references from Pinterest!";
 }
 else if(workoutScore >= 2){
  result.innerHTML = "Take a walk or follow a workout vid from YouTube!";
 }
 else{
  result.innerHTML = "Sorry... your boredom is too strong. Try again.";
 }
}
  