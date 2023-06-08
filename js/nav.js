let body = document.querySelector('body');
let nav = document.querySelector('.nav-container');
let hamburger = document.querySelectorAll('.nav-menu-button');

let menuActive = false;

const toggleNavMenu = () => {
  if (!menuActive) {
    nav.classList.toggle('active');
    menuActive = true;
    body.classList.toggle('no-scroll');
  } else {
    nav.classList.toggle('active');
    menuActive = false;
    body.classList.toggle('no-scroll');
  }
};

for (i = 0; i < hamburger.length; i++) {
  hamburger[i].addEventListener('click', toggleNavMenu);
}

window.addEventListener(
  'resize',
  (closeMenuResize = () => {
    if (window.innerWidth >= 768) {
      nav.classList.remove('active');
    }
  })
);
