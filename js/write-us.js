
var popupBtn = document.querySelector(".write-us-link");
var popupModal = document.querySelector(".write-us-popup");

var closeModal = popupModal.querySelector(".close-button");
var login = popupModal.querySelector("[name=for-name]");
var mail = popupModal.querySelector("[name=e-mail]");
var letter = popupModal.querySelector("[name=letter]");
var form = popupModal.querySelector(".write-us-form");
var submitBtn = form.querySelector(".submit-button");



popupBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  popupModal.classList.add("modal-show");
  login.focus();

});



submitBtn.addEventListener("click", function(evt){


  if(!login.value || !mail.value || !letter.value) {

    evt.preventDefault();
    popupModal.classList.add("modal-error");

  }

})



closeModal.addEventListener("click", function(evt){
  evt.preventDefault();
  popupModal.classList.remove("modal-show");
  popupModal.classList.remove("modal-error")
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    if(popupModal.classList.contains("modal-show")){
      evt.preventDefault();
      popupModal.classList.remove("modal-show");
      popupModal.classList.remove("modal-error")
    }
  }
})
