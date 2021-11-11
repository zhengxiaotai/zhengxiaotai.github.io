function scrollToPortfolio() {
    let clientHeight = document.documentElement.clientHeight;
    window.scrollTo({
        top: clientHeight, 
        behavior: 'smooth'
    })
}

let imgList = document.querySelectorAll('.project-img ');
for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('mouseover', function(e) {
        e.target.parentElement.parentElement.querySelector('span').classList.add('focus');
    });
    imgList[i].addEventListener('mouseout', function(e) {
        e.target.parentElement.parentElement.querySelector('span').classList.remove('focus');
    });
}

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    let cloud1 = 0 + value/9;
    let cloud2 = 0 + value/8;
    let cloud3 = (document.documentElement.clientWidth/5) + value/6;

    document.getElementById('cloud1').style.left = cloud1 + 'px';
    document.getElementById('cloud2').style.right = cloud2 + 'px';
    document.getElementById('cloud3').style.left = cloud3 + 'px';
});