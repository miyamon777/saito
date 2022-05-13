'use strict'

//アローボタン
const clickCountryMenu = document.getElementsByClassName('click-menu-country')[0];
const clickMoneyMenu = document.getElementsByClassName('click-menu-money')[0];
document.addEventListener('click', (e) => {
    const clickCountryMenuStyle = clickCountryMenu.getAttribute("style");
    const headerCountryBtn = document.querySelector('.header-country-btn');

    if(clickCountryMenuStyle === 'display:none;') {
        if(!e.target.closest('.header-country-btn')) {
        } else {
            clickCountryMenu.setAttribute('style', '');
            headerCountryBtn.classList.add('is-active');
        }
    } else {
        if(!e.target.closest('.click-country-menu-btn')) {
            clickCountryMenu.setAttribute('style', 'display:none;');
            headerCountryBtn.classList.remove('is-active');
        } else {
        }
    }
});

document.addEventListener('click', (e) => {
    const clickMoneyMenuStyle = clickMoneyMenu.getAttribute("style");
    const headerMoneyBtn = document.querySelector('.header-money-btn');
    if(clickMoneyMenuStyle === 'display:none;') {
        if(!e.target.closest('.header-money-btn')) {
            clickMoneyMenu.setAttribute('style', 'display:none;');
        } else {
            clickMoneyMenu.setAttribute('style', '');
            headerMoneyBtn.classList.add('is-active');
        }
    } else {
        if(!e.target.closest('.click-money-menu-btn')) {
            clickMoneyMenu.setAttribute('style', 'display:none;');
            headerMoneyBtn.classList.remove('is-active');
        } else {
        }
    }
});

//クリックしたら下から上へスライド
const templateContent = document.getElementsByClassName('template-content')[0];
const templateBtn = document.getElementsByClassName('template-btn')[0];



document.addEventListener('click', (e) => {
    const templateContentStyle = templateContent.getAttribute("style");
    if(templateContentStyle === 'display:none;') {
        if(!e.target.closest('.template-btn')) {
        } else {
            templateContent.setAttribute('style', '');
            templateBtn.classList.add('is-active');
            setTimeout(function() {
                templateContent.classList.add("template-content-click");
            },0);
        }
    } else {
        if(!e.target.closest('.template-btn')) {
            templateContent.setAttribute('style', 'display:none;');
            templateBtn.classList.remove('is-active');
            templateContent.classList.remove("template-content-click");
        } else {
            templateContent.setAttribute('style', 'display:none;');
            templateBtn.classList.remove('is-active');
            templateContent.classList.remove("template-content-click");
        }
    }
});



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

//ボタン
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

//クリックイベントを追加
scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
	window.scroll({top: 0, behavior: 'smooth'});
}


//スクロール時のイベントを追加
window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){
	
	if(window.pageYOffset > 400){
		scroll_to_top_btn.style.opacity = '1';
	}else	if(window.pageYOffset < 400){
		scroll_to_top_btn.style.opacity = '0';
	}
	
}

//セレクトボタンイベント
const selectBtnContent = document.getElementsByClassName('select-btn-content')[0];
const selectBtn = document.getElementsByClassName('select-btn')[0];


selectBtn.addEventListener('click', function() {
    //クリックによって値が変わるのでここに記載
    const selectBtnContentStyle = selectBtnContent.getAttribute("style");

    if(selectBtnContentStyle === 'display:none;') {
        //setAttributeメソッド完了後にtoggle実行
        selectBtnContent.setAttribute('style','');
        setTimeout(function(){
            selectBtnContent.classList.toggle('select-btn-content-click');
        },0);
    } else {
        selectBtnContent.classList.toggle('select-btn-content-click');
        //toggleメソッド完了後にsetAttribute実行
        setTimeout(function(){
            selectBtnContent.setAttribute('style','display:none;');
        },400);
    }
});

//selectの内容によってボタンの色を変更
const select = document.getElementById('select');
//イベント
select.addEventListener('change',selectColorChange);
//カラーを変更する関数
function selectColorChange() {
    if(select.options[1].selected) {
        selectBtn.classList.add('select-btn-blue');
        selectBtn.classList.remove('select-btn-pink');
        selectBtn.classList.remove('select-btn-red');
        selectBtn.classList.remove('select-btn-green');
    } else if(select.options[2].selected) {
        selectBtn.classList.add('select-btn-pink');
        selectBtn.classList.remove('select-btn-blue');
        selectBtn.classList.remove('select-btn-red');
        selectBtn.classList.remove('select-btn-green');
    } else if(select.options[3].selected) {
        selectBtn.classList.add('select-btn-red');
        selectBtn.classList.remove('select-btn-blue');
        selectBtn.classList.remove('select-btn-pink');
        selectBtn.classList.remove('select-btn-green');
    } else if(select.options[4].selected) {
        selectBtn.classList.add('select-btn-green');
        selectBtn.classList.remove('select-btn-blue');
        selectBtn.classList.remove('select-btn-pink');
        selectBtn.classList.remove('select-btn-red');
    }
}

//メインスライダー

//DOMツリー完成後関数実行
window.addEventListener('DOMContentLoaded', function() {
});

//イベントを発生させる場所の定義
const mainSlideBox = document.getElementsByClassName('main-slide-box')[0];
//クリックした座標取得
let setMx = 0;
let diffMx = 0;
let addMx = 0;
const mainSlideList = document.getElementsByClassName('main-slide-list')[0];
const width = mainSlideList.clientWidth;


//クリックされた位置-現在値を計算する関数
const difference = function(e) {
    e.preventDefault();
    //現在値を定義
    let mX = e.pageX;
    console.log(mX);
    diffMx = (mX - setMx);
    mainSlideBox.style.transform = "translateX("+ (diffMx + addMx) + "px)";
};

//クリックすると関数を実行させる
mainSlideBox.addEventListener('mousedown',function(e) {
    e.preventDefault();
    setMx = e.pageX;
    //マウスを動かすと関数が実行される
    mainSlideBox.addEventListener("mousemove", difference);
    mainSlideBox.style.transition = "none";
});

//クリックを離したら関数を終了させる
document.addEventListener('mouseup',function(e) {
    e.preventDefault();
    addMx += diffMx;
    mainSlideBox.removeEventListener("mousemove", difference);
    let sliderMx;
    if (addMx > (-width / 2) ) {
        addMx = 0;
    } else if (addMx > ((-width / 2) + (-width)) && addMx <= (-width / 2)) {
        addMx = -width;
    } else if (addMx > ((-width / 2) + (-width * 2)) && addMx <= ((-width / 2)+ (-width))) {
        addMx = -width * 2;
    } else if (addMx > ((-width / 2) + (-width * 3)) && addMx <= ((-width / 2)+ (-width * 2))) {
        addMx = -width * 3;
    } else {
        addMx = -width * 3;
    }
    mainSlideBox.style.transform = "translateX("+ (addMx) + "px)";
    mainSlideBox.style.transition = "all 0.3s";
});