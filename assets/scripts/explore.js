document.addEventListener("DOMContentLoaded", function() {
  const synth = window.speechSynthesis;


  const inputTxt = document.querySelector("#text-to-speak");
  const voiceSelect = document.querySelector("#voice-select");
  const speakButton = document.querySelector("button");
  var image = document.createElement('img');
  var parentElement = document.querySelector('#explore');
  var existingImage = parentElement.querySelector('img');

  // let speakingImageSrc = './assets/images/smiling-open.png'; // Image when speaking
  // let notSpeakingImageSrc = './assets/images/smiling.png'; // Image when not speaking


  // image.src = notSpeakingImageSrc; // Set initial image


  let voices = [];


  function populateVoiceList() {
      voices = synth.getVoices().sort(function (a, b) {
          const aname = a.name.toUpperCase();
          const bname = b.name.toUpperCase();
          if (aname < bname) {
              return -1;
          } else if (aname == bname) {
              return 0;
          } else {
              return +1;
          }
      });
      const selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
      voiceSelect.innerHTML = "";
      for (let i = 0; i < voices.length; i++) {
          const option = document.createElement("option");
          option.textContent = `${voices[i].name} (${voices[i].lang})`;
          if (voices[i].default) {
              option.textContent += " -- DEFAULT";
          }
          option.setAttribute("data-lang", voices[i].lang);
          option.setAttribute("data-name", voices[i].name);
          voiceSelect.appendChild(option);
      }
      voiceSelect.selectedIndex = selectedIndex;
  }


  populateVoiceList();


  if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  function speak() {
    if (synth.speaking) {
        console.error("speechSynthesis.speaking");
        return;
    }

    if (inputTxt.value !== "") {
        const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

        utterThis.onend = function (event) {
            console.log("SpeechSynthesisUtterance.onend");
            // Change image source and properties after speech ends
            image.src = './assets/images/smiling.png'; // Set not speaking image after speech ends
            image.alt = 'not speaking';
            image.width = 500;
            image.height = 400;
            // Get the parent element to append the image
            parentElement = document.querySelector('#explore');
            // Remove any existing image element
            existingImage = parentElement.querySelector('img');
            if (existingImage) {
                parentElement.removeChild(existingImage); 
            }
            // Append the new image element
            parentElement.appendChild(image);
        };

        utterThis.onerror = function (event) {
            console.error("SpeechSynthesisUtterance.onerror");
            // Change image source and properties on error
            image.src = './assets/images/error.png'; // Set error image
            image.alt = 'error';
            image.width = 500;
            image.height = 400;
            // Get the parent element to append the image
            parentElement = document.querySelector('#explore');
            // Remove any existing image element
            existingImage = parentElement.querySelector('img');
            if (existingImage) {
                parentElement.removeChild(existingImage); 
            }
            // Append the new image element
            parentElement.appendChild(image);
        };

        const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
                break;
            }
        }

        synth.speak(utterThis);
    }
}

speakButton.onclick = function () {
    speak();
    // Change image source and properties when speak button is clicked
    image.src = './assets/images/smiling-open.png';
    image.alt = 'speaking';
    image.width = 500;
    image.height = 400;
    // Get the parent element to append the image
    parentElement = document.querySelector('#explore');
    // Remove any existing image element
    existingImage = parentElement.querySelector('img');
    if (existingImage) {
        parentElement.removeChild(existingImage); 
    }
    // Append the new image element
    parentElement.appendChild(image);
};
});



