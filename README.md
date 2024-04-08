# iPad 반응형 웹 사이트
HTML, CSS, JavaScript를 이용한 iPad 반응형 웹 사이트입니다.

![iPad](https://github.com/sehyeongcho/ipad/assets/124948262/4ffd5088-03fb-493a-aab9-a6b8d5be95ad)

- Demo: <a href="https://ipad-gilt.vercel.app/" target="_blank">https://ipad-gilt.vercel.app/</a>

## 프로젝트 목표
- iPad 웹 사이트 클론을 통해 웹의 구조를 담당하는 HTML, 콘텐츠를 꾸며주는 시각적인 표현을 담당하는 CSS, 페이지를 동작시키는 동적 처리를 담당하는 JavaScript에 대한 이해도를 높입니다.
- 미디어 쿼리를 사용하여 디스플레이의 종류에 따라 적절한 레이아웃을 보여주는 반응형 웹 디자인(Responsive Web Design, RWD)을 설계합니다.
- Git을 이용한 버전 관리 및 Vercel을 이용한 지속적인 배포를 수행해 보는 것이 이 프로젝트의 목표입니다.

## 사용 기술
- HTML
- CSS
- JavaScript

## 학습 내용
- 애니메이션 효과를 적용하기 위해서는 `display: none`, `display: block`을 사용하면 안 되고, `visibility: hidden`, `visibility: visible`을 사용해야 합니다.
- 블록 요소에 `position: absolute`, `position: fixed`를 사용하면 가로 너비가 부모 요소의 가로 너비만큼 늘어나는 특징이 사라지기 때문에, 가로 너비가 콘텐츠의 가로 너비만큼 줄어듭니다.
- 이벤트 버블링이란, 한 요소에 이벤트가 발생하면 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작하고, 최상단의 부모 요소를 만날 때까지 반복되면서 핸들러가 동작하는 현상을 말합니다.
- `position: sticky`를 사용할 때는 top, right, bottom, left 중 최소 1개 이상 명시되어야 합니다.
- `position: sticky`는 부모 요소의 범위 안에서만 동작합니다. 부모 요소의 범위를 벗어나면 스크롤을 내릴 때 고정되어 있던 것이 올라가게 됩니다.
- Flex container의 flex item들은 블록 요소처럼 width, height 값을 지정할 수 있습니다.
- CSS 변수의 유효 범위: CSS 변수가 선언된 요소 자신을 포함한 모든 후손 요소에서 사용할 수 있습니다. 따라서 대부분의 경우 최상위 요소인 html 요소에서 변수를 선언합니다.
- `position: absolute`를 사용하게 되면 주변 요소와 상호 작용하지 않고 독립적인 요소가 되기 때문에 해당 요소가 있었던 부분은 사라지게 됩니다. 그러나 `position: absolute`를 사용하지 않고 `transform: translate(x, y)`를 사용하게 되면 주변 요소와 독립적이지 않기 때문에 원래 해당 요소가 있었던 영역은 비워진 채로 남아 있으면서 위치가 이동됩니다. 따라서 위치를 이동시킬 때 비어 있는 공간 없이 요소들이 채워지기를 원한다면 `position: absolute`를 사용해야 합니다.
- 인라인 요소는 margin, padding의 위아래에 해당하는 값을 정상적으로 가질 수 없습니다. 따라서 위아래에 해당하는 값을 정상적으로 가질 수 있게 하려면 블록 요소로 변경해 주어야 합니다.
- `margin: 0 auto`는 가운데 정렬하려는 요소가 부모 요소의 내부에 있어야 합니다. 가운데 정렬하려는 요소가 부모 요소보다 큰 경우에는 `margin: 0 auto`가 제대로 적용되지 않습니다. 이럴 때는 flex를 사용해서 가운데 정렬을 해주어야 합니다.
- JavaScript 파일에서 createElement 메소드를 사용해서 HTML 태그를 만들게 되면 메모리상에만 만들어지기 때문에 append 메소드를 사용해서 DOM에 넣어주어야 합니다.
