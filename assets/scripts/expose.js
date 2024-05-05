// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  let hornImage = document.querySelector("#expose img");

  hornSelect.addEventListener("change", (event) => {
    console.log(event);
    if(event.target.value == "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
    }
    else if(event.target.value == "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
    }
    else if(event.target.value == "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
    }
  });

  let volumeControl = document.getElementById("volume");
  let volumeImage = document.querySelector("#volume-controls img");
  let audioLevel = document.querySelector("#expose audio");
  
  volumeControl.addEventListener("input", (event) => {
    if(volumeControl.value == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
      audioLevel.volume = (volumeControl.value) / 100;
    }
    else if(volumeControl.value > 0 && volumeControl.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
      audioLevel.volume = (volumeControl.value) / 100;
      console.log(audioLevel.volume);
    }
    else if(volumeControl.value >= 33 && volumeControl.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
      audioLevel.volume = (volumeControl.value) / 100;
      console.log(audioLevel.volume);

    }
    else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
      audioLevel.volume = (volumeControl.value) / 100;
      console.log(audioLevel.volume);

    }
  });
  const jsConfetti = new JSConfetti()

  let button = document.querySelector("#expose button");
  button.addEventListener("click", (event) => {
    if(hornSelect.value == "party-horn") {
      audioLevel.src = "assets/audio/party-horn.mp3"
      audioLevel.play()
      jsConfetti.addConfetti()
    }
    else if(hornSelect.value == "air-horn") {
      audioLevel.src =  "assets/audio/air-horn.mp3"
      audioLevel.play()
    }
    else if(hornSelect.value == "car-horn") {
      audioLevel.src =  "assets/audio/car-horn.mp3"
      audioLevel.play()
    }
    
  });
}