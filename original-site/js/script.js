$(function(){

    //menu-slider
    $('.slider').slick({
        autoplay: false,
        speed: 1000,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
    });
    $('.slider-txt').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        slidesToShow: 1,
        asNavFor: '.slider',
        vertical: true,
        verticalSwiping: true,
        dots: true,
    });

    //scrollEvent
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        var target = $(contents[i]).offset().top -70;
        var docHeight = $(document).innerHeight();
        var windowHeight = $(window).innerHeight();
        var pageBottom = docHeight - windowHeight;   

    });
});