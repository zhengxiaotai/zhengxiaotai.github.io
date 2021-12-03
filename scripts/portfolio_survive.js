window.addEventListener('scroll', function() {
    let value = window.scrollY;
    let bubble1 = (400 - value) / 8;
    let bubble2 = (400 - value) / 6;
    let bubble3 = (400 - value) / 5;
    let bubble4 = (400 - value) / 3.5;
    let bubble5 = (400 - value) / 1.8;
    let bubble6 = (400 - value) / 1.6;
    let bubble7 = (400 - value) / 3;

    document.getElementById('bubble1').style.marginTop = bubble1 + 'px';
    document.getElementById('bubble2').style.marginTop = bubble2 + 'px';
    document.getElementById('bubble3').style.marginTop = bubble3 + 'px';
    document.getElementById('bubble4').style.marginTop = bubble4 + 'px';
    document.getElementById('bubble5').style.marginTop = bubble5 + 'px';
    document.getElementById('bubble6').style.marginTop = bubble6 + 'px';
    document.getElementById('bubble7').style.marginTop = bubble7 + 'px';

    let plot = (2600 - value) / 8;
    document.getElementById('plot').style.marginLeft = plot + 'px';

    let structure = (value - 3000) / 10;
    document.getElementById('structure-left').style.marginLeft = structure + 'px';
    document.getElementById('structure-right').style.marginRight = structure + 'px';
    document.getElementById('structure').style.marginTop = structure + 'px';

    let portfolio = (value - 4600) / 15;
    let images = document.getElementsByClassName('portfolio-img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.boxShadow = '#999999 1px ' + portfolio + 'px 18px';
    }
    
    console.log(value);
});
