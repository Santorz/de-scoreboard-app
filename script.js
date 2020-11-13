// IMPORTING PACKAGES

import * as playerModalActions from './js/player-name-modals.js';


// Selecting Elements..
var mobile_nav_activator = document.querySelector("#mobile-nav-hamburger");
var mobile_nav = document.getElementById("mobile-navbar");
var document_body = document.querySelector("body");
var app_container = document.querySelector('#app-body');
var app_body_section_1 = document.querySelector(".app-body-section-1");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetScoresButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("#numInput");
var numInputArrow = document.querySelector('#numInputArrow')
var playLimitNum = document.querySelector("#playLimitText span");
var numInputErrorText = document.getElementById("numInput-error-text");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var mobile_nav_clicked = false;
var winningScore = numInput.value;

// ----------------------------------------
//          ***** FUNCTIONS ******
// ----------------------------------------


// Function to add display:block to element
function addBlockDisplay(element){
    element.classList.add("displayBlock")
}

// When the user clicks anywhere outside of an ..
// element having the displayBlock property, close it
function hideElement(element) {
    window.onclick = function(event) {
        if (event.target !== element) {
            element.classList.remove('displayBlock')
        }
    }
}

// Function that contains all properties to hinder gameplay
function gameNotStarted(){
    p1Score,p2Score = 0;
    gameOver = true;
    playLimitNum.textContent = "Not set";
    numInput.value = '' ;
    p1Button.classList.add("unclickable");
    p2Button.classList.add("unclickable");
}

// Function to hinder input capture
function hinderInputCapture() {
    numInput.value = "";
    numInput.classList.add('numInput-on-error-state');
    remove_border_error_color();
    addBlockDisplay(numInputErrorText);
    gameNotStarted();
}

// Function to take input from numInput Box
function takeInput(){
    var max = (numInput.max);
    var min = (numInput.min);

    if(parseInt(numInput.value) > max){
        hinderInputCapture();
    }
    else if(parseInt(numInput.value) < min){
        hinderInputCapture();
    }
    else{
        var int_input = (parseInt(numInput.value)) ;
        playLimitNum.textContent = int_input;
        winningScore = Number(int_input);
        resetScores();
        gameOver = false;
        p1Button.classList.remove("unclickable");
        p2Button.classList.remove("unclickable");
    }

}

// Function to remove numInput's border's warning color 
// This happens when user clicks outside of it when it's been shown 
function remove_border_error_color(){
    document.onclick = function(event){
            if (event.target !== numInputArrow){
                numInput.classList.remove('numInput-on-error-state');
            }
        }
    }

// Function to resetScores scores
function resetScores(){
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



// Control mobile nav 
mobile_nav_activator.onclick = function(){
    if (!mobile_nav_clicked){
        mobile_nav.classList.add('displayBlock');
        app_body_section_1.classList.add('blur');
        mobile_nav_clicked = true;
    }
    else{
        mobile_nav.classList.remove('displayBlock');
        app_body_section_1.classList.remove('blur');
        mobile_nav_clicked = false;
    }
    window.onclick = function(e){
        if (e.target !== mobile_nav && e.target !== mobile_nav_activator){
            mobile_nav.classList.remove('displayBlock');
            app_body_section_1.classList.remove('blur');
            mobile_nav_clicked = false;
        }
    }
};


// Give app a not-started state if max score hasn't been set
if (numInput.value === ""){
    gameNotStarted();
}
else{
    // Do nothing bruh...
}

// Make buttons unclickable if user game isn't started 
if (playLimitNum.textContent === "Not set"){
    p1Button.classList.add("unclickable");
    p2Button.classList.add("unclickable");
}
else{
    // Hang on bruh..
}


// Add Event Listeners ....{

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

// for resetScores button
resetScoresButton.addEventListener("click", function(){
    resetScores();
    if (numInput.value === ""){
        gameNotStarted();
    }
});


// for hitting Enter key in Number Input field
numInput.addEventListener("keypress", function(e){
    if (e.key === 'Enter'){
        if (Number.isInteger(Number(numInput.value))) {
            hideElement(numInputErrorText);
            takeInput();
        }
        else{
            hinderInputCapture();
           }
    }
    
});

window.onclick = function(e){
    if (e.target !== numInputErrorText){
     hideElement(numInputErrorText);
    }
    else {
     // nothing bruh
    }
}

// ...................................................


// For click in arrow in numInput field
numInputArrow.onclick = function(){
    if (Number.isInteger(Number(numInput.value))) {
        takeInput();
    }
    else{
        hinderInputCapture();
    }
    window.onclick = function(e){
        if (e.target !== numInputErrorText){
            hideElement(numInputErrorText);
        }
        else {
            // nothing bruh
        }
    }
}



// RUN THINGS IMPORTED FROM OTHER FILES
playerModalActions.create_player_input_modals();

console.log(playerModalActions.number_of_players);
console.log(playerModalActions.pName_Array);














// EXPORT ALL USEFUL THINGS
export {
    p1Button,
    p2Button,
};