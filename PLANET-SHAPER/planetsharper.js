var sound = new Howl({
  urls: ['audio/Asterisk.mp3'],
  onload: run,
  loop: true,
  volume: 0.1,
})

function run() {
	sound.play();
}