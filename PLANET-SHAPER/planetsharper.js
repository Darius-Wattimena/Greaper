var sound = new Howl({
  urls: ['audio/Loop.mp3'],
  onload: run,
  loop: true,
  volume: 0.1,
})

function run() {
	sound.play();
}

var x;

function changecolors() {
    x = 1;
    setInterval(change, 1000);
}

function change() {
    if (x === 1) {
        color = "red";
        x = 2;
    } else {
        color = "green";
        x = 1;
    }

    document.body.style.background = color;
}