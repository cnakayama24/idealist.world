const notes = ["1","1","1","2","3","3","3","4","5","5","5","6","7","7","8","9"];

var  currentNote = document.getElementById("toPlay");
var counter = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function clicked (number)
{

  var button = "note" + number;
  document.getElementById(button).animate(
    [
      { border: "1vw solid grey", duration: 0.5},
      { border: "2vw solid grey", duration: 0.5},
      { border: "1vw solid grey", duration: 0.5}
    ], {
      duration: 250,
    } 
  );
  document.getElementById("toPlay").animate(
    [
      { color:  "#b8b8b8", duration: 0.5},
      { color: "#d3d3d3", duration: 0.5},
      { color: "#b8b8b8", duration: 0.5}
    ], {
      duration: 250,
    } 
  )
    switch (number)
    {
      case "1":
        {
          var audio = new Audio("keys/1.mp3");
          audio.play(notes);      
        }
      break;
      case "2":
        {
          var audio = new Audio("keys/2.mp3");
          audio.play(notes);      
        }
      break;
      case "3":
        {
          var audio = new Audio("keys/3.mp3");
          audio.play(notes);      
        }
      break;
      case "4":
        {
          var audio = new Audio("keys/10.mp3");
          audio.play(notes);      
        }
      break;
      case "5":
        {
          var audio = new Audio("keys/5.mp3");
          audio.play(notes);      
        }
      break;
      case "6":
        {
          var audio = new Audio("keys/6.mp3");
          audio.play(notes);      
        }
      break;
      case "7":
        {
          var audio = new Audio("keys/7.mp3");
          audio.play(notes);      
        }
      break;
       case "8":
        {
          var audio = new Audio("keys/8.mp3");
          audio.play(notes);      
        }
      break;
       case "9":
        {
          var audio = new Audio("keys/9.mp3");
          audio.play(notes);   
        }
    }
  if (number === notes[counter] && notes[counter] !== "9")
  {
    counter ++;
    currentNote.textContent = "Note to play: " + notes[counter];
  }
  else if (notes[counter] === "9")
  {
    currentNote.innerHTML = "<marquee behavior='scroll' scrollamount='30' direction='right'>LOOK AT YA! LOOK AT YA! LOOK AT YA! LOOK AT YA! LOOK AT YA! LOOK AT YA! LOOK AT YA! LOOK AT YA! LOOK AT YA! LOOK AT YA! LOOK AT YA! LOOK AT YA!</marquee>";
    var audio = new Audio("keys/sound.mp3");
    var delayInMilliseconds = 650;
    setTimeout(function() {
    audio.play()}, delayInMilliseconds); 
    setTimeout();
  }
}
