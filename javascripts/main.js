
document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('.container')
  const glitchingLain = document.querySelector('.glitching_lain')

  setTimeout(function() {
    body.style.background = 'url("./assets/static.gif")';

    setTimeout(function() {
      body.style.background = 'none';
      glitchingLain.style.display = 'block';
    }, 1000)
  }, 2200)
});