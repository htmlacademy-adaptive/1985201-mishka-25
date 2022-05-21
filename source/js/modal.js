let modal = document.querySelector('.modal');
let cartLink = document.querySelector('.navigation__link--cart');

cartLink.addEventListener('click', function () {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  } else {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
  }
});
