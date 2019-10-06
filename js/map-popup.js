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

