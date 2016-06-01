var sound = new Howl({
  urls: ['audio/Loop.mp3'],
  onload: run,
  loop: true,
  volume: 0.1,
})

function run() {
	sound.play();
	window.alert("Test");
}