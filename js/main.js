$(document).ready(function(){
    
    var mySwiper = new Swiper('.swiper-container', {
        effect: 'fade',
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        fadeEffect: {
            crossFade: true
        },
    });
    var swiper = new Swiper('.swiper-services', {
        slidesPerView: 3,
        loop: 'true'
    });
})