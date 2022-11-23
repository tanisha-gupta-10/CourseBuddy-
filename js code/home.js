burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav')

burger.addEventListener ('click', ()=> {
    rightNav.classList.toggle('visible-class-resp')
    navlist.classList.toggle('visible-class-resp')
    navbar.classList.toggle('height-nav-resp')
})