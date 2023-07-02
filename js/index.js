const bergerMenu = document.querySelector('.berger-menu');
const navitemslist = document.querySelector('.items-nav-ul');
const searchNav = document.querySelector(".search-nav");
const itemsNav = document.querySelector('.items-nav');


var viewportWidth = document.documentElement.clientWidth;
console.log(viewportWidth);

if (viewportWidth > 768) {
    itemsNav.classList.remove('d-none');
    bergerMenu.classList.add('d-none');
}

bergerMenu.addEventListener("click", function () {
    navitemslist.classList.toggle('hidden-nav-items');
    searchNav.classList.toggle('z-3');
    itemsNav.classList.toggle('d-none');
});

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const sliderBeforeMdImg = document.querySelector('.slider-before-md-img');

let activeImage = 1;
arrowRight.addEventListener('click', function () {
    if (activeImage == 3) {
        activeImage = 1;
    } else {
        activeImage++;
    }
    sliderBeforeMdImg.setAttribute('src', `images/slider-pic-${activeImage}.png`);
});
arrowLeft.addEventListener('click', function () {
    if (activeImage == 1) {
        activeImage = 3;
    } else {
        activeImage--;
    }
    sliderBeforeMdImg.setAttribute('src', `images/slider-pic-${activeImage}.png`);
});

const footeritemopener = document.querySelectorAll('.footer-item-opener');
const openclosefooteritem = document.querySelectorAll('.openclosefooteritem');

footeritemopener[0].addEventListener('click', function () {
    openclosefooteritem[0].classList.toggle('unhidden-footer-item');
})

footeritemopener[1].addEventListener('click', function () {
    openclosefooteritem[1].classList.toggle('unhidden-footer-item');
})

footeritemopener[2].addEventListener('click', function () {
    openclosefooteritem[2].classList.toggle('unhidden-footer-item');
});



