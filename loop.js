var sound = new Howl({
  urls: ['loop.mp3'],
  onload: run,
  loop: true,
  volume: 0.2,
})

function run() {
	sound.play();
	window.alert("Test");
}