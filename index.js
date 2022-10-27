var buttons = document.getElementsByClassName("pic");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        clicked(this.innerHTML);
    });
}

document.addEventListener("keypress",function(e){
   playSound(e.key);
   clicked(e.key);
});

function playSound(btn) {
    switch (btn) {
        case 'w':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function clicked(obj){
  var clickbtn=document.querySelector("."+obj);
  clickbtn.classList.add("pressed");

  setTimeout(function(){
    clickbtn.classList.remove("pressed");
  },100);
}