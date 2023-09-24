const openBtn = document.getElementById("modwin-open")
const open = document.getElementById("modwin")

const openBtnSec = document.getElementById("open-modal")
const openSec = document.getElementById("modalw")
const closeSec = document.getElementById("close__button")

openBtn.addEventListener("click", function() {
  open.classList.toggle("open")
})

openBtnSec.addEventListener("click", function(event) {
  openSec.classList.add("open");
  document.querySelector(".overlay").classList.add("open");
  document.body.classList.add("modal-open"); 
  event.preventDefault();
})

closeSec.addEventListener("click", function(event) {
  event.preventDefault();
  openSec.classList.remove("open");
  document.querySelector(".overlay").classList.remove("open");
  document.body.classList.remove("modal-open"); 
  
})
