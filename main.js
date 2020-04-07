// Get the modal
const modal = document.getElementById("myModal");
const timedModal = document.getElementById("timed-modal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modals
const span = document.getElementsByClassName("close")[0];
const timedSpan = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Close Timed Modal
timedSpan.onclick = function() {
  timedModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    timedModal.style.display = "none";
  }
}

// Uses the onload document event to call the native setTimeout function 
  // * which calls a function to set the display of the timed-modal to "block" 
  // * after 4 seconds.
document.onload(setTimeout(() => {timedModal.style.display = "block";}, 4000))