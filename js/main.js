/**
 * 메인 페이지(index.html)에서 발생하는 동적인 상호 작용을 처리하는 파일입니다.
 */

import ipads from '../data/ipads.js';
import navigations from '../data/navigations.js';

// 장바구니!
// stopPropagation() 메소드를 사용하여 이벤트 버블링을 차단합니다. 이벤트 버블링을 차단하지 않으면 다음과 같은 문제가 발생합니다.
// 1. 장바구니 아이콘을 클릭했을 때, 장바구니 아이콘을 클릭하는 것은 장바구니 아이콘이 포함된 윈도우를 클릭하는 것이기도 하므로, 이벤트 버블링에 의해 showBasket() 함수와 hideBasket() 함수가 순차적으로 실행되어 장바구니 목록이 나타나지 않게 됩니다.
// 2. 위 문제를 해결하여 장바구니 목록이 정상적으로 나타났을 때, 장바구니 목록을 클릭하는 것은 장바구니 목록이 포함된 윈도우를 클릭하는 것이기도 하므로, 이벤트 버블링에 의해 hideBasket() 함수가 실행되어 장바구니 목록이 사라지게 됩니다.
// 위 문제를 해결하기 위해서는 장바구니 아이콘을 클릭하는 것은 순수하게 장바구니 아이콘만 클릭한 것으로 처리되어야 하고, 장바구니 목록을 클릭하는 것은 순수하게 장바구니 목록만 클릭한 것으로 처리되어야 합니다. 따라서 이벤트가 발생했을 때 최상단의 부모 요소를 만날 때까지 반복되면서 핸들러를 동작시키는 이벤트 버블링을 차단해야 합니다.
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', function (event) {
  event.stopPropagation();
  if (basketEl.classList.contains('show')) {
    hideBasket();
  } else {
    showBasket();
  }
});
basketEl.addEventListener('click', function (event) {
  event.stopPropagation();
});
window.addEventListener('click', function () {
  hideBasket();
});

function showBasket() {
  basketEl.classList.add('show');
}
function hideBasket() {
  basketEl.classList.remove('show');
}


// 헤더 검색!
const headerEl = document.querySelector('header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')];
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', function (event) {
  event.stopPropagation(); // 데스크탑 레이아웃에서 클릭 이벤트가 버블링되어, 모바일 레이아웃에서 searchTextFieldEl가 클릭된 상태로 변하는 것을 방지합니다.
  hideSearch();
});
searchShadowEl.addEventListener('click', hideSearch);

function showSearch() {
  headerEl.classList.add('searching');
  stopScroll();
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
  });
  searchDelayEls.forEach(function (el, index) {
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
  });
  setTimeout(function () {
    searchInputEl.focus();
  }, 600);
}
function hideSearch() {
  headerEl.classList.remove('searching');
  playScroll();
  // reverse() 메소드를 사용하면 대상 배열 원본이 변경되므로, showSearch() 함수에서 반전시킨 순서를 다시 반전시켜야 showSearch() 함수와 반대 순서로 전환 효과를 적용할 수 있습니다.
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's';
  });
  searchDelayEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's';
  });
  searchDelayEls.reverse(); // 배열의 순서를 원래대로 되돌립니다.
  searchInputEl.value = '';
}
function playScroll() {
  document.documentElement.classList.remove('fixed');
}
function stopScroll() {
  document.documentElement.classList.add('fixed');
}


// 헤더 메뉴 토글! (모바일 레이아웃)
// 화면의 가로 너비가 740px 이하일 때 생기는 헤더 메뉴 버튼에 대한 동적인 상호 작용을 처리합니다.
const menuStarterEl = document.querySelector('header .menu-starter');
menuStarterEl.addEventListener('click', function () {
  if (headerEl.classList.contains('menuing')) {
    headerEl.classList.remove('menuing');
    searchInputEl.value = '';
    playScroll();
  } else {
    headerEl.classList.add('menuing');
    stopScroll();
  }
});


// 헤더 검색! (모바일 레이아웃)
const searchTextFieldEl = document.querySelector('header .textfield');
const searchCancelEl = document.querySelector('header .search-canceler');
searchTextFieldEl.addEventListener('click', function () {
  headerEl.classList.add('searching--mobile');
  searchInputEl.focus();
});
searchCancelEl.addEventListener('click', function () {
  headerEl.classList.remove('searching--mobile');
});


