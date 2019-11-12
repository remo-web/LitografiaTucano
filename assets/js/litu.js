
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
    lightGallery(document.querySelector('.lightgallery')); 
    
    // Exibir Portfolio
    $( '.litu-pages--head--menu__alimentacao' ).on('click', function (){
        $( '.litu-portfolio--galeria__alimentacao' ).toggleClass( 'litu-hide' );
        $( '#portfolio-alimentacao .mdc-image-list__item' ).toggleClass( 'animated' );
    });
        
    // ANO ATUAL
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;

});