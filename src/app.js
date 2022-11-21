// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

var price = 160;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  // renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    // let x=price;
    // price += 80;
    // console.log(price)
    patty.style.display = "inherit";
  } else {
    // price -= 80;
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    // price+=(10-80);
    cheese.style.display = "inherit";
  } else {
    // price-=(10+80);
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.getElementById("tomato");
  if (state.Tomatoes) {
    // price+=(20-80);
    tomato.style.display = "inherit";
  } else {
    // price-=(20+80);
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById("onion");
  if (state.Onions) {
    // price+=(20-80);
    onion.style.display = "inherit";
  } else {
    // price-=(20+80);
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  if (state.Lettuce) {
    // price+=(20-80);
    lettuce.style.display = "inherit";
  } else {
    // price-=(20+80);
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  price -= 80;
  state.Patty = !state.Patty;
  renderAll();
  let removepatty = document.getElementById("btn-patty");
  removepatty.classList.toggle("active");
  // document.getElementById("element").style.display = "none".toggle;
  document.getElementById("lpatty").classList.toggle("none");
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  price -= 10;
  state.Cheese = !state.Cheese;
  renderAll();
  let removecheese = document.getElementById("btn-cheese");
  removecheese.classList.toggle("active");
  document.getElementById("lcheese").classList.toggle("none");
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  price -= 20;
  state.Tomatoes = !state.Tomatoes;
  renderAll();
  let removetomato = document.getElementById("btn-tomato");
  removetomato.classList.toggle("active");
  document.getElementById("ltomato").classList.toggle("none");
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  price -= 20;
  state.Onions = !state.Onions;
  renderAll();
  let removeonion = document.getElementById("btn-onion");
  removeonion.classList.toggle("active");
  document.getElementById("lonion").classList.toggle("none");
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  price -= 20;
  state.Lettuce = !state.Lettuce;
  renderAll();
  let removelettuce = document.getElementById("btn-lettuce");
  removelettuce.classList.toggle("active");
  document.getElementById("llettuce").classList.toggle("none");
};

// //Challenge 1 - Add/Remove the class active to the buttons based on state

//Challenge 2 - Render only the items selected in the ingredients board based on the state

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  document.getElementById("price-details").innerHTML = "INR " + price;
}
renderPrice();
