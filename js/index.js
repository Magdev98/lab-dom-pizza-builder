// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((pepIngredient) => {
    if (state.pepperoni) {
      pepIngredient.style.visibility = 'visible';
    } else {
      pepIngredient.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
const whiteSauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    whiteSauce.classList.add('sauce-white')
  } else {
    whiteSauce.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const glutenCrust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    glutenCrust.classList.add('crust-gluten-free')
  } else {
    glutenCrust.classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">` - class="panel controls"
  /* try to find a way to select all btn in one declaration:
  const activeButton = document.querySelectorAll('.btn:nth-child()')
  activeButton.forEach((element) => {
    if (state) {
      element.classList.add('active')
    } else {
      element.classList.remove('active')
    }
  }) */
  if(state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active')
  } else {document.querySelector('.btn-pepperoni').classList.remove('active')}

  if(state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active')
  } else {document.querySelector('.btn-mushrooms').classList.remove('active')}

  if(state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active')
  } else {document.querySelector('.btn-green-peppers').classList.remove('active')}

  if(state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active')
  } else {document.querySelector('.btn-sauce').classList.remove('active')}

  if(state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active')
  } else {document.querySelector('.btn-crust').classList.remove('active')}
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const liPep = document.querySelector('.panel.price > ul > li:nth-child(1)')
  const liMushroom = document.querySelector('.panel.price > ul > li:nth-child(2)')
  const liGreenPepper = document.querySelector('.panel.price > ul > li:nth-child(3)')
  const liSauce = document.querySelector('.panel.price > ul > li:nth-child(4)')
  const liCrust = document.querySelector('.panel.price > ul > li:nth-child(5)')

  let totalPrice = basePrice
  const displayPrice = document.querySelector('strong')

  if(state.pepperoni) {
    liPep.style.display = 'block';
    totalPrice += ingredients.pepperoni.price;
  } else {
    liPep.style.display = 'none';
  }

  if(state.mushrooms) {
    liMushroom .style.display = 'block';
    totalPrice += ingredients.mushrooms.price;
  } else {
    liMushroom .style.display = 'none';
  }

  if(state.greenPeppers) {
    liGreenPepper.style.display = 'block';
    totalPrice += ingredients.greenPeppers.price;
  } else {
    liGreenPepper.style.display = 'none';
  }

  if(state.whiteSauce) {
    liSauce.style.display = 'block';
    totalPrice += ingredients.whiteSauce.price;
  } else {
    liSauce.style.display = 'none';
  }

  if(state.glutenFreeCrust) {
    liCrust.style.display = 'block';
    totalPrice += ingredients.glutenFreeCrust.price;
  } else {
    liCrust.style.display = 'none';
  }

  displayPrice.textContent = `$${totalPrice}`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});