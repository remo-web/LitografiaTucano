$(function() {
    
    $( '.mdc-card__media' ).hover( function() {
        $(this).children( '.mdc-card__media-content' ).children( '.litu-pages--portfolio__head__item' ).toggleClass( 'animated flipInX litu-hide' );
    });

    // LightGallery
    lightGallery(document.querySelector( '.lightgallery' )); 
    
    // Exibir Portfolio
    $( '.litu-pages--head--menu__tudo' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria .tudo' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria .tudo' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 4000);
    });
    $( '.litu-pages--head--menu__alimentacao' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria .alimentacao' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria .alimentacao' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 4000);
    });
    $( '.litu-pages--head--menu__corporativo' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria .corporativo' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria .corporativo' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 4000);
    });
    $( '.litu-pages--head--menu__moda' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria .moda' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria .moda' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 4000);
    });
    $( '.litu-pages--head--menu__promocional' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria .promocional' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria .promocional' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 4000);
    });
    $( '.litu-pages--head--menu__varejo' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria .varejo' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria .varejo' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 4000);
    });
    $( '.litu-pages--head--menu__diversos' ).on( 'click', function() {
        $( '#portfolio-galeria .litu-pages--portfolio__galeria__text' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria li' ).addClass( 'litu-hide' );
        $( '#portfolio-galeria .diversos' ).toggleClass( 'litu-hide' );
        $( '#portfolio-galeria .diversos' ).toggleClass( 'animated fadeInUp' );
        setTimeout( function() {
            $( '#portfolio-galeria li' ).removeClass( 'animated fadeInUp' );
        }, 4000);
    });

});