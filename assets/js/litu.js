
$(function() {
    
    // Feather Icon
    feather.replace({ class: 'litu-feather', 'stroke-width': 0.5, 'color': '#2e7d32', })
    
    
        
    // ANO ATUAL
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
    document.getElementById("quemsomos-year").innerHTML = year;

});