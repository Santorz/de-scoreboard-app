var document_body = document.querySelector("body");
var app_container = document.querySelector('#app-body')

// Select all available modals
var resources_modal = document.getElementById('Resources-Modal');
var about_modal = document.getElementById('About-Modal');
var buy_me_coffee_modal = document.getElementById('Buy-Me-Coffee-Modal');

//Select links
var resources_link = document.querySelectorAll('.resources-link')
var about_link = document.querySelectorAll('.about-link')
var buy_me_coffee_link = document.querySelectorAll('.buy-me-coffee-link')

// Selecting close_button
var close_button = document.querySelectorAll('.modal-close-button')

// listen for clicks on each of the links...

// for Resources link
openAndCloseModalAnyhow(resources_link,resources_modal);

// for About link
openAndCloseModalAnyhow(about_link,about_modal);

// for Buy me Coffee link
openandSecurelyCloseModal(buy_me_coffee_link, buy_me_coffee_modal);

// ----------------------------------------
//          ***** FUNCTIONS ******
// ----------------------------------------

// The generic function to open and close modals
// Even if you click anywhere out of it
function openAndCloseModalAnyhow(specific_link, specific_modal){
  for (i = 0; i < specific_link.length; i++){

    specific_link[i].onclick = function(){
      specific_modal.className = "is-hidden";
      setTimeout(function() {
        app_container.className = "is-blurred";
        specific_modal.className = "Modal";
      }, 70);
      app_container.parentElement.className = "ModalOpen";

      for (i = 0; i < close_button.length; i++){
        close_button[i].onclick = function(){
          hideModal(specific_modal);
        }
      }

      document.onclick = function(event){
        if (event.target === specific_modal){
          hideModal(specific_modal)
        }
      }
    }
  }
}

// Function to hide modal
function hideModal(modal){
  modal.className = "Modal is-hidden";
  app_container.className = "";
}

// Function to close modal only with close button
function openandSecurelyCloseModal(specific_link, specific_modal){
  for (i = 0; i < specific_link.length; i++){
    specific_link[i].onclick = function(){
        specific_modal.className = "is-hidden";
        setTimeout(function() {
          app_container.className = "is-blurred";
          specific_modal.className = "Modal";
        }, 70);
        app_container.parentElement.className = "ModalOpen";

        for (i = 0; i < close_button.length; i++){
          close_button[i].onclick = function(){
            hideModal(specific_modal);
        }
      }
    }
  }
}