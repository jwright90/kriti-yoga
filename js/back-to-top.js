let body = document.body;
let backToTop = document.querySelector('.back-to-top');

window.onscroll = function () {
  if (window.pageYOffset > (body.scrollHeight * 0.15)) {
    backToTop.classList.add('did-scroll');
  } else {
    backToTop.classList.remove('did-scroll');
  }
}