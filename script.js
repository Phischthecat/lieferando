let names = [];
let prices = [];

function addToBasket(name, prices) {
  names.push(name);
  prices.push(price);
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

function render() {
  let food = document.getElementById('food');
  food.innerHTML = '';

  for (let i = 0; i < dishes.length; i++) {
    const subheader = dishes[i];
    food.innerHTML += /*html*/ `
    <div class="container-dishes">
    <div class="header-sections">
      <h2 class="subheadline">${subheader['type']}</h2>
      <span class="extraInfo">${subheader['extraInfo']}</span>
    </div>
    <div id="dishes-sections${i}"></div>    
    </div>`;

    let dishContent = document.getElementById(`dishes-sections${i}`);

    for (let j = 0; j < subheader['names'].length; j++) {
      const names = subheader['names'][j];
      const infos = subheader['infos'][j];
      const prices = subheader['prices'][j];

      dishContent.innerHTML += /*html*/ `
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
  }
}

function generateSubheader(i) {
  return /*html*/ `
  <div class="header-sections">
    <h2 class="subheadline">${subheader['type']}</h2>
    <span class="extraInfo">${subheader['extraInfo']}</span>
  </div>
  <div id="dishes-sections${i}"></div>
  <!-- <button onclick="addToBasket()">+</button> -->
  `;
}

function generateFoodBox(j) {
  return /*html*/ `
<div class="dish-box">
  <h3>${names}</h3>
</div>
`;
}
