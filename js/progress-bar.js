document.addEventListener('DOMContentLoaded', function () {
  const progressBars = document.querySelectorAll('.elementor-progress-bar');
  const progress = document.querySelectorAll('.elementor-progress-wrapper')

  function animateProgressBar(progressBar) {
    const value = progressBar.getAttribute('data-max');
    progressBar.style.width = `${value}%`;
  }

  function handleScroll() {
    progressBars.forEach((progressBar, index) => {
      const rect = progressBar.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        animateProgressBar(progressBar);
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
});