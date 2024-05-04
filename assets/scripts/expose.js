// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()
  
  // Select
  const image = document.getElementsByTagName("img")[0];
  const sound = document.getElementsByTagName("audio")[0];
  const opt = document.getElementById("horn-select");

  opt.addEventListener("change", updateMedia);

  function updateMedia(){
    image.src = "assets/images/" + opt.value + ".svg";
    image.alt = opt.value;

    sound.src = "assets/audio/" + opt.value + ".mp3";
  }

  const button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", playSound);

  function playSound(){
    sound.play();

    if(opt.value == "party-horn"){
      jsConfetti.addConfetti()
    }
  }
  
  // Slider
  const vol_bar = document.getElementById("volume");
  const vol_image = document.getElementsByTagName("img")[1];

  vol_bar.addEventListener("change", updateVolumeIcon);

  function updateVolumeIcon(){
    var size = "2";
    if(vol_bar.value == 0){
      size = "0";
    }
    else if(vol_bar.value < 33){
      size = "1";
    }
    else if(vol_bar.value > 67){
      size = "3";
    }

    vol_image.src = "assets/icons/volume-level-" + size + ".svg";
    vol_image.alt = "Volume level " + size;

    sound.volume = vol_bar.value / 100;
  }

}