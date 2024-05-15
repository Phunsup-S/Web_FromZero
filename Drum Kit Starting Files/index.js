
for(var i = 0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;
        checkKey(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    })
}

document.addEventListener("keypress", function(event){
    checkKey(event.key);
    buttonAnimation(event.key);

})

function checkKey(key){
    if(key === "w"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }else if(key === "a"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }else if(key === "s"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }else if(key === "d"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }else if(key === "j"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }else if(key === "k"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }else if(key ==="l"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}