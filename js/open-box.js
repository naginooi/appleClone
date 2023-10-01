import { store, mac, iPad, iPhone, watch, airPods, tv, entertainment, acc, service } from './header-menu.js';

const openBoxText = document.querySelector('.open-box-list-text');

const list = (menu) => {
  //엔터테인먼트, 액세서리
  if (menu.length === 3) {
    return `
    <ul class="main-text">
      <span>${menu[1].title}</span>
    </ul>
    <ul class="sub-text" id="1">
      <span>${menu[2].title}</span>
    </ul>
    `;
  } else {
    return `
    <ul class="main-text">
      <span>${menu[1].title}</span>
    </ul>
    <ul class="sub-text" id="1">
      <span>${menu[2].title}</span>
    </ul>
    <ul class="sub-text" id="2">
      <span>${menu[3].title}</span>
    </ul>
    `;
  }
};

// li 동적 구성
function appendLi(num1, q, menu) {
  for (let v of menu[num1].product) {
    let temp = `
    <li><a href="">${v}</a></li>
    `;
    $(q).append(temp);
  }
}

// menu list 동적 구성
function showList(menu) {
  document.querySelector('.open-box').style.visibility = 'visible';
  document.querySelector('.open-box').style.opacity = '1';
  $('.open-box-list-text').html('');
  openBoxText.insertAdjacentHTML('beforeend', list(menu));
  if (menu.length === 3) {
    appendLi(1, '.main-text', menu);
    appendLi(2, '#1', menu);
  } else {
    appendLi(1, '.main-text', menu);
    appendLi(2, '#1', menu);
    appendLi(3, '#2', menu);
  }
}

const menuList = [store, mac, iPad, iPhone, watch, airPods, tv, entertainment, acc, service];

// list 보여주기 반복문
for (const el of menuList) {
  const id = el[0].id;
  $(`.menu.${id}`).mouseover(function () {
    showList(el);
  });
}

//open box hover
for (let i = 0; i < $('.menu').length; i++) {
  $('.menu')
    .eq(i)
    .on('mouseover', function () {
      $('#header').css('backgroundColor', '#fbfbfd');
    });
  // 배경 선택시 hover out
  $('.open-box').on('mouseover', function (e) {
    if (e.target == e.currentTarget) {
      e.currentTarget.style.visibility = 'hidden';
      e.currentTarget.style.opacity = '0';
      $('#header').css('backgroundColor', '#f5f5f7');
    }
  });

  // 로고, 검색, 장바구니 hover out
  $('.logo, .search, .bag').on('mouseover', function () {
    document.querySelector('.open-box').style.visibility = 'hidden';
    document.querySelector('.open-box').style.opacity = '0';
    $('#header').css('backgroundColor', '#f5f5f7');
  });

  // hover out 시 배경 원래대로
  $('#header').on('mouseleave', function () {
    document.querySelector('.open-box').style.visibility = 'hidden';
    document.querySelector('.open-box').style.opacity = '0';
    $('#header').css('backgroundColor', '#f5f5f7');
  });
}
