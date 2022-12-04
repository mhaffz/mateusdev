const htmlPage = document.querySelector('html');
const menuButton = document.querySelector('.close-menu-label');
const nav = document.querySelector('.navegation');
const closeMenu = document.querySelector('.close-menu');

(menuButton.onclick) = function () {
  if (closeMenu.checked != true) {
    htmlPage.style.overflow = 'hidden';
  }
  if (closeMenu.checked != false) {
    htmlPage.style.overflow = 'visible';

  }
}

nav.onclick = function () {
  closeMenu.checked = false;
  htmlPage.style.overflow = 'visible';
}