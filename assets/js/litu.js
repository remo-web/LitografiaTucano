function menuOpen() {
    $( ".litu-menu__menu .mdc-typography--button").removeClass( "litu-hide" );
    $( ".mdc-list-item__graphic" ).addClass( "mdc-list-item__graphic__hover" );
    $( ".litu-menu" ).addClass( "litu-menu__hover" );
    $( ".litu-menu--social a" ).removeClass( "litu-opacity" );
    $( ".litu-menu .mdc-list-item").addClass( "mdc-list-item__hover" );
};

function menuClose() {
    $( ".litu-menu__menu .mdc-typography--button").addClass( "litu-hide" );
    $( ".mdc-list-item__graphic" ).removeClass( "mdc-list-item__graphic__hover" );
    $( ".litu-menu" ).removeClass( "litu-menu__hover" );
    $( ".litu-menu--social a" ).addClass( "litu-opacity" );
    $( ".litu-menu .mdc-list-item").removeClass( "mdc-list-item__hover" );
};

$(function() {
    
    $( ".litu-menu" ).hover( function() {
        if ($(window).scrollTop() > 200) {
            menuOpen();
        }
    }, function() {
        if ($(window).scrollTop() > 200) {
            menuClose();
        }
    });
    
//    $( ".litu-menu" ).hover( function lituOver() {
//        $( ".litu-menu__menu .mdc-typography--button").toggleClass( "litu-hide" );
//        $( ".mdc-list-item__graphic" ).toggleClass( "mdc-list-item__graphic__hover" );
//        $( ".litu-menu" ).toggleClass( "litu-menu__hover mdc-elevation--z2 mdc-elevation--z6" );
//        $( ".litu-menu--social a" ).toggleClass( "litu-opacity" );
//        $( ".litu-menu .mdc-list-item").toggleClass( "mdc-list-item__hover" );
//    }, function lituOut() {
//        $( ".litu-menu__menu .mdc-typography--button").toggleClass( "litu-hide" );
//        $( ".mdc-list-item__graphic" ).toggleClass( "mdc-list-item__graphic__hover" );
//        $( ".litu-menu" ).toggleClass( "litu-menu__hover mdc-elevation--z2 mdc-elevation--z6" );
//        $( ".litu-menu--social a" ).toggleClass( "litu-opacity" );
//        $( ".litu-menu .mdc-list-item").toggleClass( "mdc-list-item__hover" );
//    });
    
    // ANO ATUAL
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;

});

$(window).on('scroll',function() {
    if ($(this).scrollTop() < 200) {
        menuOpen();
    }
    else if ($(this).scrollTop() >= 200) {
        menuClose();
    }
});

//$( document ).scroll(function () {
//    if ($( document ).scrollTop() === 0) {
//        menuOpen();
//    }
//    else {
//        menuClose();
//    }
//});