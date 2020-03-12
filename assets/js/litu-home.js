function lituHome() {
    
    $("#home-paraquem .mdc-card").hover(function (){
        $(this).toggleClass("mdc-elevation--z0");
        $(this).toggleClass("mdc-elevation--z4");
        $(".mdc-card__actions", this).toggleClass("litu-hide");
    });
    
    // ANO ATUAL
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
    document.getElementById("quemsomos-year").innerHTML = year;

};