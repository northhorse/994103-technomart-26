
var buyItems = document.querySelectorAll(".buy");
var modalMessage = document.querySelector(".item-added-popup");
var closebtn = modalMessage.querySelector(".close-button");





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




