const formEl = document.querySelector("form");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const h3 = document.querySelector("h3");
const body = document.querySelector("body");

const img = document.querySelector(".res_img");
let gradient = () => {
  const linear = Math.trunc(Math.random() * 255) + 1;
  return linear;
};
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let random = Math.random();
  const natija = Math.trunc(random * 10) + 1;
  const input = formEl["number"].value;

  if (input >= 1 && input <= 10) {
    if (input == natija) {
      img.src = "../img/win.webp";
      h3.textContent = `Siz o'ylagan son:${natija}`;
    } else if (input != natija) {
      img.src = "../img/game.jpg";
      h3.textContent = `Afsus siz adashdingiz natija:${natija} edi`;
    }
  } else {
    alert("Siz kiritgan raqam juda katta iltimos 10dan kichik son oylang");
  }
  body.style.backgroundImage = `linear-gradient(45deg ,
  rgb(${gradient()},${gradient()}, ${gradient()} ),
  rgb(${gradient()},${gradient()}, ${gradient()} ),
  rgb(${gradient()},${gradient()}, ${gradient()} ) )`;
  console.log(gradient());
});
