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


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});