$(document).ready(function(){
    $('#paraquem-card-1').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: Math.floor(Math.random() * (4000 - 2000) ) + 2000,
        fade: true,
        dots: false,
        arrows: false,
    });
    $('#paraquem-card-2').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: Math.floor(Math.random() * (4000 - 2000) ) + 2000,
        fade: true,
        dots: false,
        arrows: false,
    });
    $('#paraquem-card-3').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: Math.floor(Math.random() * (4000 - 2000) ) + 2000,
        fade: true,
        dots: false,
        arrows: false,
    });
    $('.litu-home--paraquem__marcas').slick({
        slidesToShow: 8,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
    });
});
