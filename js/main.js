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
        nextButton: '#next_btn'
    });

    var partners = new Swiper('.swiper-partners', {
        slidesPerGroup: 3,
        slidesPerView: 3,
        loop: true,
        nextButton: '#next_partner'
    });

     var partners = new Swiper('.swiper-news', {
        slidesPerGroup: 1,
        slidesPerView: 1,
        loop: true,
        nextButton: '#next_news',
        prevButton: '#prev_news'

    });

    var about = new Swiper('.swiper-chi-siamo', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        nextButton: '#next_about'
    });

    $("#next_btn").click(function(e){
        e.preventDefault();
        services.slideNext();
    });


    $("#next_partner").click(function(e){
        e.preventDefault();
        partners.slideNext();
    });

    $("#next_about").click(function(e){
        e.preventDefault();
        about.slideNext();
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
        $(this).css({
            'background-image':'url('+$(this).data('bg')+')',
            'transition':'0.7s ease-in',
            'color':'#fff'
        });
    });
    $('[data-bg]').mouseleave(function(e){
        e.preventDefault();
        $(this).css({
            'background-image':'none',
            'transition':'0.7s ease-out',
            'color':'#000'
        });
    });

    $.each($('[data-img]'), function(index, value) {
        $(value).css({
            'background-image':'url('+$(value).data('img')+')',
            'transition':'0.7s ease-in',
            'color':'#fff'
        });
        $(value).find('a').css('color','#fff');
        $(value).find('[data-display]').toggleClass('d-none');
    });
    $('[data-img]').mouseenter(function(e){
        e.preventDefault();
        $(this).css({
            'background-image':'none',
            'transition':'0.7s ease-in',
            'color':'#000'
        });
        $(this).find('a').css('color','#000');
        $(this).find('[data-display]').toggleClass('d-none');
    });
    $('[data-img]').mouseleave(function(e){
        e.preventDefault();
        $(this).css({
            'background-image':'url('+$(this).data('img')+')',
            'transition':'0.7s ease-out',
            'color':'#fff'
        });
        $(this).find('a').css('color','#fff');
        $(this).find('[data-display]').toggleClass('d-none');
    });
});