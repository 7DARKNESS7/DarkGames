// JavaScript code

document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let slidesToShow = window.innerWidth <= 768 ? 2 : 3; // Determine initial number of slides to show
    let currentIndex = 0;
  
    const updateButtons = () => {
      prevBtn.classList.toggle('hidden', currentIndex === 0);
      nextBtn.classList.toggle('hidden', currentIndex >= slides.length - slidesToShow);
    };
  
    const moveToSlide = (index) => {
      const slideWidth = slider.querySelector('.slide').offsetWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
      currentIndex = index;
      updateButtons();
    };
  
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentIndex < slides.length - slidesToShow) {
        moveToSlide(currentIndex + 1);
      }
    });
  
    const updateSlidesToShow = () => {
      slidesToShow = window.innerWidth <= 768 ? 2 : 3;
      moveToSlide(currentIndex); // Adjust the transform to the new slidesToShow value
    };
  
    window.addEventListener('resize', updateSlidesToShow);
  
    // Initialize slider state
    updateButtons();
  });
  