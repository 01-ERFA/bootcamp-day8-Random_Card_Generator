/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = card_random();

// la funcion para cambiar de forma aleatoria la carta
function card_random() {
  //write your code here

  // obteniendo los elementos

  let top_icon = document.getElementById("top_icon");
  let center_num = document.getElementById("center_num");
  let down_icon = document.getElementById("down_icon");

  let icons = ["♦", "♥", "♠", "♣"];
  let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  function random_icon() {
    // obteniendo un numero random del array para conseguir.
    let random_1 = Math.floor(Math.random(icons.length - 1) * icons.length);
    let result_icon = icons[random_1];

    // colocando el salido en el html
    top_icon.innerHTML = result_icon;
    down_icon.innerHTML = result_icon;
  }

  function random_num() {
    let random_2 = Math.floor(Math.random(nums.length - 1) * nums.length);
    let result_num = nums[random_2];

    center_num.innerHTML = result_num;
  }

  random_icon();
  random_num();
}

// el boton para cambiar la carta
const card_button = document.getElementById("card_button");

card_button.addEventListener("click", () => {
  card_random();
  card_button.innerText = "Intentalo otra vez";
  // devuelve el texto inicial del boton despues de 3 segundos
  setTimeout(() => {
    card_button.innerText = "Cambiar la carta";
  }, 3000);
});

// la carta cambiara sola despues de 10 segundos

setInterval(() => {
  card_random();
}, 10000);

// seccion para los botones para customizar el width y el height

let mod_w = document.getElementById("mod_w");

let mod_h = document.getElementById("mod_h");

// consiguiendo los botones escondidos

let mod_w_sum = document.getElementById("mod_w_sum");
let mod_w_sub = document.getElementById("mod_w_sub");

let mod_h_sum = document.getElementById("mod_h_sum");
let mod_h_sub = document.getElementById("mod_h_sub");

mod_w.addEventListener("click", () => {
  mod_w_sum.style.display = "inline-block";
  mod_w_sub.style.display = "inline-block";

  setTimeout(() => {
    mod_w_sum.style.display = "none";
    mod_w_sub.style.display = "none";
  }, 10000);
});

mod_h.addEventListener("click", () => {
  mod_h_sum.style.display = "inline-block";
  mod_h_sub.style.display = "inline-block";

  setTimeout(() => {
    mod_h_sum.style.display = "none";
    mod_h_sub.style.display = "none";
  }, 10000);
});

// funcionabilidad de los botones escondidos

let box_card = document.getElementById("box");
// box_card.style.width = "250px";
// box_card.style.height = "400px";

let result_user_w = 0;
let result_user_h = 0;

mod_w_sum.addEventListener("click", () => {
  if (result_user_w < 200) {
    result_user_w = result_user_w + 10;
    let result_user_w_str = String(250 + result_user_w);
    box_card.style.width = result_user_w_str.concat("px");
  }
});

mod_w_sub.addEventListener("click", () => {
  if (result_user_w > 0) {
    result_user_w = result_user_w - 10;
    let result_user_w_str = String(250 + result_user_w);
    box_card.style.width = result_user_w_str.concat("px");
  }
});

mod_h_sum.addEventListener("click", () => {
  if (result_user_h < 200) {
    result_user_h = result_user_h + 10;
    let result_user_h_str = String(400 + result_user_h);
    box_card.style.height = result_user_h_str.concat("px");
  }
});

mod_h_sub.addEventListener("click", () => {
  if (result_user_h > 0) {
    result_user_h = result_user_h - 10;
    let result_user_h_str = String(400 + result_user_h);
    box_card.style.height = result_user_h_str.concat("px");
  }
});
