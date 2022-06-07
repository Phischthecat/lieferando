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
