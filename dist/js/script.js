/*Carousel begin*/
var owl = $('.owl-carousel');
    owl.owlCarousel({
        // autoplay:true,
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
            600:{
                items:3
            },            
            960:{
                items:5
            },
            1200:{
                items:6
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