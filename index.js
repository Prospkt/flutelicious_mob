


var audio = new Audio ("sounds/flutetoto.mp3");  //frumentum


 document.querySelectorAll(".music")[0].addEventListener("click", function () { // an element button - when hear one action - click it will summon an action

   if(audio.paused){
      audio.play();
    }

     else {
      audio.pause();
    }

 });



// var button = document.getElementById("button");
// var audio = document.getElementById("player");
//
// button.addEventListener("click", function(){
//   if(audio.paused){
//     audio.play();
//     button.innerHTML = "Pause";
//   } else {
//     audio.pause();
//     button.innerHTML = "Play";
//   }
// });



var audio1 = new Audio ("sounds/flute-maria.mp3");  //frumentum


document.querySelectorAll(".music")[1].addEventListener("click", function () { // an element button - when hear one action - click it will summon an action


     if(audio1.paused){
        audio1.play();
      }

       else {
        audio1.pause();
      }

   });



   var audio2 = new Audio ("sounds/flute-weekend.mp3");// atticus

document.querySelectorAll(".music")[2].addEventListener("click", function () { // an element button - when hear one action - click it will summon an action


  if(audio2.paused){
     audio2.play();
   }

    else {
     audio2.pause();
   }

});





var audio3 = new Audio ("sounds/flute-mariah.mp3");  //contempus

document.querySelectorAll(".music")[3].addEventListener("click", function () { // an element button - when hear one action - click it will summon an action



    if(audio3.paused){
       audio3.play();
     }

      else {
       audio3.pause();
     }

});













// this works for all buttons

//    document.querySelector(".set").addEventListener("click", function () { // an element button - when hear one action - click it will summon an action
//  alert ("I got clicked!");

// });



//another way to write the one button it
//  document.querySelector("button").addEventListener("Click", handleclick) // an element button - when hear one action - click it will summon an actio//n

// function handleclick (){
//  alert (" I got clicked")
//  }

// SENDING A TEST ALERT

// var numberButtons =  document.querySelectorAll(".drum").length;
// for ( i=0; i<numberButtons ; i++){
//
//  document.querySelectorAll(".drum")[i].addEventListener("click", function () { // an element button - when hear one action - click it will summon an action
//  alert ("I got clicked!");
//
//
// });
//
// }
