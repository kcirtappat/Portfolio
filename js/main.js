var nav = document.querySelector('nav');

window.addEventListener('scroll',() => {
    if(window.pageYOffset > 50){
        nav.classList.add('.fixed-top');
    } else {
        nav.classList.remove('.fixed-top', 'shadow');
    }
})

