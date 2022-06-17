function render() {
  createContent();
  createFoodNavbar();
  renderBasket();
  addTotalAmount();
  hideBasket();
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // blendet den top-up Button aus
  let mybutton = document.getElementById('myBtn');
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.classList.remove('d-none');
  } else {
    mybutton.classList.add('d-none');
  }
}

function topFunction() {
  //scrollt wieder ganz nach oben
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
