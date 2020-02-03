window.onload = function() {
    
    menuOpen();
    
    if (
        window.location.href.indexOf("quem-somos") > -1 || 
        window.location.href.indexOf("portfolio") > -1 || 
        window.location.href.indexOf("inovacao") > -1) {
        menuClose();
    }

    // Anime Text
    var h = window.location.pathname;
    if (h.length === 0 || h === "/" || h.match(/^\/?index/))
        lituAnime();
    
    function lituAnime() {
        t1.play();
    };
    
    // lax Parallax | https://github.com/alexfoxy/laxxx
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
    
    // GALERIA PORTFÓLIO HOME
    
    $('#home-portfolio .mdc-image-list__item:nth-child(1) .mdc-image-list__image').each(function() {
        var num = Math.floor((Math.random() * 2) + 1),
            img = $(this);
        
        img.attr('src', 'assets/img/home/portfolio/remow_litu-img--home--portfolio__' + num + '.jpg');
        img.attr('alt', 'Src: ' + img.attr('src'));
    });
    
    $('#home-portfolio .mdc-image-list__item:nth-child(2) .mdc-image-list__image').each(function() {
        var num = Math.floor((Math.random() * 2) + 3),
            img = $(this);
        
        img.attr('src', 'assets/img/home/portfolio/remow_litu-img--home--portfolio__' + num + '.jpg');
        img.attr('alt', 'Src: ' + img.attr('src'));
    });
    
    $('#home-portfolio .mdc-image-list__item:nth-child(3) .mdc-image-list__image').each(function() {
        var num = Math.floor((Math.random() * 2) + 5),
            img = $(this);
        
        img.attr('src', 'assets/img/home/portfolio/remow_litu-img--home--portfolio__' + num + '.jpg');
        img.attr('alt', 'Src: ' + img.attr('src'));
    });
    
    $('#home-portfolio .mdc-image-list__item:nth-child(4) .mdc-image-list__image').each(function() {
        var num = Math.floor((Math.random() * 2) + 7),
            img = $(this);
        
        img.attr('src', 'assets/img/home/portfolio/remow_litu-img--home--portfolio__' + num + '.jpg');
        img.attr('alt', 'Src: ' + img.attr('src'));
    });
    
    $('#home-portfolio .mdc-image-list__item:nth-child(5) .mdc-image-list__image').each(function() {
        var num = Math.floor((Math.random() * 2) + 9),
            img = $(this);
        
        img.attr('src', 'assets/img/home/portfolio/remow_litu-img--home--portfolio__' + num + '.jpg');
        img.attr('alt', 'Src: ' + img.attr('src'));
    });
    
    $('#home-portfolio .mdc-image-list__item:nth-child(6) .mdc-image-list__image').each(function() {
        var num = Math.floor((Math.random() * 2) + 11),
            img = $(this);
        
        img.attr('src', 'assets/img/home/portfolio/remow_litu-img--home--portfolio__' + num + '.jpg');
        img.attr('alt', 'Src: ' + img.attr('src'));
    });
    
    $('#home-portfolio .mdc-image-list__item:nth-child(7) .mdc-image-list__image').each(function() {
        var num = Math.floor((Math.random() * 2) + 13),
            img = $(this);
        
        img.attr('src', 'assets/img/home/portfolio/remow_litu-img--home--portfolio__' + num + '.jpg');
        img.attr('alt', 'Src: ' + img.attr('src'));
    });
    
    $('#home-portfolio .mdc-image-list__item:nth-child(8) .mdc-image-list__image').each(function() {
        var num = Math.floor((Math.random() * 2) + 15),
            img = $(this);
        
        img.attr('src', 'assets/img/home/portfolio/remow_litu-img--home--portfolio__' + num + '.jpg');
        img.attr('alt', 'Src: ' + img.attr('src'));
    });
    
};