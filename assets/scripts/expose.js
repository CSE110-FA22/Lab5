// expose.js
//@ts-check
//import JSConfetti from 'js-confetti';

window.addEventListener('DOMContentLoaded', init);

function init() {
    // TODO
    const selectElement = document.getElementById("horn-select");
    const volumeElement = document.getElementById("volume");
    const playBtn = document.querySelector("button");
    const audio = document.querySelector("audio");

    selectElement.addEventListener('change', (event) => {
        if (event.target.value == "air-horn") {
            document.querySelector("main img").src = "assets/images/air-horn.svg";
        } else if (event.target.value == "car-horn") {
            document.querySelector("main img").src = "assets/images/car-horn.svg";
        } else if (event.target.value == "party-horn") {
            document.querySelector("main img").src = "assets/images/party-horn.svg";
        }
    });

    volumeElement.addEventListener('input', (event) => {
        if (volumeElement.value == "0") {
            document.querySelector("div img").src = "assets/icons/volume-level-0.svg";
            audio.muted = true;
        } else if (volumeElement.value >= 1 && volumeElement.value < 33) {
            document.querySelector("div img").src = "assets/icons/volume-level-1.svg";
            audio.muted = false;
            audio.volume = (volumeElement.value) / 100;
        } else if (volumeElement.value >= 33 && volumeElement.value < 67) {
            document.querySelector("div img").src = "assets/icons/volume-level-2.svg";
            audio.muted = false;
            audio.volume = (volumeElement.value) / 100;
        } else if (volumeElement.value >= 67) {
            document.querySelector("div img").src = "assets/icons/volume-level-3.svg";
            audio.muted = false;
            audio.volume = (volumeElement.value) / 100;
        }
    });

    playBtn.onclick = () => {
        if (selectElement.value == "air-horn") {
            audio.src = "assets/audio/air-horn.mp3";
        } else if (selectElement.value == "car-horn") {
            audio.src = "assets/audio/car-horn.mp3";
        } else if (selectElement.value == "party-horn") {
            audio.src = "assets/audio/party-horn.mp3";

            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti({
                emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            });
            jsConfetti.addConfetti({
                confettiRadius: 10,
                confettiNumber: 500,
            });
            jsConfetti.addConfetti();
        }
        audio.play();
    }
}