window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
 
  const voiceSelect = document.querySelector("select");
  const smileyFace = document.querySelector("img");
 
  let voices = [];
 
  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      //if (voices[i].default) {
        //option.textContent += " — DEFAULT";
      //}

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
 
  //smileyFace.addEventListener('click', getVoices);
 
  const button = document.querySelector("button");
  //const image = document.querySelector("img");
  const inputText = document.querySelector("textarea");
 
  function talk(){
    smileyFace.src = "assets/images/smiling-open.png";
   
    const utterThis = new SpeechSynthesisUtterance(inputText.value);
    utterThis.voice = voices[voiceSelect.value];
    //utterThis.language
    synth.speak(utterThis);
   
    smileyFace.src = "assets/images/smiling.png";
   
  }
 
  button.addEventListener('click', talk);
 
}
