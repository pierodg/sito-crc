$(document).ready(function(){
    
    var header = new Swiper('.swiper-container', {
        effect: 'fade',
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        fadeEffect: {
            crossFade: true
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    });


    var services = new Swiper('.swiper-services', {
        slidesPerView: 3,
        loop: true,
        nextButton: '.next_btn'
    });

    $(".next_btn").click(function(e){
        e.preventDefault();
        services.slideNext();
    });


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

    $('[data-bg]').mouseenter(function(e){
        e.preventDefault();
        $(this).css('background-image', 'url('+$(this).data('bg')+')');
    });
    $('[data-bg]').mouseleave(function(e){
        e.preventDefault();
        $(this).css('background-image', 'none');
    });
});