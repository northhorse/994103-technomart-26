
var popupBtn = document.querySelector(".write-us-link");
var popupModal = document.querySelector(".write-us-popup");
var submitBtn = popupModal.querySelector(".submit-button");
var closeModal = popupModal.querySelector(".close-button");
var login = popupModal.querySelector("[name=for-name]");
var mail = popupModal.querySelector("[name=e-mail]");
var letter = popupModal.querySelector("[name=letter]");
var form = popupModal.querySelector(".write-us-form");

popupBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  popupModal.classList.add("modal-show");

});

console.log(login.value);


submitBtn.addEventListener("click", function(evt){
  if(!login.value || !mail.value || !letter.value) {
    evt.preventDefault();

    popupModal.classList.add("modal-error");

  } else {
    console.log("otpravka");
  }


})


closeModal.addEventListener("click", function(evt){
  evt.preventDefault();
  popupModal.classList.remove("modal-show");
  popupModal.classList.remove("modal-error")
});
