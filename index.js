'use strict'

//ボタン
const clickCountryMenu = document.getElementsByClassName('click-menu-country')[0];
const clickMoneyMenu = document.getElementsByClassName('click-menu-money')[0];

document.addEventListener('click', (e) => {
    const clickCountryMenuStyle = clickCountryMenu.getAttribute("style");
    if(clickCountryMenuStyle === 'display:none;') {
        if(!e.target.closest('.header-country-btn')) {
            clickCountryMenu.setAttribute('style', 'display:none;');
        } else {
            clickCountryMenu.setAttribute('style', '');
            document.querySelector('.header-country-btn').classList.add('is-active');
        }
    } else {
        if(!e.target.closest('.click-country-menu-btn')) {
            clickCountryMenu.setAttribute('style', 'display:none;');
            document.querySelector('.header-country-btn').classList.remove('is-active');
        } else {
        }
    }
});

document.addEventListener('click', (e) => {
    const clickMoneyMenuStyle = clickMoneyMenu.getAttribute("style");
    if(clickMoneyMenuStyle === 'display:none;') {
        if(!e.target.closest('.header-money-btn')) {
            clickMoneyMenu.setAttribute('style', 'display:none;');
        } else {
            clickMoneyMenu.setAttribute('style', '');
            document.querySelector('.header-money-btn').classList.add('is-active');
        }
    } else {
        if(!e.target.closest('.click-money-menu-btn')) {
            clickMoneyMenu.setAttribute('style', 'display:none;');
            document.querySelector('.header-money-btn').classList.remove('is-active');
        } else {
        }
    }
});

//アロー
// document.querySelector('.header-country-btn').addEventListener('click', function(){
//     document.querySelector('.header-country-btn').classList.toggle('is-active');
//  });

// document.querySelector('.header-money-btn').addEventListener('click', function(){
//     document.querySelector('.header-money-btn').classList.toggle('is-active');
// });


//スライド
const slideBtnLeft = document.querySelector('.slide-btn-left');
const slideBtnRight = document.querySelector('.slide-btn-right');

const sliderwidth = document.querySelector(".sliderlist__item");

const sliderList = document.querySelector(".sliderlist");
const sliderList_item = document.querySelector(".sliderlist__item");

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
