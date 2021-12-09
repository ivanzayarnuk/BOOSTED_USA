window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu-item'),
    blockItem = document.querySelectorAll('.header__block-lonk'),
    headerBlock = document.querySelector('.header__block'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
        headerBlock.classList.toggle('header__block-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
            headerBlock.classList.toggle('header__block-active');
        });
    });

    blockItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
            headerBlock.classList.toggle('header__block-active');
        });
    });
});


/*Carousel begin*/
var owl = $('.owl-carousel');
    owl.owlCarousel({
        autoplay:true,
        autoplayHoverPause: true,
        autoplayTimeout:2000,
        loop: true,
        items: 7,
        dots: false,
        margin: 20,
        nav: false,
        smartSpeed: 200,
        fluidSpeed:200,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:3,
                nav: false
            }, 
            768:{
                items:4
            },            
            960:{
                items:5
            },
            1200:{
                items:6
            },
            1400:{
                items:7
            }
        }
    });

document.querySelector('.customPrevBtn').addEventListener('click', function (e) {
    e.preventDefault();
    owl.trigger('prev.owl.carousel');
});

document.querySelector('.customNextBtn').addEventListener('click', function (e) {
    e.preventDefault();
    owl.trigger('next.owl.carousel');
});

owl.on('wheel', '.owl-stage', function (e) {
    if (e.originalEvent.wheelDelta > 0) { 
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
/*Carousel end*/