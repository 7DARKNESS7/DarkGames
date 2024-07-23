document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider-container');
  
    sliders.forEach((sliderContainer) => {
      const prevBtn = sliderContainer.querySelector('.left-arrow');
      const nextBtn = sliderContainer.querySelector('.right-arrow');
      const slider = sliderContainer.querySelector('.slider');
      const slides = slider.querySelectorAll('.slide');
      const slideWidth = slider.querySelector('.slide').offsetWidth; // Width of a single slide
      let currentIndex = 0;
      const totalSlides = slides.length;
  
      const updateButtons = () => {
        prevBtn.classList.toggle('hidden', currentIndex === 0);
        nextBtn.classList.toggle('hidden', currentIndex >= totalSlides - Math.floor(3)); // Adjust based on slides to show
      };
  
      const moveToSlide = (index) => {
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
        if (currentIndex < totalSlides - Math.floor(3)) { // Adjust based on slides to show
          moveToSlide(currentIndex + 1);
        }
      });
  
      const handleResize = () => {
        // Recalculate slide width and adjust the position on resize
        const newSlideWidth = slider.querySelector('.slide').offsetWidth;
        slider.style.transform = `translateX(-${currentIndex * newSlideWidth}px)`;
      };
  
      window.addEventListener('resize', handleResize);
  
      // Initial button visibility setup
      updateButtons();
    });
  });
  