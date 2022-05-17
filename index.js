'use strict'

//Englishボタン--------------------------------------------------------
const clickCountryMenu = document.getElementsByClassName('click-menu-country')[0];
const navCountryBtn = document.getElementsByClassName('nav-country-btn')[0];
//クリックイベント
document.addEventListener('click', (e) => {
    //要素が出ていない時の処理
    if(clickCountryMenu.style.display === 'none') {
        //指定場所以外をクリックした時の処理
        if(!e.target.closest('.nav-country-btn')) {
        //指定場所をクリックした時の処理
        } else {
            clickCountryMenu.setAttribute('style', '');
            navCountryBtn.classList.add('is-active');
            setTimeout(function() {
                clickCountryMenu.classList.add("template-content-click");
            },0);
        }
    //要素が出ている時の処理
    } else {
        //指定場所以外をクリックした時の処理
        if(!e.target.closest('.click-country-menu-btn')) {
            clickCountryMenu.setAttribute('style', 'display:none;');
            navCountryBtn.classList.remove('is-active');
            clickCountryMenu.classList.remove("template-content-click");
        //指定場所をクリックした時の処理
        } else {
            clickCountryMenu.setAttribute('style', 'display:none;');
            navCountryBtn.classList.remove('is-active');
            clickCountryMenu.classList.remove("template-content-click");
        }
    }
});
//USDボタン------------------------------------------------------------
const clickMoneyMenu = document.getElementsByClassName('click-menu-money')[0];
const navMoneyBtn = document.getElementsByClassName('nav-money-btn')[0];

document.addEventListener('click', (e) => {
    if(clickMoneyMenu.style.display === 'none') {
        if(!e.target.closest('.nav-money-btn')) {
        } else {
            clickMoneyMenu.setAttribute('style', '');
            navMoneyBtn.classList.add('is-active');
            setTimeout(function() {
                clickMoneyMenu.classList.add("template-content-click");
            },0);
        }
    } else {
        if(!e.target.closest('.click-money-menu-btn')) {
            clickMoneyMenu.setAttribute('style', 'display:none;');
            navMoneyBtn.classList.remove('is-active');
            clickMoneyMenu.classList.remove("template-content-click");
        } else {
            clickMoneyMenu.setAttribute('style', 'display:none;');
            navMoneyBtn.classList.remove('is-active');
            clickMoneyMenu.classList.remove("template-content-click");
        }
    }
});
//HOMEボタン----------------------------------------------------------
const homeContent = document.getElementsByClassName('home-content')[0];
const homeBtn = document.getElementsByClassName('home-btn')[0];

document.addEventListener('click', (e) => {
    if(homeContent.style.display === 'none') {
        if(!e.target.closest('.home-btn')) {
        } else {
            homeContent.setAttribute('style', '');
            homeBtn.classList.add('is-active');
            setTimeout(function() {
                homeContent.classList.add("home-content-click");
            },0);
        }
    } else {
        if(!e.target.closest('.home-btn')) {
            homeContent.setAttribute('style', 'display:none;');
            homeBtn.classList.remove('is-active');
            homeContent.classList.remove("home-content-click");
        } else {
            homeContent.setAttribute('style', 'display:none;');
            homeBtn.classList.remove('is-active');
            homeContent.classList.remove("home-content-click");
        }
    }
});

//SHOPボタン----------------------------------------------------------
const shopContent = document.getElementsByClassName('shop-content')[0];
const shopBtn = document.getElementsByClassName('shop-btn')[0];

document.addEventListener('click', (e) => {
    if(shopContent.style.display === 'none') {
        if(!e.target.closest('.shop-btn')) {
        } else {
            shopContent.setAttribute('style', '');
            shopBtn.classList.add('is-active');
            setTimeout(function() {
                shopContent.classList.add("shop-content-click");
            },0);
        }
    } else {
        if(!e.target.closest('.shop-btn')) {
            shopContent.setAttribute('style', 'display:none;');
            shopBtn.classList.remove('is-active');
            shopContent.classList.remove("shop-content-click");
        } else {
            shopContent.setAttribute('style', 'display:none;');
            shopBtn.classList.remove('is-active');
            shopContent.classList.remove("shop-content-click");
        }
    }
});

//TEMPLATEボタン----------------------------------------------------------
const templateContent = document.getElementsByClassName('template-content')[0];
const templateBtn = document.getElementsByClassName('template-btn')[0];

