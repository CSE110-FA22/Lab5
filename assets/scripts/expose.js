
// import JSConfetti from 'js-confetti';



window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');
  var image = document.createElement('img'); //give image obj an id img
  var parentElement = document.querySelector('#expose'); //declare otuside
  var existingImage = parentElement.querySelector('img');

  // Event listener for horn selection
  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    // Set the correct audio file based on the selected horn
    switch(selectedHorn) {
      case 'air-horn':
        audio.src = './assets/audio/air-horn.mp3';
        // Dynamically create and set the image source accordingly
        image.src = './assets/images/air-horn.svg';
        image.alt = 'Air Horn';
        image.width = 500;
        image.height = 400;
        // Get the parent element to append the image
        parentElement = document.querySelector('#expose');
        // Remove any existing image element
        existingImage = parentElement.querySelector('img');
        if (existingImage) {
          parentElement.removeChild(existingImage); 
        }
        // Append the new image element
        parentElement.appendChild(image);
        break;
        // -------------------------------------------------------
      case 'car-horn':
        audio.src = './assets/audio/car-horn.mp3';
        image.src = './assets/images/car-horn.svg';
        image.alt = 'Car Horn';
        image.width = 500;
        image.height = 400;
        // Get the parent element to append the image
        parentElement = document.querySelector('#expose');
        // Remove any existing image element
        existingImage = parentElement.querySelector('img');
        if (existingImage) {
          parentElement.removeChild(existingImage); 
        }
        // Append the new image element
        parentElement.appendChild(image);
        break;

      case 'party-horn':
        audio.src = './assets/audio/party-horn.mp3';
        image.src = './assets/images/party-horn.svg';
        image.alt = 'Party Horn';
        image.width = 500;
        image.height = 400;
        
        // Get the parent element to append the image
        parentElement = document.querySelector('#expose');
        // Remove any existing image element
        existingImage = parentElement.querySelector('img');
        if (existingImage) {
          parentElement.removeChild(existingImage); 
        }
        // Append the new image element
        parentElement.appendChild(image);

        //if button is press, show conffetti
        

        break;
    }
  });

  // Event listener for volume slider
  volumeSlider.addEventListener('input', function() {
    const volume = volumeSlider.value;
    // Set the correct volume level icon based on the volume value
    const volumeIcon = document.querySelector('#volume-controls img');
    if (volume === '0') {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
    }
    // Set the volume for the audio element
    audio.volume = volume / 100;
  });

  // Event listener for play button
  playButton.addEventListener('click', function() {
    // Play the audio
    audio.play();
    const selectedHorn = hornSelect.value;
    if (selectedHorn === 'party-horn') {
      var jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['⚡️', '🦄', '✨', '💫', '🌸'],
        confettiRadius: 8,
        confettiNumber: 600,
        
     })
    }
  });
}
