import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');

const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause()] });

const playButton = document.getElementById("buttonPlay")
playButton.onclick = () => player.togglePlay();

const muteButton = document.getElementById("buttonMute");
muteButton.onclick = () => player.toggleMute();

