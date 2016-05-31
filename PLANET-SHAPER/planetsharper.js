var sound = new Howl({
  urls: ['audio/PlanetSharper.mp3'],
  onload: run,
  loop: true,
  volume: 0.2,
})

function run() {
	sound.play();
}