import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playButton = document.getElementById("buttonPlay")
playButton.onclick = () => player.togglePlay();

const muteButton = document.getElementById("buttonMute");
muteButton.onclick = () => player.toggleMute();

