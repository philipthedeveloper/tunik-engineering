// select all the element

// select all the feedback element
const feedbacks = document.querySelectorAll(".feedback");
// select the container that wrap all the feedback
const feedbacksContainer = document.querySelector(".feedbacks-container");
// select the portfolio section
const portfolio = document.querySelector(".portfolio");
// select the heading element in the portfolio section
const portfolioh2 = document.querySelector(".portfolio h2");
// select the container that contains the container wrapping all the feedback(i.e the container which is being animated)
const imgContainer = document.querySelector(".portfolio .container");
// select the container that contains all the images in the portfolio section
const imgCont = document.querySelector(".portfolio .img-container");
// select the div that comes right after the portfolio text
const firstImage = document.querySelector(
  ".portfolio .img-container div:nth-child(3)"
);
// select the element that toggles the navbar in tab and mobile mode
const toggle = document.querySelector(".toggle-nav");
// select the nav
const nav = document.querySelector("header nav");
// select all circle span
const circle = document.querySelectorAll(".portfolio-circle");
const mainImgCont = document.querySelector(".about-photographer-img-container");
const imgOne = document.querySelector(".img-1");
const imgTwo = document.querySelector(".img-2");
const aboutTitle = document.querySelector(".about-title");
const aboutDes = document.querySelector(".about-description");
const serviceList = document.querySelectorAll(".service-texts li");
const clients = document.querySelectorAll(".client-img");
const allLi = document.querySelectorAll("header nav li");
const header = document.querySelector("header");
const slider = document.querySelector(".background-image-container");

setInterval(() => {
  const left = slider.getBoundingClientRect().left;
  if (left === 0) {
    slider.style.left = `-100%`;
  } else {
    slider.style.left = `0%`;
  }
}, 5000);

allLi.forEach((el) => {
  el.addEventListener("click", toggler);
});

window.addEventListener("scroll", () => {
  const top = document.body.getBoundingClientRect().top;
  if (top > -700) {
    classToggler([mainImgCont, imgOne, imgTwo, aboutTitle], -600);
  } else if (top < -750 && top > -1700) {
    classToggler([...serviceList], -400, 150);
  } else if (top < -1800 && top > -4200) {
    classToggler([...clients], -400, -60);
  }
});

function classToggler(list = [], topDisappear, bottomDisappear = 100) {
  [...list].forEach((el) => {
    let inViewPort = handleInViewPort(el, topDisappear, bottomDisappear);
    if (el === mainImgCont) {
      if (window.innerWidth < 1100) {
        return;
      }
      inViewPort ? el.classList.add("show") : el.classList.remove("show");
    }
    inViewPort ? el.classList.add("show") : el.classList.remove("show");
  });
}

window.addEventListener("scroll", () => {
  let mainTopPos = document.body.getBoundingClientRect();
  if (mainTopPos.top <= -(window.innerHeight - 70) && window.innerWidth > 920) {
    header.style.position = "sticky";
    header.style.top = 0;
    header.style.backgroundColor = "#22242d98";
    header.style.paddingTop = 0;
    header.style.paddingBottom = 0;
  } else {
    header.style.position = "static";
    header.style.top = "0px";
    header.style.backgroundColor = "transparent";
    header.style.paddingTop = `1rem`;
    header.style.paddingBottom = `1rem`;
  }
});

window.addEventListener("resize", removeCont);
window.addEventListener("load", removeCont);

function removeCont() {
  if (window.innerWidth < 1100) {
    mainImgCont.classList.remove("show");
  }
}

function handleInViewPort(el, topDisappear, bottomDisappear) {
  let elPos = el.getBoundingClientRect();
  return (
    (elPos.top <= 0 && elPos.bottom >= topDisappear) ||
    (elPos.top >= 0 && elPos.bottom <= window.innerHeight) ||
    (elPos.top <= window.innerHeight - bottomDisappear &&
      elPos.bottom >= window.innerHeight)
  );
}

// initialize conunt and feedback
let count = 0;
let feedback;

function portfolioFunc(value, caller) {
  imgCont.style.left = `calc(-${value} * (80% + 2rem))`;
  circle.forEach((circle) => circle.classList.remove("active"));
  caller.classList.add("active");
}

function prev(value) {
  count = count + value;
  if (count < 0) {
    count = 3;
    feedbacksContainer.style.left = `-${count * 100}%`;
  } else if (count > 3) {
    count = 0;
    feedbacksContainer.style.left = `-${count * 100}%`;
  } else {
    feedbacksContainer.style.left = `-${count * 100}%`;
  }
}

// function rearrange() {
//   const innerWidth = window.innerWidth;
//   if (innerWidth <= 768) {
//     // portfolioh2.remove();
//     // portfolio.insertBefore(portfolioh2, imgContainer);
//     feedbacksContainer.style.left = "0%";
//     feedback = (value) => {
//       count = value;
//       feedbacksContainer.style.left = `calc(-${value} * (60% + 3rem)`;
//     };
//   } else {
//     // portfolioh2.remove();
//     // imgCont.insertBefore(portfolioh2, firstImage);
//     feedbacksContainer.style.left = "0%";
//     feedback = (value) => {
//       count = value;
//       feedbacksContainer.style.left = `-${value * 100}%`;
//     };
//   }
// }

function reset() {
  const innerWidth = window.innerWidth;
  if (innerWidth >= 768) {
    imgCont.style.left = `0%`;
    circle.forEach((circle, index) => {
      if (index === 0) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });
  }
}

function toggler(e) {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    toggle.classList.remove("cross");
  } else {
    nav.classList.add("show");
    toggle.classList.add("cross");
  }
}

window.addEventListener("resize", reset);
// window.addEventListener("load", rearrange);
toggle.addEventListener("click", toggler);

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.querySelectorAll(".myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
