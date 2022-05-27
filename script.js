// // console.log(e)
// const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
// // console.log(key)
// // console.log(audio)
// if (!audio) return;
// audio.currentTime=0;
// audio.play();
// key.classList.add('playing');
// });

function play(e){
    // console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    // console.log(key)
    // console.log(audio)
    if (!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
}
function removeClass(e){
    console.log(this)
    this.classList.remove('playing')
    
}

window.addEventListener('keydown', play)
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass));