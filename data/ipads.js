/**
 * Compare 섹션에 표시되는 각 제품의 데이터는 구조가 동일하고, 제품이 추가되거나 삭제될 수 있습니다.
 * 따라서 코드의 반복을 줄이고, 제품이 추가되거나 삭제될 때마다 HTML, CSS를 추가하거나 삭제해야 하는 번거로움을 줄이기 위해 각 제품의 데이터를 객체화하여 배열로 관리합니다.
 */

export default [
  {
    thumbnail: './images/compare_ipad_pro.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad Pro',
    tagline: '궁극의 iPad란<br />이런 것.',
    price: 999000,
    url: '/ipad-pro/'
  },
  {
    thumbnail: './images/compare_ipad_air.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1', '#88AEBF'],
    name: 'iPad Air',
    tagline: '강력하다. 다채롭다.<br />경이롭다.',
    price: 779000,
    url: '/ipad-air/'
  },
  {
    thumbnail: './images/compare_ipad_10_2.png',
    colors: ['#68696D', '#E2E3E5'],
    name: 'iPad',
    tagline: '만족스러운 성능.<br />기분 좋은 가격.',
    price: 449000,
    url: '/ipad-10.2/'
  },
  {
    thumbnail: './images/compare_ipad_mini.png',
    colors: ['#68696D', '#E2E3E5', '#E8D2CE', '#B9B8D1'],
    name: 'iPad Pro',
    tagline: '메가급 성능.<br />크기만 미니.',
    price: 649000,
    url: '/ipad-mini/'
  }
]