var buttons = document.querySelectorAll(".set button");

// var audio = new Audio("./sounds/tom-1.mp3");

function playAudio(exp){
  switch (exp) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:

  }
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var exp = this.innerHTML;
    playAudio(exp);
    animateButton(exp);
  });
}

document.addEventListener("keypress",function(e){
  playAudio(e.key);
  animateButton(e.key);
})


function animateButton(buttoncontent){
  document.querySelector("." + buttoncontent).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("." + buttoncontent).classList.remove("pressed");
  },100);

}
