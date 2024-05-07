// explore.js

window.addEventListener("DOMContentLoaded", init);
const synth = window.speechSynthesis;

const face_img = document.querySelector("#explore img");
const textarea = document.querySelector("#explore #text-to-speak");
const voice_select = document.querySelector("#explore #voice-select");
const talk_btn = document.querySelector("#explore button");
let voices = [];
function init() {
  synth.getVoices(); //dont know why need to put here, but needed
}
window.onload = () => {
  voices = window.speechSynthesis.getVoices();
  //console.log(voices);

  for (let index = 0; index < voices.length; index++) {
    const option = document.createElement("option");
    option.value = voices[index].name;
    option.text = voices[index].name;
    voice_select.appendChild(option);
  }
  talk_btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.speechSynthesis.cancel();
    face_img.src = "assets/images/smiling-open.png";
    //console.log(textarea.value);
    const utter = new SpeechSynthesisUtterance(textarea.value);
    utter.voice = voices[voice_select.value];
    window.speechSynthesis.speak(utter);
    textarea.value = "";

    utter.addEventListener("end", () => {
      face_img.src = "assets/images/smiling.png";
    });
  });
};
