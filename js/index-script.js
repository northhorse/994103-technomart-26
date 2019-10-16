
// write-us
var popupBtn = document.querySelector(".write-us-link");
var popupModal = document.querySelector(".write-us-popup");

var closeModal = popupModal.querySelector(".close-button");
var login = popupModal.querySelector("[name=for-name]");
var mail = popupModal.querySelector("[name=e-mail]");
var letter = popupModal.querySelector("[name=letter]");
var form = popupModal.querySelector(".write-us-form");
var submitBtn = form.querySelector(".submit-button");

// map
var openMap = document.querySelector(".map-link");
var map = document.querySelector(".map-popup");
var close = map.querySelector(".close-button")




// write-us

popupBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  popupModal.classList.add("modal-show");
  login.focus();

});

closeModal.addEventListener("click", function(evt){
  evt.preventDefault();
  popupModal.classList.remove("modal-show");
  popupModal.classList.remove("modal-error")
});

form.addEventListener("submit", function(evt){
  if(!login.value || !mail.value || !letter.value) {
    evt.preventDefault();
    popupModal.classList.remove("modal-error");
    popupModal.offsetWidth = popupModal.offsetWidth;
    popupModal.classList.add("modal-error");

  }

})


window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    if(popupModal.classList.contains("modal-show")){
      evt.preventDefault();
      popupModal.classList.remove("modal-show");
      popupModal.classList.remove("modal-error")
    }
  }
})

// map
openMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("modal-show");

})


close.addEventListener("click", function(evt){
  evt.preventDefault();
  map.classList.remove("modal-show");

})

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27){
    if(map.classList.contains("modal-show")){
      evt.preventDefault();
      map.classList.remove("modal-show");
      map.classList.remove("modal-error")
    }
  }
})
