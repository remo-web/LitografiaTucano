$(function() {

    // LightGallery
    lightGallery(document.querySelector( '.lightgallery' )); 
    
    // Exibir Portfolio
    $( '.litu-pages--head--menu__tudo' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 3000);
    });
    $( '.litu-pages--head--menu__alimentacao' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria .alimentacao' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria .alimentacao' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 3000);
    });
    $( '.litu-pages--head--menu__corporativo' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria .corporativo' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria .corporativo' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 3000);
    });

});