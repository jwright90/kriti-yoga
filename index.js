function addChangeClass() {

  menuButton = document.getElementById('menu-button');
  menuButton.classList.toggle("change");

  mobileOverlay = document.getElementById("mobile-overlay");
  mobileOverlay.classList.toggle("change");

  mobileMenuText = document.querySelector('.mobile-menu-text');
  mobileMenuText.classList.toggle("blue-green");

  mobileNav = document.getElementById("mobile-nav");
  mobileNav.classList.toggle("change");

  body = document.getElementsByTagName('body').item(0);
  body.classList.toggle("change");

  let i;
  for (i = 1; i < 4; i++) {
    let bar = document.getElementsByClassName(`bar${i}`);
    bar.item(0).classList.toggle("change");
  }

}

setTimeout(function () {
  $('.loader-bg').fadeToggle();
}, 250);
