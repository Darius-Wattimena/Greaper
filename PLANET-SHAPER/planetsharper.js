var sound = new Howl({
  urls: ['audio/Loop.mp3'],
  onload: run,
  loop: true,
  volume: 0.1,
})

function run() {
	sound.play();
}

function initBlink()
{
    var state = false;
    setInterval(function()
        {
            state = !state;
            var color = (state?'red':'green');
            document.getElementById('test').style.color = color;
        }, 100);
}