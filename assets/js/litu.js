$(function() {
    
    $(".litu-menu__nav, #menu-menu").hover(
        function(){
            $("#menu-menu").removeClass("litu-hide");
        }, 
        function(){
            $("#menu-menu").addClass("litu-hide");
        }
    );
    
});