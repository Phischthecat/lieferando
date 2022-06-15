let amounts = [];
let names = [];
let prices = [];
let minOrderValue = 9.9;
let deliveryFee = 0;

function renderBasket() {
  let basket = document.getElementById('cartContent');
  if (names.length == 0) {
    clearCart();
    basket.innerHTML = createBasket();
  } else {
    clearCart();
    renderFullBasket();
  }
}

function clearCart() {
  let basket = document.getElementById('cartContent');
  let infos = document.getElementById('infos');
  let totalPrice = document.getElementById('totalPrice');
  basket.innerHTML = '';
  infos.innerHTML = '';
  totalPrice.innerHTML = '';
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
}

function removeFromBasket(i) {
  if (amounts[i] > 1) {
    amounts[i]--;
  } else {
    amounts.splice(i, 1);
    names.splice(i, 1);
    prices.splice(i, 1);
  }
  renderBasket();
  updateBasket();
}

function updateBasket() {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += +prices[i] * +amounts[i];
  }
  let diff = +minOrderValue - +sum;
  let finalSum = +sum + +deliveryFee;
  document.getElementById('subtotal').innerHTML =
    sum.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('total').innerHTML =
    finalSum.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('total2').innerHTML =
    finalSum.toFixed(2).replace('.', ',') + ' €';
  if (diff <= 0) {
    document.getElementById('minOrderValueId').classList.add('d-none');
    document.getElementById('orderButton').classList.add('blue');
  } else {
    document.getElementById('minOrderValueDiff').innerHTML =
      diff.toFixed(2).replace('.', ',') + ' €';
  }
}

function createBasket() {
  return /*html*/ `
  <div class="emptyBasket">
        <img src="./img/icons/einkaufstasche.png" alt="" />
        <h4>Fülle deinen Warenkorb</h4>
        <p>
          Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle
          dein Essen.
        </p>
      </div>
      `;
}

function createFullBasket(i) {
  const amount = amounts[i];
  const name = names[i];
  const price = prices[i];
  const itemPrice = +price * +amount;

  return /*html*/ `
  <div class="basketContent"> 
    <div class="container-basket">       
      <div class="singleAmount">
          <strong>${amount}</strong>
      </div>
      <div class="singleName">
        <strong >${name}</strong> 
      </div>
      <div class="singlePrice">
        ${itemPrice.toFixed(2).replace('.', ',')} €
      </div>     
    </div>
    <div class="editAmount">
      <a href="#" onclick="openNoteBasket('${i}')">Anmerkungen hinzufügen</a>
      <div class="in-decrease">
        <div 
        onclick="removeFromBasket('${i}')">
          <img  src="./img/icons/entfernen.png" alt="">
        </div>
        <div onclick="addToBasket('${name}', '${price}')">
          <img  src="./img/icons/hinzufugen.png" alt="">
        </div>
      </div>
    </div>
    <div class="note-container" id="note-container${i}"></div>
    <div id="editNote${i}" class="editNote d-none">      
        <textarea name="note" id="notes${i}" cols="30" rows="10"></textarea>
        <span role="button" onclick="cancelNoteBasket('${i}')">
          Abbrechen
        </span>
        <span role="button" onclick="addNoteBasket('${i}')">Hinzufügen</span>
      </div>
  </div>`;
}

function createInfos() {
  return /*html*/ `
    <div id="minOrderValueId">
      <div class="minOrderValue" >      
        <p>Benötigter Betrag, um den Mindestbestellwert zu erreichen</p>
        <div id="minOrderValueDiff"></div>      
      </div>
      <div class="minOrderInfo">
        <p>Leider kannst du noch nicht bestellen. Berlins Ushi liefert erst 
            ab einem Mindestbestellwert von 9,90 € (exkl. Lieferkosten).
        </p>
      </div>
    </div>
  `;
}

function createTotalPrice() {
  return /*html*/ `
  <div class="totalPrice">
    <div class="subtotal">
      <span>
      Zwischensumme
    </span>  
    <span id="subtotal"></span>
    </div>
    <div class="deliveryFee">
      <span>Lieferkosten</span>
      <span>Kostenlos</span>
    </div>
    <div class="total">
      <strong>Gesamt</strong>
      <strong id="total"></strong>
    </div>
    <button id="orderButton" class="orderButton" onclick="construction();">Bezahlen (<span id="total2"></span>)</button>
  </div>
  `;
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

function construction() {
  alert('Dieser Bereich ist noch im Aufbau. Hier entsteht noch etwas schönes!');
}
