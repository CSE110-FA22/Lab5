// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
 // Get DOM elements
 var voiceSelector = document.getElementById('voice-select');
 var face = document.getElementsByTagName('img')[0];
 var talkBtn = document.getElementsByTagName('button')[0];
 var inputField = document.getElementById('text-to-speak');

 // Initialize SpeechSynthesis
 var synth = window.speechSynthesis;
 var voices = [];

 // Function to populate the voice dropdown
 function fillList() {
   voices = synth.getVoices();
   // Clear previous options
   voiceSelector.innerHTML = '';
   voices.forEach(function(voice) {
     // Create and append options for each voice
     var option = document.createElement('option');
     option.textContent = voice.name + ' (' + voice.lang + ')';
     option.setAttribute('data-name', voice.name);
     option.setAttribute('data-lang', voice.lang);
     voiceSelector.appendChild(option);
   });
 }

 // Call fillList initially and on voices changed event
 fillList();
 if (speechSynthesis.onvoiceschanged !== undefined) {
   speechSynthesis.onvoiceschanged = fillList;
 }

 // Event listener for "Press to Talk" button
 talkBtn.addEventListener('click', function() {
   // Change the image source to open mouth
   face.src = "assets/images/smiling-open.png";

   // Get the selected voice option
   var userOption = voiceSelector.selectedOptions[0];
   var nameOfOption = userOption.getAttribute('data-name');

   // Create SpeechSynthesisUtterance instance with user input
   var speechLine = new SpeechSynthesisUtterance(inputField.value);

   // Find the selected voice and assign it to speechLine
   for(var i = 0; i < voices.length ; i++) {
     if(voices[i].name === nameOfOption) {
       speechLine.voice = voices[i];
       break; // Once voice is found, exit loop
     }
   }

   // Speak the user's text
   synth.speak(speechLine);

   // Reset face image after speech ends
   speechLine.onend = function(event) {
     face.src = "assets/images/smiling.png";
   };
 });
}