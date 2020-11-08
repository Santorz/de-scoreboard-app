var document_body = document.querySelector("body");


function create_player1_modal(){
    // Create modal background
    let player1_modal = document.createElement('div');
    player1_modal.className = 'player-name-modal-background';
    player1_modal.id = 'player1-modal-background';
    
    // Create modal box
    let player1_modal_box = document.createElement('div');
    player1_modal_box.className = 'player-modal-box';

    // Create Elements inside the box
    let close_button_player_modal = document.createElement('span');
    close_button_player_modal.className = 'modal-close-button fa fa-close'
    let player_modal_header = document.createElement('h2');
    player_modal_header.className = "player-modal-box-header";
    player_modal_header.textContent = 'Player 1';

    // Create div for player input field
    let player1_name_input_field_div = document.createElement('div');
    player1_name_input_field_div.className = "player-name-input-field-div"

    // Create input field
    let player1_name_input_field = document.createElement('input');
    player1_name_input_field.type = 'text';
    player1_name_input_field.minLength = 5;
    player1_name_input_field.maxLength = 7;
    player1_name_input_field.className = 'player-name-input-field'
    player1_name_input_field.id = 'player1-name-input-field'
    player1_name_input_field_div.appendChild(player1_name_input_field);

    // Append elements to modal box
    player1_modal_box.appendChild(close_button_player_modal);
    player1_modal_box.appendChild( player_modal_header);
    player1_modal_box.appendChild(player1_name_input_field_div);

    // Append modal box to modal background
    player1_modal.appendChild(player1_modal_box);

    //Append modal background to the body
    document_body.appendChild(player1_modal);

    // Control, manipulate and extract input from modal box
    

    
}


































// EXPORT ALL USEFUL FUNCTIONSs
export {
    create_player1_modal,
};