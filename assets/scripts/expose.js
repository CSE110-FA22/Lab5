// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //for the images
  const selectElement = document.getElementById("horn-select");
  //for the volume icon
  const volumeElement = document.getElementById("volume");
  const volumeIcon = document.querySelector("div img");
  //for the play button 
  const playButton = document.querySelector("button");

  // Event listener for horn selection change
  selectElement.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    const imageElement = document.querySelector("main img");
    
    // Update image source based on selected horn
    switch (selectedHorn) {
      case "air-horn":
        imageElement.src = "assets/images/air-horn.svg";
        break;
      case "car-horn":
        imageElement.src = "assets/images/car-horn.svg";
        break;
      case "party-horn":
        imageElement.src = "assets/images/party-horn.svg";
        break;
      default:
        break;
    }
  });

  volumeElement.addEventListener('input', () => {
    const volume = volumeElement.value;

    // Update volume icon based on volume level
    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }

    // Adjust volume for the audio element
    const audioElement = document.querySelector("audio");
    audioElement.volume = volume / 100;
  });

  // Create instances of JSConfetti for Left and right
const jsConfettiLeft = new JSConfetti({
  confettiRadius: 4,
  confettiNumber: 500,
  target: 'left',
});

const jsConfettiRight = new JSConfetti({
  confettiRadius: 4,
  confettiNumber: 500,
  target: 'right',
});
// Event listener for play button click
playButton.onclick = () => {
  const selectedHorn = selectElement.value;
  const audioElement = document.querySelector("audio");

  // Set the audio source based on the selected horn
  switch (selectedHorn) {
    case "air-horn":
      audioElement.src = "assets/audio/air-horn.mp3";
      break;
    case "car-horn":
      audioElement.src = "assets/audio/car-horn.mp3";
      break;
    case "party-horn":
      audioElement.src = "assets/audio/party-horn.mp3";

     // Trigger confetti effect for party horn from both top and bottom
     
     jsConfettiLeft.addConfetti({
      confettiColors: [
        '#ff0a54', '#ff477e', '#ff7096','#ff85a1', '#fbb1bd', '#fbb1bd', '#f9bec7'
      ],
    });
    jsConfettiRight.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    });
    break;
  default:
    break;
}

// Play the selected horn sound
audioElement.play();
};
}