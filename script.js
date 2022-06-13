function render() {
  generateContent();
  renderBasket();
  createFoodNavbar();
}

function generateContent() {
  let food = document.getElementById('food');
  food.innerHTML = '';

  for (let i = 0; i < dishes.length; i++) {
    const subheader = dishes[i];
    food.innerHTML += generateSubheader(i);

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
        <a href="#"><img src="./img/icons/plus_blue.png" alt=""></a>  
        </div>
      </div>
      `;
    }
  }
}

function generateSubheader(i) {
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

function generateFoodBox(j) {
  const names = subheader['names'][j];
  const infos = subheader['infos'][j];
  const prices = subheader['prices'][j];

  return /*html*/ `
      <div class="dish-box">
      <div>
        <h3 class="dish-name">${names}</h3>
        <p class="dish-info">${infos}</p>
      </div>  
        <p class="dish-price">${prices.replace('.', ',')}0 €</p>
        <div class="plusSign" onclick="addToBasket()">
        <a href="#"><img src="./img/icons/plus_blue.png" alt=""></a>  
        </div>
      </div>
      `;
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

let amounts = [];
let names = [];
let prices = [];

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
}

function updateBasket() {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }

  let finalSum = sum + 1;
  document.getElementById('sum').innerHTML = sum;
  document.getElementById('finalSum').innerHTML = finalSum;
}

function renderBasket() {
  let basket = document.getElementById('cartContent');
  if (names.length == 0) {
    basket.innerHTML = '';
    basket.innerHTML += /*html*/ `
    <div>
          <img src="./img/icons/einkaufstasche.png" alt="" />
          <h4>Fülle deinen Warenkorb</h4>
          <p>
            Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle
            dein Essen.
          </p>
        </div>
        `;
  } else {
    basket.innerHTML = '';
    renderFullBasket();
  }
}

function deleteBasket() {
  amounts = [];
  names = [];
  prices = [];
  renderBasket();
}

function renderFullBasket() {
  let basket = document.getElementById('cartContent');
  for (let i = 0; i < names.length; i++) {
    const amount = amounts[i];
    const name = names[i];
    const price = prices[i];
    basket.innerHTML += /*html*/ `
        <div class="fullCart">
          <div class="basketContent">
            ${amount}x ${name} = ${price}
            <button onclick="deleteBasket()">Löschen</button>
          </div>
        </div>
        `;
  }
}
