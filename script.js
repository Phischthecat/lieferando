function render() {
  createContent();
  createFoodNavbar();
  renderBasket();
}

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

// function changeimg() {
//   var img = document.getElementById('language').src;
//   if (img.indexOf('germany.png') != -1) {
//     document.getElementById('language').src = './img/gb1.png';

//   } else {
//     document.getElementById('language').src = './img/germany.png';
//   }
// }

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
