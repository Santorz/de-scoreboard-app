var document_body = document.querySelector("body");


function create_player_input_modals(){

    //Function to create player one input modal, display, manipulate and remove it
    function create_player1_input_modal(){

        // Create modal background
        let player1_modal = document.createElement('div');
        player1_modal.className = 'player-name-modal-background';
        player1_modal.id = 'player1-modal-background';
    
        // Create modal box
        let player1_modal_box = document.createElement('div');
        player1_modal_box.className = 'player-modal-box';

        // Create Elements inside the box
        let enter_player_name_text = document.createElement('h5');
        enter_player_name_text.className = 'enter-player-name-text';
        enter_player_name_text.textContent = 'Enter Player Name: '
        let player_modal_header = document.createElement('h2');
        player_modal_header.className = "player-modal-box-header";
        player_modal_header.textContent = 'Player 1';

        // Create div for player input field
        let player1_name_input_field_div = document.createElement('div');
        player1_name_input_field_div.className = "player-name-input-field-div"

        // Create input field
        let player1_name_input_field = document.createElement('input');
        player1_name_input_field.type = 'text';
        player1_name_input_field.placeholder = 'Enter any username here..'
        player1_name_input_field.minLength = 5;
        player1_name_input_field.maxLength = 7;
        player1_name_input_field.spellcheck = false;
        player1_name_input_field.className = 'player-name-input-field'
        player1_name_input_field.id = 'player1-name-input-field'
        player1_name_input_field_div.appendChild(player1_name_input_field);

        // Create skip button
        let player_modal_skip_button = document.createElement('button');
        player_modal_skip_button.textContent = 'Skip';
        player_modal_skip_button.className = 'player-modal-button player-modal-skip-button';
        player_modal_skip_button.id = 'player1-modal-skip-button';
        player1_name_input_field_div.appendChild(player_modal_skip_button);

        // Create next button
        let player_modal_next_button = document.createElement('button');
        player_modal_next_button.textContent = 'Next';
        player_modal_next_button.className = 'player-modal-button player-modal-next-button';
        player_modal_next_button.id = 'player1-modal-next-button';
        player1_name_input_field_div.appendChild(player_modal_next_button);

        // Append elements to modal box
        player1_modal_box.appendChild(enter_player_name_text);
        player1_modal_box.appendChild( player_modal_header);
        player1_modal_box.appendChild(player1_name_input_field_div);

        // Append modal box to modal background
        player1_modal.appendChild(player1_modal_box);

        //Append modal background to the body
        document_body.appendChild(player1_modal);

        // Target 'SKIP' button and perform action on click

        //player_modal_skip_button.onclick = function(){
        //}

        // Target 'NEXT' button and perform action on click


        // Control, manipulate and extract input from modal box
    
    
        // Slide out input modal and show next one if it's not the final one


    }

    
    

    


    create_player1_input_modal();
}




































// EXPORT ALL USEFUL FUNCTIONSs
export {
    create_player_input_modals,
};