// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.querySelector("select");
  const image = document.querySelector("img");
  const audio = document.querySelector("audio");
  
  function ChangeHornImg(){
    const selectedOption = select.options[select.selectedIndex];
    var imagePath = "";
    var audioPath = "";
    
    if(select.selectedIndex == 1){
      imagePath = "assets/images/air-horn.svg";
      audioPath = "assets/audio/air-horn.mp3";
    } else if(select.selectedIndex == 2){
      imagePath = "assets/images/car-horn.svg";
      audioPath = "assets/audio/car-horn.mp3";
    } else if(select.selectedIndex == 3){
      imagePath = "assets/images/party-horn.svg";
      audioPath = "assets/audio/party-horn.mp3";
    } else {
      imagePath = "assets/images/no-image.png";
      audioPath = "";
    }
    
    image.src = imagePath;
    audio.src = audioPath;
  }
  
  select.addEventListener('change', ChangeHornImg);
  
  
  const volume = document.querySelector("input");
  const div = document.getElementById("volume-controls");
  const icon = div.querySelector("img");
  
  function ChangeSoundImg(){
    var volumeValue = volume.value;
    
    var iconPath = "";
    
    if(volumeValue <= 0){
      iconPath = "assets/icons/volume-level-0.svg";
    } else if (volumeValue > 0 && volumeValue < 33){
      iconPath = "assets/icons/volume-level-1.svg";
    } else if(volumeValue >=33 && volumeValue < 67){
      iconPath = "assets/icons/volume-level-2.svg";
    } else if(volumeValue >=67){
      iconPath = "assets/icons/volume-level-3.svg"
    } else{
      iconPath = "";
    }
    
    icon.src = iconPath;
    audio.volume = volumeValue/100;
    //console.log(volume.value)
    
    
  }
  
  volume.addEventListener('input', ChangeSoundImg);
  
  
  const playButton = document.querySelector("button");
  //const audio2 = document.querySelector("audio");
  
  function playAudio(){
    audio.play();
    if(select.selectedIndex == 3){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  }
  
  playButton.addEventListener('click', playAudio);
  
    
}
