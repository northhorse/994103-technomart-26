
var buyItem = document.querySelectorAll(".buy");
var modalMessage = document.querySelector(".item-added-popup");
var closebtn = modalMessage.querySelector(".close-button");

console.log(buyItem);

buyItem.addEventListener("click", function(evt){
  evt.preventDefault();
  console.log("zarabotalo");


  // modalMessage.classList.add("modal-show");

});




// closebtn.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   modalMessage.classList.remove("modal-show");
// });
