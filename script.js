var mobile_nav_activator = document.querySelector("#mobile-nav-hamburger");
var mobile_nav = document.getElementById("mobile-navbar");
var document_body = document.querySelector("body");
var app_body_section_1 = document.querySelector(".app-body-section-1");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("#numInput");
var playLimitNum = document.querySelector("#playLimitText span")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var mobile_nav_clicked = false;
var winningScore = 5;


mobile_nav_activator.addEventListener("click", function(){
    if (!mobile_nav_clicked){
        mobile_nav.style.display = "block";
        app_body_section_1.style.filter = "blur(0.5vw)";
        mobile_nav_clicked = true;
    }
    else{
        mobile_nav.style.display = "none";
        app_body_section_1.style.filter = "none";
        mobile_nav_clicked = false;
    }

});


// Add Event Listener
// for Player 1 button
p1Button.addEventListener("click",function(){
    if (!gameOver){
        p1Score++;
        if ( p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    
});

// for Player 1 button
p2Button.addEventListener("click",function(){
    if (!gameOver){
        p2Score++;
        if ( p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
    
});

// for Reset button
resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};

// for Number Input field
numInput.addEventListener("change", function(){
    playLimitNum.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

