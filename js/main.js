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

    var news = new Swiper('.swiper-news', {
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

    var categories = new Swiper('.swiper-categories', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                console.log(index);
                console.log(className);
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        nextButton: '#next_pagination',
        prevButton: '#prev_pagination'
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

    $("#next_news").click(function(e){
        e.preventDefault();
        news.slideNext();
    });
    $("#prev_news").click(function(e){
        e.preventDefault();
        news.slidePrev();
    });

    $("#next_pagination").click(function(e){
        e.preventDefault();
        categories.slideNext();
    });
    
    $("#prev_pagination").click(function(e){
        e.preventDefault();
        categories.slidePrev();
    });
    

    $('[data-bg]').mouseenter(function(e){
        e.preventDefault();
        $(this).css({
            'background-image':'url('+$(this).data('bg')+')',
            'transition':'opacity 0.7s ease-in-out',
            'opacity': '1',
            'color':'#fff'
        });
    });
    $('[data-bg]').mouseleave(function(e){
        e.preventDefault();
        $(this).css({
            'background-image':'none',
            'opacity': '0',
            
            'transition':'opacity 0.7s ease-in-out',
            'color':'#000'
        });
    });

    $.each($('[data-img]'), function(index, value) {
        $(value).css({
            'background-image':'url('+$(value).data('img')+')',
            'transition':'all 0.7s ease-in-out',
            'color':'#fff'
        });
        $(value).find('a').css('color','#fff');
        $(value).find('[data-display]').toggleClass('d-none');
    });
    $('[data-img]').mouseenter(function(e){
        e.preventDefault();
        $(this).css({
            'background-image':'none',
            'transition':'all 0.7s ease-in-out',
            'color':'#000'
        });
        $(this).find('a').css('color','#000');
        $(this).find('[data-display]').toggleClass('d-none');
    });

    $('[data-img]').mouseleave(function(e){
        e.preventDefault();
        $(this).css({
            'background-image':'url('+$(this).data('img')+')',
            'transition':'opacity 0.7s ease-in',

            'color':'#fff'
        });
        $(this).find('a').css('color','#fff');
        $(this).find('[data-display]').toggleClass('d-none');
    });
});