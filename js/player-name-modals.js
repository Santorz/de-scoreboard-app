// IMPORTING USEFUL THINGS

import * as playerElements from '../script.js';


var document_body = document.querySelector("body");
var number_of_players = 2;
// Main array to hold the extract of all the player names
var pName_Array = [];



function create_player_input_modals(){

    // Create modal background
    var all_players_modal_background = document.createElement('div');
    all_players_modal_background.className = 'player-name-modal-background';
    
    
    // Create array to hold all modal box element variable names
    var modal_box_var_gen_array = [];
    
    // Create array to hold variable names for elements that would..
    // ... be in the modal box
    var enter_player_name_text_var_gen_array = [];
    
    // Create array to hold variable names for headers of...
    // ... elements that would be in the modal box
    var modal_box_elements_headers_var_gen_array = [];
    
    // Array to hold the text "Enter player name"
    enter_player_name_text_var_gen_array = []
    
    // Create array to hold input field divs variable names
    var input_field_divs_var_gen_array = [];
    
    // Create array to hold input field elements variable names
    var input_field_element_var_gen_array = [];
    
    // Crreate array to hold modal skip buttons variable names
    var modal_skip_button_var_gen_array = [];
    
    // Crreate array to hold modal next buttons variable names
    var modal_next_button_var_gen_array = [];
    



    
    // Create modal box
    for (let i = 1; i <= number_of_players; i++){
        let gen_value = 'player' + i + '_modal_box';
        modal_box_var_gen_array.push(gen_value);
    
        modal_box_var_gen_array[i] = document.createElement('div');
        modal_box_var_gen_array[i].className = 'player-modal-box';
        modal_box_var_gen_array[i].id = 'player' + i + '-modal-box';
    }
    removeFirstUnwantedArrayElement(modal_box_var_gen_array);
    
    // Create Elements inside the box
    for (let i = 1; i <= number_of_players; i++){
        let gen_value = 'enter_player' + i + '_name_text';
        enter_player_name_text_var_gen_array.push(gen_value);
    
        enter_player_name_text_var_gen_array[i] = document.createElement('h5');
        enter_player_name_text_var_gen_array[i].className = 'enter-player-name-text';
        enter_player_name_text_var_gen_array[i].textContent = 'Enter Player Name: '
    }
    removeFirstUnwantedArrayElement(enter_player_name_text_var_gen_array);
    
    // Create Modal box Headers
    for (let i = 1; i <= number_of_players; i++){
        let gen_value = 'player' + i + '_modal_header';
        modal_box_elements_headers_var_gen_array.push(gen_value);
    
        modal_box_elements_headers_var_gen_array[i] = document.createElement('h2');
        modal_box_elements_headers_var_gen_array[i].className = "player-modal-box-header";
        modal_box_elements_headers_var_gen_array[i].textContent = 'Player ' + i;
    }
    removeFirstUnwantedArrayElement(modal_box_elements_headers_var_gen_array);
    
    // Create Input field divs
    for (let i = 1; i <= number_of_players; i++){
        let gen_value = 'player' + i + '_name_input_field_div';
        input_field_divs_var_gen_array.push(gen_value);
    
        input_field_divs_var_gen_array[i] = document.createElement('div');
        input_field_divs_var_gen_array[i].className = "player-name-input-field-div";
    }
    removeFirstUnwantedArrayElement(input_field_divs_var_gen_array);
    
    // Create input field element
    for (let i = 1; i <= number_of_players; i++){
        let gen_value = 'player' + i + '_name_input_field_element';
        input_field_element_var_gen_array.push(gen_value);
    
        input_field_element_var_gen_array[i] = document.createElement('input');
        input_field_element_var_gen_array[i].type = 'text';
        input_field_element_var_gen_array[i].placeholder = 'Enter any username here..';
        input_field_element_var_gen_array[i].minLength = 5;
        input_field_element_var_gen_array[i].maxLength = 7;
        input_field_element_var_gen_array[i].spellcheck = false;
        input_field_element_var_gen_array[i].className = 'player-name-input-field';
        input_field_element_var_gen_array[i].id = 'player' + i + '-name-input-field';
    
    }
    removeFirstUnwantedArrayElement(input_field_element_var_gen_array);
    
    // Create skip button
    for (let i = 1; i <= number_of_players; i++){
        let gen_value = 'player' + i + '_modal_skip_button';
        modal_skip_button_var_gen_array.push(gen_value);
    
        modal_skip_button_var_gen_array[i] = document.createElement('button');
        modal_skip_button_var_gen_array[i].textContent = 'Skip';
        modal_skip_button_var_gen_array[i].className = 'player-modal-button player-modal-skip-button';
        modal_skip_button_var_gen_array[i].id = 'player' + '-modal-skip-button';
    }
    removeFirstUnwantedArrayElement(modal_skip_button_var_gen_array);
    
    // Create next button
    for (let i = 1; i <= number_of_players; i++){
        let gen_value = 'player' + i + '_modal_next_button';
        modal_next_button_var_gen_array.push(gen_value);
    
        modal_next_button_var_gen_array[i] = document.createElement('button');
        modal_next_button_var_gen_array[i].textContent = 'Next';
        modal_next_button_var_gen_array[i].className = 'player-modal-button player-modal-next-button';
        modal_next_button_var_gen_array[i].id = 'player' + i +'-modal-next-button';
    }
    removeFirstUnwantedArrayElement(modal_next_button_var_gen_array);
    
    
    
        
    
    
    // After Everything, Append Elements (Don't leave undone !)
    // You need to change the ones in comments to the new format
    
    for(let i = 0; i<number_of_players; i++){
    
        // Append input field (the element) and co. to input field div
        input_field_divs_var_gen_array[i].appendChild(input_field_element_var_gen_array[i]);
        input_field_divs_var_gen_array[i].appendChild(modal_skip_button_var_gen_array[i]);
        input_field_divs_var_gen_array[i].appendChild(modal_next_button_var_gen_array[i]);

        //Append elements to modal box
        modal_box_var_gen_array[i].appendChild(modal_box_elements_headers_var_gen_array[i]);
        modal_box_var_gen_array[i].appendChild(enter_player_name_text_var_gen_array[i]);
        modal_box_var_gen_array[i].appendChild(input_field_divs_var_gen_array[i]);
    
        // Append modal box to modal background
        all_players_modal_background.appendChild(modal_box_var_gen_array[i]);
        
        //Append modal background to the body
        document_body.appendChild(all_players_modal_background);
    
    }

    for(let i = 0; i<number_of_players; i++){
        let j = i + 1;
        
        if(modal_box_var_gen_array.includes(modal_box_var_gen_array[j])){
            modal_box_var_gen_array[j].style.display = 'none';

            // Target 'SKIP' button and perform action on click
            modal_skip_button_var_gen_array[i].onclick = function(){            
                // Give default username
                pName_Array.push('Player ' + j);
                alert(pName_Array[i]);
                // Slide modal_box to the left
                slide_player_input_modal_box_left(modal_box_var_gen_array[i]);;
            
                // Slide-in next player input modal
                slide_in_next_text_input_modal(modal_box_var_gen_array[j], "#player2-modal-box-sliding-in");
            
                // REMOVE MODAL BACKGROUND IF THIS MODAL BOX IS THE...
                // ... LAST ONE
            }
        
            // Target 'NEXT' button and perform action on click
            modal_next_button_var_gen_array[i].onclick = function(){            
                // Give username entered from input box
                pName_Array.push(input_field_element_var_gen_array[i].value);
                alert(pName_Array[i]);
                // Slide modal_box to the left
                slide_player_input_modal_box_left(modal_box_var_gen_array[i]);;
            
                // Slide-in next player input modal
                slide_in_next_text_input_modal(modal_box_var_gen_array[j], "#player2-modal-box-sliding-in");
        
                // REMOVE MODAL BACKGROUND IF THIS MODAL BOX IS THE...
                // ... LAST ONE

        
            }

            // Target 'SKIP' button on last modal box...
            // ... and perform action
            modal_skip_button_var_gen_array[modal_skip_button_var_gen_array.length-1].onclick = function(){
            
                // Give default username
                pName_Array.push('Player ' + (j+1));
                alert('Player ' + (j+1));

                // Remove modal background
                all_players_modal_background.style.display = 'none';
            
            }

            // Target 'NEXT' button on last modal box...
            // ... and perform action
            modal_next_button_var_gen_array[modal_next_button_var_gen_array.length-1].onclick = function(){
                pName_Array.push(input_field_element_var_gen_array[input_field_element_var_gen_array.length-1].value);
                alert(input_field_element_var_gen_array[input_field_element_var_gen_array.length-1].value);
        
                // Remove modal background
                all_players_modal_background.style.display = 'none';

            }

        }
    
    }

}







// GLOBAL FUNCTIONS



function slide_in_next_text_input_modal(next_input_modal){
    next_input_modal.style.display = 'block';
    next_input_modal.classList.add('.player-n-modal-box-sliding-in');
}


function slide_player_input_modal_box_left(given_modal_box){

    for(let i = 0; i<number_of_players; i++){
        given_modal_box.classList.add('.player-modal-box-moved-left');
        setTimeout(function(){
            given_modal_box.style.display = 'none';
        },100)
    }

}


function removeFirstUnwantedArrayElement(array){
    array.shift();
}














// EXPORT ALL USEFUL FUNCTIONSs
export {
    create_player_input_modals,
    pName_Array,
    number_of_players,
};