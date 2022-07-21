window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);
});


// var nav = document.querySelector('nav');

// window.addEventListener('scroll',() => {
//     if(window.pageYOffset > 50){
//         nav.classList.add('bg-dark');
//     } else {
//         nav.classList.remove('bg-dark');
//     }
// })



