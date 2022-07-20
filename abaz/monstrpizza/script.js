const input = document.querySelector(".theme-input input");

input.addEventListener("change", (event) => {
  const isChecked = event.target.checked;
  if (isChecked) {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    input.checked = true;
    document.querySelector("html").setAttribute("data-theme", "dark");
  }
});

const knopkaleft = document.querySelector(".slaider-left-knopka");
console.log(knopkaleft);
const knopkaright = document.querySelector(".slaider-right-knopka");
console.log(knopkaright);
const slide = document.querySelectorAll(".slide");
console.log(slide);
const interval = 1000;
let currentslide = 0;
let slaidercount = slide.length;
knopkaright.addEventListener("click", () => {
  // console.log("knopkaright");
  // console.log(currentslide, slaidercount);
  if (currentslide < slaidercount) {
    currentslide++;

    if (currentslide === slaidercount) currentslide = 0;

    slide.forEach((slide) => {
      slide.style.transform = `translateX(-${100 * currentslide}%)`;
      //return slaidercount;
    });
  }
});

function tSlide() {
  setTimeout(() => currentslide++, 1000);

  setTimeout(
    () =>
      slide.forEach((slide) => {
        slide.style.transform = `translateX(-${100 * currentslide}%)`;
      }),
    1000
  );
}
tSlide();

//   slide.forEach((slide) => {
// console.log(slide);
// slide.style.transform = `translateX(-${100 * currentslide }%)`;

//   })

knopkaleft.addEventListener("click", () => {
  // console.log("knopkaright");
  // console.log(currentslide, slaidercount);
  if (currentslide <= slaidercount) {
    currentslide--;
    // if(currentslide === slaidercount)
    // currentslide = 0;
    // if(currentslide === slaidercount)

    slide.forEach((slide) => {
      slide.style.transform = `translateX(-${100 * currentslide}%)`;
      //return slaidercount;
    });
  }
});

// setInterval( () => {
//   slide()

// }, 3000);

// setTimeout(function(){
//   knopkaright.addEventListener(currentslide, slaidercount);

// },5000);
