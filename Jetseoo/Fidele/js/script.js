const input = document.querySelector('.theme-switch input');
input.addEventListener('change', (event) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      document.querySelector('html').setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.querySelector('html').setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      console.log('light')
    }
} );

window.addEventListener('load', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    input.checked = true;
    document.querySelector('html').setAttribute('data-theme', 'dark');
  }
})

const sliderBtnPrev = document.querySelector('.slider-prev')
const sliderBtnNext = document.querySelector('.slider-next')
const sliderSlides = document.querySelectorAll('.slider-img')

let currentSlide = 0;
const sliderCount = sliderSlides.length;

sliderBtnPrev.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = sliderCount - 1;
    sliderSlides.forEach(slide => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    })

  } else if (currentSlide > 0 && currentSlide < sliderCount) {
    currentSlide--;
    sliderSlides.forEach(slide => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    })
  } else {
    console.error('Slider error: unable to get previous slide');
  }
})

sliderBtnNext.addEventListener('click', () => {  
  if (currentSlide < sliderCount - 1) {
    currentSlide++;
    sliderSlides.forEach(slide => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    })
  } else if (currentSlide >= sliderCount - 1) {
    currentSlide = 0;
    sliderSlides.forEach(slide => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    })
  } else {
    console.error('Slider error: unable to get next slide');
  }
})