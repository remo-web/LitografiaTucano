
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
    window.requestAnimationFrame(updateLax)
    

    
};

$(function() {
    
    // Feather Icon
    feather.replace({ class: 'litu-feather', 'stroke-width': 0.5, 'color': '#2e7d32', })
    
    // LightGallery
    lightGallery(document.getElementById('lightgallery')); 
        
// MENU DEPRECATED
//    $( ".litu-menu__nav, #menu-nav, .litu-menu__menu" ).mouseenter( 
//        function() {
//            $("#menu-nav").removeClass("litu-hide");
//            $(".litu-menu__menu").removeClass("flipOutX").addClass("flipInX");
//        }
//    );
//    
//    $( ".litu-menu__nav, #menu-nav" ).mouseleave( 
//        function() {
//            $(".litu-menu__menu").removeClass("flipInX").addClass("flipOutX");
//        }
//    );
    
//    $('#menu-orcamento').click(function() {
//        $('.mdc-dialog').addClass('mdc-dialog--open');
//    });
    
    // ANIMATE
//    $( '.mdc-image-list__image' ).hover( 
//        function(){ 
//            $( '.mdc-image-list__supporting' ).addClass( 'zoomIn' ) 
//        },
//        function(){ 
//            $( '.mdc-image-list__supporting' ).removeClass( 'litu-hide' ) 
//        },
//    )
    
    // ANO ATUAL
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;

});