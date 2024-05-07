// expose.js
window.addEventListener("DOMContentLoaded", init);
const horn_image = document.querySelector("#expose img");
const selectors = document.getElementById("horn-select");
const play_sound_btn = document.querySelector("#expose button");
const audio_src = document.querySelector("audio");
const volume_amp_img = document.querySelector("#volume-controls img");
const volume_slider = document.querySelector("#volume-controls input");
const jsConfetti = new JSConfetti();
const voices_entries = [
  [
    "assets/images/air-horn.svg",
    "assets/images/car-horn.svg",
    "assets/images/party-horn.svg",
  ],
  ["air-horn", "car-horn", "party-horn"],
  [
    "assets/audio/air-horn.mp3",
    "assets/audio/car-horn.mp3",
    "assets/audio/party-horn.mp3",
  ],
];
//console.log(selectors);
function init() {
  horn_image.src = "assets/images/no-image.png";
  //console.log(voices_entries[0][1]);
  horn_image.src = voices_entries[0][1];
  selectors.addEventListener("change", when_voice_selected);
  play_sound_btn.addEventListener("click", when_play_sound_clicked);
  volume_slider.addEventListener("change", (e) => {
    var value = e.target.value;
    if (value == 0) {
      volume_amp_img.src = "assets/icons/volume-level-0.svg";
    } else if (value < 33) {
      volume_amp_img.src = "assets/icons/volume-level-1.svg";
    } else if (value < 67) {
      volume_amp_img.src = "assets/icons/volume-level-2.svg";
    } else {
      volume_amp_img.src = "assets/icons/volume-level-3.svg";
    }
  });
}
/**
 * get the currently active voice entry index, or -1
 * @returns the index or -1 if not selected
 */
function get_active_voice_entry_index() {
  for (var i = 0; i < 3; i++) {
    if (voices_entries[1][i] == selectors.value) {
      horn_image.src = voices_entries[0][i];
      return i;
    }
  }
  return -1;
}
function when_voice_selected() {
  var index = get_active_voice_entry_index();
  horn_image.src = voices_entries[0][index];
  audio_src.src = voices_entries[2][index];
}
function when_play_sound_clicked() {
  audio_src.load();
  audio_src.volume = volume_slider.value / 100;
  audio_src.play();

  if (get_active_voice_entry_index() == 2) {
    jsConfetti.addConfetti();
  }
}
