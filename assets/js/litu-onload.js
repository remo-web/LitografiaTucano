window.onload = function() {
    
    menuOpen();

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
    
};