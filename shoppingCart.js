let amounts = [];
let names = [];
let prices = [];
let minOrderValue = 9.9;
let deliveryFee = 0;

function renderBasket() {
  let basket = document.getElementById('cartContent');
  if (names.length == 0) {
    clearCart();
    basket.innerHTML = createEmptyBasket();
  } else {
    clearCart();
    renderFullBasket();
  }
}

function renderFullBasket() {
  let basket = document.getElementById('cartContent');
  let infos = document.getElementById('infos');
  let totalPrice = document.getElementById('totalPrice');
  for (let i = 0; i < names.length; i++) {
    basket.innerHTML += createFullBasket(i);
  }
  infos.innerHTML = createInfos();
  totalPrice.innerHTML = createTotalPrice();
}

function addToBasket(name, price) {
  let index = names.indexOf(name);
  if (index == -1) {
    amounts.push(1);
    names.push(name);
    prices.push(price);
  } else {
    amounts[index]++;
  }
  renderBasket();
  updateBasket();
  addTotalAmount();
}

function removeFromBasket(i) {
  if (amounts[i] > 1) {
    amounts[i]--;
  } else {
    amounts.splice(i, 1);
    names.splice(i, 1);
    prices.splice(i, 1);
    document.getElementById('amountCart').innerHTML = '0';
    document.getElementById('total3').innerHTML = '0,00 €';
  }
  renderBasket();
  updateBasket();
  addTotalAmount();
}

function updateBasket() {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += +prices[i] * +amounts[i];
  }
  let diff = +minOrderValue - +sum;
  let finalSum = +sum + +deliveryFee;
  updateInnerHTML('subtotal', sum);
  updateInnerHTML('total', finalSum);
  updateInnerHTML('total2', finalSum);
  updateInnerHTML('total3', finalSum);

  if (diff <= 0) {
    classListAdd('minOrderValueId', 'd-none');
    classListAdd('orderButton', 'blue');
  } else {
    updateInnerHTML('minOrderValueDiff', diff);
  }
}

function openBasket() {
  document.body.style.setProperty('overflow', 'hidden');
  document.getElementById('cartContent').style.setProperty('overflow', 'auto');
  document
    .getElementById('shoppingCart')
    .style.setProperty('display', 'inline-flex');
  document.getElementById('navbar').style.setProperty('z-index', '0');
  document.getElementById('buttons').style.setProperty('display', 'none');
}

function closeBasket() {
  document.getElementById('shoppingCart').style.setProperty('display', 'none');
  document.body.style.setProperty('overflow', 'auto');
  document
    .getElementById('buttons')
    .style.setProperty('display', 'inline-flex');
}

function openNoteBasket(i) {
  document.getElementById(`editNote${i}`).classList.remove('d-none');
}

function cancelNoteBasket(i) {
  document.getElementById(`editNote${i}`).classList.add('d-none');
}

function addNoteBasket(i) {
  let note = document.getElementById(`notes${i}`);
  let noteContainer = document.getElementById(`note-container${i}`);
  noteContainer.innerHTML = note.value;
  cancelNoteBasket(i);
}

function addTotalAmount() {
  let ergebnis = 0;
  for (let i = 0; i < amounts.length; i++) {
    ergebnis += amounts[i];
  }
  document.getElementById('amountCart').innerHTML = ergebnis;
}

function clearCart() {
  document.getElementById('cartContent').innerHTML = '';
  document.getElementById('infos').innerHTML = '';
  document.getElementById('totalPrice').innerHTML = '';
}

function updateInnerHTML(id, x) {
  document.getElementById(id).innerHTML = x.toFixed(2).replace('.', ',') + ' €';
}

function classListAdd(id, className) {
  document.getElementById(id).classList.add(className);
}

function classListRemove(id, className) {
  document.getElementById(id).classList.remove(className);
}

function construction() {
  alert('Dieser Bereich ist noch im Aufbau. Hier entsteht noch etwas schönes!');
}
