// expose.js
window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
function init() {
  // Get necessary elements from the HTML DOM
  const horn_select = document.querySelector('#horn-select');
  const volume_controls = document.querySelector('#volume');
  const play_sound = document.querySelector('button');
  const audio = document.querySelector('audio');

  // Set up event listeners
  horn_select.addEventListener('change', updateSound);
  volume_controls.addEventListener('input', updateVolume);
  play_sound.addEventListener('click', playSound);

  // Define the event listener functions
  function updateSound() {
    const selectedHorn = horn_select.value;

    // Update the image and audio file based on the selected horn
    const horn_image = document.querySelector('section img');
    const horn_sound = `./assets/audio/${selectedHorn}.mp3`;

    horn_image.setAttribute('src', `./assets/images/${selectedHorn}.svg`);
    audio.setAttribute('src', horn_sound);
  }

  function updateVolume() {
    const selectedVolume = volume_controls.value;

    // Update the volume icon displayed on the page
    const volumeIcon = document.querySelector('#volume-controls img');
    audio.volume =  selectedVolume/100;
    if (selectedVolume == 0) {
      volumeIcon.setAttribute('src', `./assets/icons/volume-level-0.svg`);
      
    } else if (selectedVolume >= 1 && selectedVolume <= 33) {
      volumeIcon.setAttribute('src', `./assets/icons/volume-level-1.svg`);

    } else if (selectedVolume >= 34 && selectedVolume <= 66) {
      volumeIcon.setAttribute('src', `./assets/icons/volume-level-2.svg`);

    } else {
      volumeIcon.setAttribute('src', `./assets/icons/volume-level-3.svg`);
    }
  }

  function playSound() {
    audio.play();
    if (horn_select.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  }

}
