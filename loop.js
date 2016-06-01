var sound = new Howl({
  urls: ['loop.mp3', 'loop.wav'],
  preload: true,
  loop: true,
  volume: 0.2,
})

sound.play();