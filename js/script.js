const left = document.querySelector(".left");
const cmsoon = document.querySelector(".cmsoon");
const email = document.querySelector(".email");
const s2 = document.querySelector(".switch");
const s4 = document.querySelector(".circle");
const logo = document.querySelector(".logo");
const form = document.querySelector(".form");
const emailError = document.querySelector("small");
const errorClass = document.querySelector(".error");
const input = document.querySelector("input");
const hero_d = document.querySelector(".hero-d");
const hero_m = document.querySelector(".hero-m");
const img = document.querySelector("img");
const img_mob1 = document.querySelector(".img-mob1");
const img_mob2 = document.querySelector(".img-mob2");
const bg_right = document.querySelector(".bg-right");

s2.addEventListener("click", function () {
  left.classList.toggle("bg-dark");
  cmsoon.classList.toggle("heading-color");
  email.classList.toggle("heading-color");
  logo.classList.toggle("logo-dark");

  //switch button
  s2.classList.toggle("switch2");
  s2.classList.toggle("colour");
  s4.classList.toggle("cir");
  hero_d.classList.toggle("poster");
  hero_d.classList.toggle("bg-right");
  
  imageChange();


});
function imageChange(){
    const image = img;
    if (image.src.match("images/hero-mobile")) {
        image.src = "images/thor.png";
    }
    else {
        image.src = "images/hero-mobile.jpg";
    }
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
});

function checkEmail() {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value == "") {
    form.classList.add("error");
    emailError.textContent = "Whoops, you forgot to enter your email address!";
  } else if (!input.value.match(emailPattern)) {
    form.classList.add("error");
    emailError.textContent = "❌ Please provide a valid email address";
  } else {
    form.classList.add("success");
    emailError.textContent = "✅ You will be notified";
  }
}
