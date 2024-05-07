// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var expose = document.querySelector("#expose img");
  var dropdown = document.querySelector("#horn-select");
  var audio = document.querySelector('#expose audio');
  var playButton = document.querySelector('#expose button');
  var slider = document.querySelector('#expose input');
  var volIcon = document.querySelector('#expose #volume-controls img');
  const jsConfetti = new JSConfetti();


  dropdown.addEventListener('change', function() {
    if(dropdown.value === 'air-horn') {
      expose.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if(dropdown.value === 'car-horn') {
      expose.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if(dropdown.value === 'party-horn') {
      expose.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  })

  slider.addEventListener('change', function() {
    audio.volume = slider.value / 100;
    if(slider.value == 0) {
      volIcon.src = 'assets/icons/volume-level-0.svg';
    } else if(slider.value >= 1 && slider.value < 33) {
      volIcon.src = 'assets/icons/volume-level-1.svg';
    } else if(slider.value >= 33 && slider.value < 67) {
      volIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volIcon.src = 'assets/icons/volume-level-3.svg';
    }
  })

  playButton.addEventListener('click', function() {
    if(dropdown.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
    audio.play();
  })
}