(function() {

    const houseElem = document.querySelector('.house');
    let maxScrollValue = document.body.offsetHeight - window.innerHeight;

    window.addEventListener('scroll', function() {
        const zMove = this.pageYOffset / maxScrollValue * 1000;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
    })

})();