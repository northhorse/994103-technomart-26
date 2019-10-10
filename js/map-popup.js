var openMap = document.querySelector(".map-link");
var map = document.querySelector(".map-popup");
var close = map.querySelector(".close-button")



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
