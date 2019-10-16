// item-added

var buyItems = document.querySelectorAll(".buy");
var modalMessage = document.querySelector(".item-added-popup");
var closebtn = modalMessage.querySelector(".close-button");


// item-added
buyItems.forEach(function(item){
  item.addEventListener("click", function(evt){
    evt.preventDefault();
    modalMessage.classList.add("modal-show");
  });
})



closebtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMessage.classList.remove("modal-show");

});


window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    if(modalMessage.classList.contains("modal-show")){
      evt.preventDefault();
      modalMessage.classList.remove("modal-show");
      modalMessage.classList.remove("modal-error")
    }
  }
})
