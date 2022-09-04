/*
    João Paulo Oliveira
    JpOliveira
    Ciência da Computação
    Web Developer
    Desenvolvedor Web
    Front End
    UFPA
*/
//! === ADD HEADER STYLES ON SCROLL ===
const headerScroll = () =>{
     const headerElement = document.querySelector('.header');
     this.scrollYm >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active'); 
}
window.addEventListener('scroll', headerScroll);

//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const menuToggler = document.querySelector('#menu-toggler');
const navBarMenu = document.querySelector('.navbar__menu');

const  toggleMenu = () =>{
    navBarMenu.classList.toggle('active')
}
menuToggler.addEventListener('click', toggleMenu);
// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const linksToggleMenun = (element) =>{
    if (element.target.classList.contains('navbar__list-link')) navBarMenu.classList.remove('active');
}   
//! === SWIPER ===
const swiper =  new Swiper('.myswiper', {
    effect:'coverflow', 
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect:{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination'
    }    
});

//! === SCROLL REVEAL ===

const sr = scrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.256, 1.55)'
});

sr.reveal('.showcase__title, .showcase__image, .section__metadata, .swiper', {
    origin: 'top',
    interval: 250
});
sr.reveal('.services__image-wrapper, .about__information, .post--left', {
    origin: 'left',
});
sr.reveal('.services__list, .about__images, .post--right', {
    origin: 'right',
});
sr.reveal('.footer__container', {
    origin: 'top',
});

