function playPiano(e) {
    let audio = document.querySelector(`audio[data-key="${e.key}"]`);
    let key = document.querySelector(`div.key[data-key="${e.key}"]`);
    if (!audio) return;
    // audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    console.log(key.classList.contains('playing'));
}

let keys = document.querySelectorAll('div.key');
keys.forEach( key => { key.addEventListener('transitionend',removeTransition)});

function removeTransition(e) {
    if (e.propertyName !=='transform') {
        return;
    }
    this.classList.remove('playing');
}

let audioElems = document.querySelectorAll('audio');
audioElems.forEach(function (audio) {
    new Audio(`./sounds/${audio.dataset.key}.mp3`)
});

addEventListener('keydown',playPiano);