document.addEventListener('click', (e) => {
    if(templateContent.style.display === 'none') {
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

//DROPDOWNボタン----------------------------------------------------------
const dropdownContent = document.getElementsByClassName('dropdown-content')[0];
const dropdownBtn = document.getElementsByClassName('dropdown-btn')[0];

document.addEventListener('click', (e) => {
    if(dropdownContent.style.display === 'none') {
        if(!e.target.closest('.dropdown-btn')) {
        } else {
            dropdownContent.setAttribute('style', '');
            dropdownBtn.classList.add('is-active');
            setTimeout(function() {
                dropdownContent.classList.add("dropdown-content-click");
            },0);
        }
    } else {
        if(!e.target.closest('.dropdown-btn')) {
            dropdownContent.setAttribute('style', 'display:none;');
            dropdownBtn.classList.remove('is-active');
            dropdownContent.classList.remove("dropdown-content-click");
        } else {
            dropdownContent.setAttribute('style', 'display:none;');
            dropdownBtn.classList.remove('is-active');
            dropdownContent.classList.remove("dropdown-content-click");
        }
    }
});

//DOCSボタン----------------------------------------------------------
const docsContent = document.getElementsByClassName('docs-content')[0];
const docsBtn = document.getElementsByClassName('docs-btn')[0];

document.addEventListener('click', (e) => {
    if(docsContent.style.display === 'none') {
        if(!e.target.closest('.docs-btn')) {
        } else {
            docsContent.setAttribute('style', '');
            docsBtn.classList.add('is-active');
            setTimeout(function() {
                docsContent.classList.add("docs-content-click");
            },0);
        }
    } else {
        if(!e.target.closest('.docs-btn')) {
            docsContent.setAttribute('style', 'display:none;');
            docsBtn.classList.remove('is-active');
            docsContent.classList.remove("docs-content-click");
        } else {
            docsContent.setAttribute('style', 'display:none;');
            docsBtn.classList.remove('is-active');
            docsContent.classList.remove("docs-content-click");
        }
    }
});

//押したら上に行くボタン⬆︎---------------------------------------------------
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');
//クリックイベント
scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );
//上に行く関数
function scroll_to_top(){
	window.scroll({top: 0, behavior: 'smooth'});
}

//半分より下の方にいる時だけ表示させるようにする
window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){
	if(window.pageYOffset > 400){
		scroll_to_top_btn.style.opacity = '1';
	}else	if(window.pageYOffset < 400){
		scroll_to_top_btn.style.opacity = '0';
	}
}

//右の設定マークボタン-------------------------------------------------------
const selectBtnContent = document.getElementsByClassName('select-btn-content')[0];
const selectBtn = document.getElementsByClassName('select-btn')[0];
//クリックしたら要素が出てくるようにする
selectBtn.addEventListener('click', function() {
    const selectBtnContentStyle = selectBtnContent.getAttribute("style");
    if(selectBtnContentStyle === 'display:none;') {
        //要素を表示する
        selectBtnContent.setAttribute('style','');
        //setAttributeメソッド完了後にtoggle実行
        //要素の高さを伸ばす
        setTimeout(function(){
            selectBtnContent.classList.toggle('select-btn-content-click');
        },0);
    } else {
        //要素の高さを縮める
        selectBtnContent.classList.toggle('select-btn-content-click');
        //toggleメソッド完了後にsetAttribute実行
        //要素を消す
        setTimeout(function(){
            selectBtnContent.setAttribute('style','display:none;');
        },400);
    }
});

//選択したらその色に変わるようにする
const select = document.getElementById('select');
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

//上部スライダー--------------------------------------------------------------
const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    loop: true,
    longSwipesRatio: 0,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",    
    },
});
//下部スライダー--------------------------------------------------------------
const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 0,
    longSwipesRatio: 0,
});
//ページネーション
const wrapper = document.querySelector('.wrapper');
const paginationBtn1 = document.getElementsByClassName('pagination-btn')[0];
const paginationBtn2 = document.getElementsByClassName('pagination-btn')[1];

//クリックイベント
paginationBtn1.addEventListener('click',function() {
    //左にスライド
    wrapper.style.transform  = "translateX(0)";
    wrapper.style.transition  = "all 1s";
    //クラス追加、削除
    paginationBtn1.classList.add('pagination-btn-active');
    paginationBtn2.classList.remove('pagination-btn-active');
})
paginationBtn2.addEventListener('click',function() {
    //右にスライド
    wrapper.style.transform  = "translateX(-54vw)";
    wrapper.style.transition  = "all 1s";
    //クラス追加、削除
    paginationBtn2.classList.add('pagination-btn-active');
    paginationBtn1.classList.remove('pagination-btn-active');
})

//スライダーが一番右まで行ったらページネーションの色を変える
const ariaLabel4 = document.querySelector('[aria-label="4 / 8"]');
wrapper.addEventListener('mousemove',function() {
    if(ariaLabel4.className === 'swiper-slide slide swiper-slide-active') {
        paginationBtn2.classList.add('pagination-btn-active');
        paginationBtn1.classList.remove('pagination-btn-active');
    } else {
        paginationBtn1.classList.add('pagination-btn-active');
        paginationBtn2.classList.remove('pagination-btn-active');
    }
});
