// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  const pitch = document.querySelector("#pitch");
  const pitchValue = document.querySelector(".pitch-value");
  const rate = document.querySelector("#rate");
  const rateValue = document.querySelector(".rate-value");

  const inputTxt = document.getElementById('text-to-speak');
  const play = document.querySelector('button');
  const accent = document.getElementById('voice-select');

  const imgHappy = document.querySelector('#explore img'); 

  let voices = [];

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

voiceSelect.addEventListener('click', function(){
  populateVoiceList();

});

play.addEventListener('click', function(){
  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  utterThis.onstart = function(){
    imgHappy.src = "assets/images/smiling-open.png";
  }
  utterThis.onend = function(){
    imgHappy.src = "assets/images/smiling.png";
  }
  synth.speak(utterThis);
});

}