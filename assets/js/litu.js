
window.onload = function() {
    
    // Anime Text
    t1.play();
    
    // lax Parallax
    //https://github.com/alexfoxy/laxxx
    lax.setup() // init
    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }
    window.requestAnimationFrame(updateLax);
    
    
    // Smooth scrolling on page load if URL have a hash
    if(window.location.hash) {
        var hash = window.location.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, 'swing');
    };
    
};

$(function() {
    
    // Feather Icon
    feather.replace({ class: 'litu-feather', 'stroke-width': 0.5, 'color': '#2e7d32', })
    
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
        
    // ANO ATUAL
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;

});