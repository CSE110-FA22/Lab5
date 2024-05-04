// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const syn = window.speechSynthesis;

  let image = document.getElementsByTagName("img")[0];
  const sel = document.getElementById("voice-select");
  const box = document.getElementById("text-to-speak");
  let voices = [];
  var msg = new SpeechSynthesisUtterance();
  
  // Changing Voices

  function populateVoiceList(){
    voices = syn.getVoices();

    for(let i = 0; i < voices.length; i++){
      const opt = document.createElement("option");
      opt.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if(voices[i].default){
        opt.textContent += "- DEFAULT";
      }
  
      opt.setAttribute("data-lang", voices[i].lang);
      opt.setAttribute("data-name", voices[i].name);
      sel.appendChild(opt);
    }
  }
  populateVoiceList()

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  sel.addEventListener("change", updateVoice);

  function updateVoice(){
    const selectedOption = sel.selectedOptions[0].getAttribute("data-name"); // get the selected option's data name

    msg.voice = voices.find(voice => voice.name === selectedOption)

    // console.log(msg.voice)
  }

  // Get text
  box.addEventListener("input", setText);

  function setText(){
    let text = box.value.trim();

    msg.text = text;
  }

  // Change Image
  function imageSpeak(){
    image.src = "assets/images/smiling-open.png";
  }

  function imageShut(){
    image.src = "assets/images/smiling.png";
  }

  // Play Sound
  const button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", playSound);

  function playSound(){
    msg.addEventListener("start", imageSpeak)
    msg.addEventListener("end", imageShut)
    syn.speak(msg);
  }
}