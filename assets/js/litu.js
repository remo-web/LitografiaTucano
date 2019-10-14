$(function() {
    
//    $(".litu-menu__nav, #menu-nav, .litu-menu__menu").hover(
//        function(){
//            $("#menu-nav").removeClass("litu-hide");
//            $(".litu-menu__menu").removeClass("flipOutX");
//            $(".litu-menu__menu").addClass("flipInX");
//        }, 
//        function(){
//            $(".litu-menu__menu").removeClass("flipInX");
//            $(".litu-menu__menu").addClass("flipOutX");
//        }
//    );
    
//    $( ".litu-menu__nav" ).click( function() {
//        $("#menu-nav").toggle("litu-hide");
//        $(".litu-menu__menu").toggle("flipOutX");
//        $(".litu-menu__menu").toggle("flipInX");
//    });    
    
    $( ".litu-menu__nav, #menu-nav, .litu-menu__menu" ).mouseenter( 
        function() {
            $("#menu-nav").removeClass("litu-hide");
            $(".litu-menu__menu").removeClass("flipOutX").addClass("flipInX");
        }
    );
    
    $( ".litu-menu__nav, #menu-nav" ).mouseleave( 
        function() {
            $(".litu-menu__menu").removeClass("flipInX").addClass("flipOutX");
        }
    );
    
//    FitText
    jQuery("h1, h2").fitText();
    
});