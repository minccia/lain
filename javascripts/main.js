
document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('.container')
  const glitchingLain = document.querySelector('.glitching_lain')

  setTimeout(function() {
    body.classList.toggle('container_background_off')

    setTimeout(function() {
      body.classList.toggle('container_background_off')
      glitchingLain.style.display = 'block';
    }, 1000)
  }, 2200)
});