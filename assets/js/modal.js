//menu modal
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const btn = document.querySelector("#cabecalho__menu--botao");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = () => {
  console.log('click')
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
  // btn.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

//menu modal