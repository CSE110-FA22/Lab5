// expose.js


window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  // TODO
  const horn = document.getElementById('horn-select');
  const hornImg = document.querySelector('#expose img');
  const play = document.querySelector('#expose button')
  const sound = document.querySelector('#expose audio');
  const volumeSel = document.getElementById('volume');
  const volImg = document.querySelector('#volume-controls img');


  horn.addEventListener('change', function(){
    const selectedHorn = horn.value;
    if(selectedHorn === 'air-horn'){
      hornImg.src = 'assets/images/air-horn.svg';
      sound.src = 'assets/audio/air-horn.mp3';
    } 
    else if(selectedHorn === 'car-horn'){
      hornImg.src = 'assets/images/car-horn.svg';
      sound.src = 'assets/audio/car-horn.mp3';
    } 
    else if(selectedHorn === 'party-horn'){
      hornImg.src = 'assets/images/party-horn.svg';
      sound.src = 'assets/audio/party-horn.mp3';
    }
  });

  play.addEventListener('click',function(){
    sound.play();
    if(horn.value === 'party-horn'){
      jsConfetti.addConfetti();
    }

  });

  volumeSel.addEventListener('change',function(){
    const volValue = volumeSel.value / 100;
    const vV = volumeSel.value;
    sound.volume = volValue;
    if(vV == 0){
      volImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if(vV <33){
      volImg.src = 'assets/icons/volume-level-1.svg';      
    }
    else if(vV <67){
      volImg.src = 'assets/icons/volume-level-2.svg';      
    }
    else{
      volImg.src = 'assets/icons/volume-level-3.svg';
    }
  });

}