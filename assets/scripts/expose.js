// expose.js

window.addEventListener("DOMContentLoaded", init);
const jsConfetti = new JSConfetti()

function init() {
  // TODO
  let hornSel = document.getElementById("horn-select");
  console.log(hornSel);

  let hornImg = document.querySelector("img");
  console.log(hornImg);

  let hornAudio = document.querySelector("audio");
  console.log(hornAudio);

  let hornSlider = document.querySelector("input");
  console.log(hornSlider);

  let hornVol = document.getElementById("volume-controls").querySelector("img");
  console.log(hornVol);

  let hornButton = document.querySelector("button");
  console.log(hornButton);

  hornSel.addEventListener("change", function(){
    if (hornSel.selectedIndex == 1) {
      hornImg.src = "assets/images/air-horn.svg";
      hornImg.alt = "air-horn";
      hornAudio.src= "assets/audio/air-horn.mp3";
    }
    else if (hornSel.selectedIndex == 2) {
      hornImg.src = "assets/images/car-horn.svg";
      hornImg.alt = "car-horn";
      hornAudio.src= "assets/audio/car-horn.mp3";
    }
    else if (hornSel.selectedIndex == 3) {
      hornImg.src = "assets/images/party-horn.svg";
      hornImg.alt = "party-horn";
      hornAudio.src= "assets/audio/party-horn.mp3";
    }
    console.log(hornImg);
    console.log(hornSel.value)
  })
  

  hornButton.addEventListener("click", function() {
    hornAudio.play();
    if (hornSel.selectedIndex == 3) {
      jsConfetti.addConfetti();
    }
  })

  hornSlider.addEventListener("input", function(){
    if (hornSlider.value == 0) {
      hornVol.src = "assets/icons/volume-level-0.svg";
    }
    else if (hornSlider.value >= 1 && hornSlider.value < 33) {
      hornVol.src = "assets/icons/volume-level-1.svg";
    }
    else if (hornSlider.value >= 33 && hornSlider.value < 67) {
      hornVol.src = "assets/icons/volume-level-2.svg";
    }
    else if (hornSlider.value >= 67) {
      hornVol.src = "assets/icons/volume-level-3.svg";
    }

    hornAudio.volume = hornSlider.value/100;
  })
}