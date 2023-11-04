// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(linksHeight);

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const topLinkWsp = document.querySelector(".top-link--wsp");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // setup back to top link
  if (scrollHeight > 500) {
    // console.log("helo");
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }

  if (scrollHeight > 500) {
    // console.log("helo");
    topLinkWsp.classList.add("show-link");
  } else {
    topLinkWsp.classList.remove("show-link");
  }
});

/******* Slider text *******/

// SLIDER DOT
const mySlide = document.querySelectorAll(".slider__page");
const dot = document.querySelectorAll(".dot");

let counter = 1;
slideFun(counter);

let timer = setInterval(autoSlide, 5000);

function autoSlide() {
  counter += 1;
  slideFun(counter);
}

function plusSlides(n) {
  counter += n;
  slideFun(counter);
  resetTimer();
}

function currentSlide(n) {
  counter = n;
  slideFun(counter);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 5000);
}

function slideFun(n) {
  let i;
  for (i = 0; i < mySlide.length; i++) {
    mySlide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }
  if (n > mySlide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = mySlide.length;
  }
  mySlide[counter - 1].style.display = "block";
  dot[counter - 1].classList.add("active");
}


// SCROLL REVEAL ANIMATION
ScrollReveal().reveal(".products", {
  origin: "top",
  distance: "350px",
  duration: 2500,
  delay: 300,
  // reset: true
});

// ScrollReveal().reveal(".kit-uno", {
//   origin: "right",
//   distance: "350px",
//   duration: 2500,
//   delay: 300,
//   // reset: true
// });
// ScrollReveal().reveal(".kit-dos", {
//   origin: "right",
//   distance: "350px",
//   duration: 2500,
//   delay: 300,
//   // reset: true
// });

ScrollReveal().reveal(".card1", {
  origin: "left",
  distance: "150px",
  duration: 2500,
  delay: 400,
  // reset: true
});
ScrollReveal().reveal(".card2", {
  origin: "top",
  distance: "150px",
  duration: 2500,
  delay: 400,
  // reset: true
});
ScrollReveal().reveal(".card3", {
  origin: "bottom",
  distance: "150px",
  duration: 2500,
  delay: 400,
  // reset: true
});
ScrollReveal().reveal(".card4", {
  origin: "right",
  distance: "150px",
  duration: 2500,
  delay: 400,
  // reset: true
});

// ********** set date ************
// select span
// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

