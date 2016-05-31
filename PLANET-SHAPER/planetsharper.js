var sound = new Howl({
  urls: ['audio/PlanetSharper.mp3'],
  onload: run,
  loop: true,
  volume: 0.1,
})

function run() {
	sound.play();
}