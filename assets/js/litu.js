$(function() {
    
    feather.replace({ class: 'litu-feather', 'stroke-width': 0.5, 'color': '#2e7d32', })
        
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
    
    // ANO ATUAL
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;

});