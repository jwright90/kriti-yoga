// Fade Loader
setTimeout(function () {
  $('.loader').addClass('show');
}, 1000);


function fadeLoader() {
  setTimeout(function () {
    $('.loader-bg').fadeToggle();
  }, 150);
}

window.addEventListener('load', fadeLoader, false);

