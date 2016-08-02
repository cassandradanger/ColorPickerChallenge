/**
 * Created by primeadmin on 8/2/16.
 */
$(document).ready(function(){
    createWelcome();
    createBlock();
    $(".blocks").on("click", ".box", click);
});


var randomColor;
var colorArray = ["yellow", "red", "blue", "green", "orange", "purple"];

function createWelcome(){
    chooseColor();
    $(".welcome").text("Welcome! Pick the box that is the color " + randomColor);
}

function chooseColor(){
    var number = randomNumber(0,5);
    console.log(number);
    randomColor = colorArray[number];
}

function createBlock(){
    for(var i = 0; i < colorArray.length; i++) {
        $(".blocks").append("<div class='box' style='background-color: " + colorArray[i] + ";' id = '" + colorArray[i] + "'></div>")
    }
}

function click(){
    var el = $(this).attr('id');
    if (el == randomColor){
        console.log("yes");
        $(".answer").html("<p>You are Correct!</p>").fadeIn().delay(1000).fadeOut('slow');
        createWelcome();
    }else{
        console.log("no");
        $(".answer").append("<p>Try again, loser</p>").fadeIn();
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
