// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const smilingFace = document.querySelector('img');
  const talkButton = document.querySelector('button');

  const synth = window.speechSynthesis;

  function loadVoices() {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }


  if (synth.getVoices().length) {
    loadVoices();
  } else {

    synth.addEventListener('voiceschanged', loadVoices);
  }


  function speak() {
    const text = textToSpeak.value;
    const selectedVoice = voiceSelect.value;

    if (text && selectedVoice !== 'select') {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = synth.getVoices().find((v) => v.name === selectedVoice);
      utterance.voice = voice;


      utterance.addEventListener('start', () => {
        smilingFace.src = 'assets/images/smiling-open.png';
      });


      utterance.addEventListener('end', () => {
        smilingFace.src = 'assets/images/smiling.png';
      });

      synth.speak(utterance);
    }
  }
  talkButton.addEventListener('click', speak);
}