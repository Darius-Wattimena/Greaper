var sound = new Howl({
  urls: ['audio/PlanetSharper.mp3'],
  onload: run,
  loop: true,
})

function run() {
	sound.play();
}