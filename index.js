'use strict'

//ボタン
const clickCountryMenu = document.getElementsByClassName('click-country-menu')[0];
const clickCountryMenuBtn = document.getElementsByClassName('click-country-menu-btn')[0];

document.addEventListener('click', (e) => {
    const clickCountryMenuStyle = clickCountryMenu.getAttribute("style");
    if(clickCountryMenuStyle === 'display:none;') {
        if(!e.target.closest('.header-btn-country')) {
            clickCountryMenu.setAttribute('style', 'display:none;');
        } else {
            clickCountryMenu.setAttribute('style', '');
        }
    } else {
        if(!e.target.closest('.click-country-menu-btn')) {
            clickCountryMenu.setAttribute('style', 'display:none;');
        } else {
        }
    }
});

//アロー
document.querySelector('.arrow').addEventListener('click', function(){
    document.querySelector('.arrow').classList.toggle('is-active');
 });


//スライド
const slideBtnLeft = document.querySelector('.slide-btn-left');
const slideBtnRight = document.querySelector('.slide-btn-right');

const sliderwidth = document.querySelector(".sliderlist__item");

const sliderList = document.querySelector(".sliderlist");
const sliderList_item = document.querySelectorAll(".sliderlist__item");

let counterRight = 0;
const sliderListElement = document.getElementsByClassName('sliderlist')[0];

slideBtnRight.addEventListener("click", function() {
    let width = sliderwidth.clientWidth;
    sliderList.style.transition = ".3s";
    counterRight ++;
    counterLeft --;
    sliderList.style.transform = "translateX("+ (- width * counterRight) + "px)";
    // 新しいHTML要素を作成
    const new_element = document.createElement('li');
    new_element.className = 'sliderlist__item sliderlist__item1';
    sliderListElement.appendChild(new_element);
});


let counterLeft = 0;

slideBtnLeft.addEventListener("click", function() {
    let width = sliderwidth.clientWidth;
    sliderList.style.transition = ".3s";
    counterLeft ++;
    counterRight --;
    sliderList.style.transform = "translateX("+ ( width * counterLeft) + "px)";
    // 新しいHTML要素を作成
    const sliderListElement = document.getElementsByClassName('sliderlist')[0];
    const sliderListItem1_element = document.getElementsByClassName('sliderlist__item1')[0];
    const new_element = document.createElement('li');
    new_element.className = 'sliderlist__item sliderlist__item3';
    sliderListElement.insertBefore(new_element, sliderListItem1_element);
});