// 동적인 상호 작용을 반응형으로 구현하고자 할 때, 이벤트 발생 시 특정 조건에 따라 클래스를 추가하고 삭제하는 방식으로 구현할 수 있습니다.
// 화면의 크기가 조정되어 레이아웃이 바뀔 때, 검색 모드가 종료되게 합니다.
window.addEventListener('resize', function () {
  if (window.innerWidth <= 740) {
    headerEl.classList.remove('searching');
  } else {
    headerEl.classList.remove('searching--mobile');
  }
});


// 내비게이션 메뉴 토글! (모바일 레이아웃)
const navEl = document.querySelector('nav');
const navMenuTogglerEl = navEl.querySelector('.menu-toggler');
const navMenuShadowEl = navEl.querySelector('.shadow');

navMenuTogglerEl.addEventListener('click', function () {
  if (navEl.classList.contains('menuing')) {
    hideNavMenu();
  } else {
    showNavMenu();
  }
});
navEl.addEventListener('click', function (event) {
  event.stopPropagation();
});
navMenuShadowEl.addEventListener('click', hideNavMenu);
window.addEventListener('click', hideNavMenu);
function showNavMenu() {
  navEl.classList.add('menuing');
}
function hideNavMenu() {
  navEl.classList.remove('menuing');
}


// 요소의 가시성 관찰 로직!
// info 클래스 요소가 처음으로 관찰되면 show 클래스를 추가하여 info 클래스 요소가 부드럽게 나타나게 할 수 있습니다.
const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('show');
  });
});
const infoEls = document.querySelectorAll('.info');
infoEls.forEach(function (el) {
  io.observe(el);
});


// 비디오 재생!
const video = document.querySelector('.stage video');
const playBtn = document.querySelector('.stage .controller--play');
const pauseBtn = document.querySelector('.stage .controller--pause');

playBtn.addEventListener('click', function () {
  video.play();
  // 비디오가 재생 중일 때는 일시정지 버튼이 활성화되어야 합니다. 따라서 재생 버튼을 숨김 처리하고, 일시정지 버튼을 숨김 처리 해제하여 일시정지 버튼이 보이게 합니다.
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide');
});
pauseBtn.addEventListener('click', function () {
  video.pause();
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide');
});


// '당신에게 맞는 iPad는?' 렌더링!
const itemsEl = document.querySelector('section.compare .items');
ipads.forEach(function (ipad) {
  const itemEl = document.createElement('div');
  itemEl.classList.add('item');

  let colorList = '';
  ipad.colors.forEach(function (color) {
    colorList += `<li style="background-color: ${color};"></li>`;
  });

  // VS Code 확장 프로그램 - Comment tagged templates
  itemEl.innerHTML = /* html */ `
    <div class="thumbnail">
      <img src="${ipad.thumbnail}" alt="${ipad.name}" />
    </div>
    <ul class="colors">
      ${colorList}
    </ul>
    <h3 class="name">${ipad.name}</h3>
    <p class="tagline">${ipad.tagline}</p>
    <p class="price">₩${ipad.price.toLocaleString('en-US')}부터</p>
    <button class="btn">구입하기</button>
    <a href="${ipad.url}" class="link">더 알아보기</a>
  `;

  itemsEl.append(itemEl);
});


// 푸터 내비게이션 맵 렌더링!
const navigationsEl = document.querySelector('footer .navigations');
navigations.forEach(function (nav) {
  const mapEl = document.createElement('div');
  mapEl.classList.add('map');

  let mapList = '';
  nav.maps.forEach(function (map) {
    mapList += /* html */ `<li>
      <a href="${map.url}">${map.name}</a>
    </li>`;
  });

  mapEl.innerHTML = /* html */ `
    <h3>
      <span class="text">${nav.title}</span>
      <span class="icon">+</span>
    </h3>
    <ul>
      ${mapList}
    </ul>
  `;

  navigationsEl.append(mapEl);
});


// 올해 연도 적용!
const thisYearEl = document.querySelector('span.this-year');
thisYearEl.textContent = new Date().getFullYear();


// 푸터 내비게이션 맵 아코디언! (모바일 레이아웃)
const mapEls = document.querySelectorAll('footer .navigations .map');
mapEls.forEach(function (el) {
  const h3El = el.querySelector('h3');
  h3El.addEventListener('click', function () {
    el.classList.toggle('active');
  });
});