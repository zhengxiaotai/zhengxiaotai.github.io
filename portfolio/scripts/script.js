let nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    let clientHeight = document.documentElement.clientHeight;
    if (value >= clientHeight-45 && !nav.classList.contains('fixed')) {
        nav.classList.add('fixed');
    }
    if (value < clientHeight-45 && nav.classList.contains('fixed')) {
        nav.classList.remove('fixed');
    }
});