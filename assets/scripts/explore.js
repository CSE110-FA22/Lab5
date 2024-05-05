// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices = [];
const synth = window.speechSynthesis;
function init() {
  let voiceSelect = document.getElementById("voice-select");

  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let img = document.querySelector("#explore img");
  let button = document.querySelector("#explore button");
  const inputTxt = document.getElementById("text-to-speak");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
    inputTxt.blur();
    
    img.src = "assets/images/smiling-open.png";
    utterThis.addEventListener("end", (event) => {
      img.src = "assets/images/smiling.png";
    }) 
  });

}