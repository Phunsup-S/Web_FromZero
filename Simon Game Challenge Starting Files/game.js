var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $("#level-title").text("Level "+ level)
    level++;
    console.log(gamePattern);
    console.log(userClickedPattern);

}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    //var audio = new Audio("sounds/red.mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100)
}
function checkAnswer(currentLevel){
    console.log(currentLevel);
    if(gamePattern[currentLevel-1] === userClickedPattern[currentLevel-1]){
        console.log("yes");
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }

    }else{
        console.log("no");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Game over, Press Any Key to Restart !");
        startOver();
    }
}

function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
}


$(".btn").on("click",function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length);
    //$("#level-title").text("Level "+ level)
    //level++;
})

$(document).on("keypress",function(){
    nextSequence();
    $("#level-title").text("Level "+ level)
})