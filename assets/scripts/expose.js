// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornDropdown = document.querySelector("#horn-select");
  const volumeSlider = document.querySelector("#volume");
  const playButton = document.querySelector("button");
  const imageElement = document.querySelector("img");
  const audioElement = document.querySelector("audio");
  const jsConfetti = new JSConfetti();

  hornDropdown.addEventListener('change', handleHornChange);
  volumeSlider.addEventListener('input', handleVolumeChange);
  playButton.addEventListener('click', playSound);

  function handleHornChange(event) {
    const selectedHorn = event.target.value;
    // Sets the correct image
    if (selectedHorn === 'air-horn') {
      imageElement.src = 'assets/images/air-horn.svg';
    } else if (selectedHorn === 'car-horn') {
      imageElement.src = 'assets/images/car-horn.svg';
    } else if (selectedHorn === 'party-horn') {
      imageElement.src = 'assets/images/party-horn.svg';
    } else {
      imageElement.src = 'assets/images/no-image.png';
    }

    // Sets the correct audio sound file
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  }

  function handleVolumeChange(event) {
    const volume = event.target.value;
    // Sets the volume icon img
    if (volume >= 67) {
      document.querySelector("#volume-controls img").src = 'assets/icons/volume-level-3.svg';
    } else if (volume >= 33) {
      document.querySelector("#volume-controls img").src = 'assets/icons/volume-level-2.svg';
    } else if (volume >= 1) {
      document.querySelector("#volume-controls img").src = 'assets/icons/volume-level-1.svg';
    } else {
      document.querySelector("#volume-controls img").src = 'assets/icons/volume-level-0.svg';
    }

    // Sets the corresponding volume for the audio element
    audioElement.volume = volume / 100;
  }

  function playSound() {
    const selectedHorn = hornDropdown.value;

    // Plays the corresponding sound for the selected horn at the specified volume
    //audioElement.play();

    if (selectedHorn === 'party-horn') {
      jsConfetti.addConfetti();
      audioElement.play();
    }
    else{
      audioElement.play();
    }
  }
}