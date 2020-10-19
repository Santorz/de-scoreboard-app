// Selecting Elements..
var mobile_nav_activator = document.querySelector("#mobile-nav-hamburger");
var mobile_nav = document.getElementById("mobile-navbar");
var document_body = document.querySelector("body");
var app_body_section_1 = document.querySelector(".app-body-section-1");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("#numInput");
var playLimitNum = document.querySelector("#playLimitText span");
var numInputErrorText = document.getElementById("numInput-error-text");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var mobile_nav_clicked = false;
var winningScore = numInput.value;



mobile_nav_activator.onclick = function(){
    if (!mobile_nav_clicked){
        mobile_nav.style.display = "block";
        app_body_section_1.style.filter = "blur(0.55vw)";
        mobile_nav_clicked = true;
    }
    else{
        mobile_nav.style.display = "none";
        app_body_section_1.style.filter = "none";
        mobile_nav_clicked = false;
    }
  
};

// Function to add display:block to element
function addBlockDisplay(element){
    element.classList.add("displayBlock")
}

// Function that contains all properties to hinder gameplay
function gameNotStarted(){
    p1Score,p2Score = 0;
    gameOver = true;
    playLimitNum.textContent = "Not set";
    numInput.value = '' ;
}

// Function to reset scores
function reset(){
    p1Button.classList.add("unclickable");
    p2Button.classList.add("unclickable");
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = true;
    numInput.value = "";
};

// Give it a not-started state if max score hasn't been set
if (numInput.value === ""){
    gameNotStarted();
}
else{
    // Do nothing bruh...
}



if (playLimitNum.textContent === "Not set"){
    p1Button.classList.add("unclickable");
    p2Button.classList.add("unclickable");
}
else{
    // Hang on bruh..
}


// Add Event Listener
// for Player 1 button
p1Button.addEventListener("click",function (){
    if (!gameOver){
        p1Score++;
        if ( p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    
});

// for Player 2 button
p2Button.addEventListener("click",function (){
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
    if (numInput.value === ""){
        gameNotStarted();
    }
});

// for Number Input field
numInput.addEventListener("change", function(){

    var int_input = (parseInt(this.value)) ;
    playLimitNum.textContent = int_input;
    winningScore = Number(int_input);
    reset();
    gameOver = false;
    p1Button.classList.remove("unclickable");
    p2Button.classList.remove("unclickable");
    
});


numInput.oninput = function(){
    var max = parseInt(this.max);
    var min = parseInt(this.min);

    if(parseInt(this.value) > max){
        this.value = "";
        addBlockDisplay(numInputErrorText);
    }
    else if(parseInt(this.value) < min){
        this.value = "";
        addBlockDisplay(numInputErrorText);
    }

}
