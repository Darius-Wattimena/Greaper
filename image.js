

function showLetter() {
    var name = imagesArray[generateRandomForArray()];
    $("div").append("<img src='images/" + name + ".png'>");
    var left = generateRandom();
    var top = generateRandom();
    $("div").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
}