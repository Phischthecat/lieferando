function createContent() {
  let food = document.getElementById('food');
  food.innerHTML = '';

  for (let i = 0; i < dishes.length; i++) {
    food.innerHTML += createSubheader(i);
    createFoodBox(i);
  }
}

function createSubheader(i) {
  const subheader = dishes[i];
  if (i == 0) {
    return /*html*/ `
      <section id="${subheader['type']}" class="container-dishes">      
        <div class="header-sections">
          <h2 class="subheadline">${subheader['type']}</h2>
          <span class="extraInfo">${subheader['extraInfo']}</span>
        </div>
        <div id="dishes-sections${i}"></div>    
      </section>`;
  } else {
    return /*html*/ `
      <section id="${subheader['type']}" class="container-dishes">      
        <img class="header-img" src="./img/${i}.jpg">
        <div class="header-sections">
          <h2 class="subheadline">${subheader['type']}</h2>
          <span class="extraInfo">${subheader['extraInfo']}</span>
        </div>
        <div id="dishes-sections${i}"></div>    
      </section>`;
  }
}

function createFoodBox(i) {
  const subheader = dishes[i];
  let dishContent = document.getElementById(`dishes-sections${i}`);
  for (let j = 0; j < subheader['names'].length; j++) {
    const names = subheader['names'][j];
    const infos = subheader['infos'][j];
    const prices = subheader['prices'][j];

    dishContent.innerHTML += /*html*/ `
      <div class="dish-box" onclick="addToBasket('${names}','${prices}')">
        <div>
          <h3 class="dish-name">${names}</h3>
          <p class="dish-info">${infos}</p>
        </div>
          <p class="dish-price">${prices.replace('.', ',')}0 €</p>
          <div class="plusSign">
          <a href="#"><img src="./img/icons/hinzufugen.png" alt=""></a>
        </div>
      </div>
        `;
  }
}

function createFoodNavbar() {
  let foodnavbar = document.getElementById('food-navbar');
  foodnavbar.innerHTML = '';

  for (let i = 0; i < dishes.length; i++) {
    const area = dishes[i];
    foodnavbar.innerHTML += /*html*/ `            
                <li><a href="#${area['type']}">${area['type']}</a></li>            
                `;
  }
}

function createEmptyBasket() {
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
