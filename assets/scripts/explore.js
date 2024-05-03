// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voices = speechSynthesis.getVoices();
  let text = document.getElementById("text-to-speak");
  let selector = document.getElementById("voice-select");
  let button = document.querySelector("button");
  let smile = document.querySelector("img");

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    selector.appendChild(option);
  }

  button.addEventListener("click", function(){
    let speech = new SpeechSynthesisUtterance(text.value);
    let voiceType =selector[selector.selectedIndex].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voiceType) {
        speech.voice = voices[i];
      }
    }
    console.log(selector[selector.selectedIndex]);
    smile.src = "assets/images/smiling-open.png";
    speechSynthesis.speak(speech);

    speech.addEventListener("end", function(){
      smile.src = "assets/images/smiling.png";
    })
  })

  
}