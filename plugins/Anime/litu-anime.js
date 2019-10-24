var textWrapper = document.querySelector('.litu-home--head__titulo1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

//https://animejs.com/documentation/#finishedPromise

var textWrapper2 = document.querySelector('.litu-home--head__titulo2 .letters');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ 
    loop: true
}).add({
    targets: '.litu-home--head__titulo1 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 800
}).add({
    targets: '.litu-home--head__titulo1 .line',
    translateX: [0, document.querySelector('.litu-home--head__titulo1 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 800,
    delay: 100
}).add({
    targets: '.litu-home--head__titulo1 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
}).add({
    targets: '.litu-home--head__titulo1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000,
}).add({
    targets: '.litu-home--head__titulo2 .line',
    update: function() {
        $(".litu-home--head__titulo2").removeClass("litu-hide");
    }
}).add({
    targets: '.litu-home--head__titulo2 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 800
}).add({
    targets: '.litu-home--head__titulo2 .line',
    translateX: [0, document.querySelector('.litu-home--head__titulo2 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 800,
    delay: 100
}).add({
    targets: '.litu-home--head__titulo2 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
}).add({
    targets: '.litu-home--head__titulo2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
});

