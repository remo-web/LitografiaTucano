function menuOpen() {
    $( ".litu-menu__menu .mdc-typography--button").removeClass( "litu-hide" );
    $( ".mdc-list-item__graphic" ).addClass( "mdc-list-item__graphic__hover" );
    $( ".litu-menu" ).addClass( "litu-menu__hover mdc-elevation--z6" );
    $( ".litu-menu--social a" ).removeClass( "litu-opacity" );
    $( ".litu-menu .mdc-list-item").addClass( "mdc-list-item__hover" );
};

function menuClose() {
    $( ".litu-menu__menu .mdc-typography--button").addClass( "litu-hide" );
    $( ".mdc-list-item__graphic" ).removeClass( "mdc-list-item__graphic__hover" );
    $( ".litu-menu" ).removeClass( "litu-menu__hover mdc-elevation--z6" );
    $( ".litu-menu--social a" ).addClass( "litu-opacity" );
    $( ".litu-menu .mdc-list-item").removeClass( "mdc-list-item__hover" );
};

$(window).on('scroll',function() {
    if (
        window.location.href.indexOf("quem-somos") > -1 ||
        window.location.href.indexOf("portfolio") > -1 ||
        window.location.href.indexOf("inovacao") > -1) {
        menuClose();
    }
    else if ($(this).scrollTop() < 200) {
        menuOpen();
    }
    else if ($(this).scrollTop() >= 200) {
        menuClose();
    }
});

function lituHomeMenu() {
    
    $( ".litu-menu" ).hover( function() {
        if (
            window.location.href.indexOf("quem-somos") > -1 ||
            window.location.href.indexOf("portfolio") > -1 ||
            window.location.href.indexOf("inovacao") > -1) {
            menuOpen();
        }
        else if ($(window).scrollTop() > 200) {
            menuOpen();
        }
    }, function() {
        if (
            window.location.href.indexOf("quem-somos") > -1 ||
            window.location.href.indexOf("portfolio") > -1 ||
            window.location.href.indexOf("inovacao") > -1) {
            menuClose();
        }
        else if ($(window).scrollTop() > 200) {
            menuClose();
        }
    });
    
    // ANO ATUAL
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;

};