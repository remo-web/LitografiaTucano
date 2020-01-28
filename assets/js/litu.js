
$(function() {
    
    $( ".litu-menu" ).hover( function() {
        $( ".litu-menu__menu .mdc-typography--button").toggleClass( "litu-hide" );
        $( ".mdc-list-item__graphic" ).toggleClass( "mdc-list-item__graphic__hover" );
        $( this ).toggleClass( "litu-menu__hover mdc-elevation--z2 mdc-elevation--z6" );
        $( ".litu-menu--social a" ).toggleClass( "litu-opacity" );
        $( ".litu-menu .mdc-list-item").toggleClass( "mdc-list-item__hover" );
    }, function() {
        $( ".litu-menu__menu .mdc-typography--button").toggleClass( "litu-hide" );
        $( ".mdc-list-item__graphic" ).toggleClass( "mdc-list-item__graphic__hover" );
        $( this ).toggleClass( "litu-menu__hover mdc-elevation--z2 mdc-elevation--z6" );
        $( ".litu-menu--social a" ).toggleClass( "litu-opacity" );
        $( ".litu-menu .mdc-list-item").toggleClass( "mdc-list-item__hover" );
    });
    
    // ANO ATUAL
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;

});