https://soozynn.vercel.app

#### 프로젝트를 개발하며..

개발을 하면서 누구나 맞닥뜨리는 문제들이 있을 것이다. 이런 부분들에 대해서 정리해두면, 기억에 더 남기도 하고 나중에 글을 읽으면서도 아, 이땐 이런 문제에 직면했었구나를 볼 수 있어 좋다. 그래서 이번 개인 블로그 사이드 프로젝트에도 사소한 고민거리도 하나하나 적어보려고 한다.

> requestAnimationFrame: 애니메이션 최적화 API

- setInterval 타이머 지연 및 블로킹 현상 / 타이머 드리프트 해결 -> requestAnimationFrame
  처음에는 현지 시간이 업데이트 되는 로직을 setInterval과 setTimeout을 사용하여 자바스크리브로 개발하였다. setInterval을 타이머 드리프트 현상이 꽤 길게 나타났고, setTimeout은 그보다는 적었지만, 시간이 업데이트 될 때에 맞추어 완벽하게 동작하지는 않았다. 또한, setInterval 같은 경우 브라우저의 다른 탭 화면을 보거나 브라우저가 최소화되어 있을 때 계속 타이머가 돌아 콜백을 호출하기 때문에 시스템 리소스 낭비를 초래하고 불필요한 전력을 소모하게 만든다. 반면 위 API는 페이지가 비활성화 된 상태면 페이지 화면 그리기 작업도 브라우저에 의해 일시 중지됨으로 CPU 리소스나 배터리 수명을 낭비하지 않게 된다. 이 밖에도 Animation frames 큐에서 처리되기 때문에 실행이 뒤쳐지거나 하는 현상을 감소시킬 수 있다. 마이크로 태스크 큐, 매크로 태스크 큐에서는 알고있었지만, 애니메이션 프레임 큐에 대해서는 이번 기회에 더 공부해볼 수 있었다.

  useEffect내에서 requestAnimationFrame를 등록해주어 시간이 업데이트 될 때마다 브라우저가 리페인트 할 때에 맞춰 시간을 업데이트 해줌으로써 타이머 드리프트 문제를 해결했다.

  해당 API에 대해 잘 정리해둔 블로그가 있어 다시보기용으로 링크를 첨부해둔다.
  블로그[https://inpa.tistory.com/entry/%F0%9F%8C%90-requestAnimationFrame-%EA%B0%80%EC%9D%B4%EB%93%9C]

> Intl.DateTimeFormat API

- 기능을 구현하기 전에 mdn을 통해서 업데이트된 내역이 있는지 한번씩 확인하면서 작업을 하는 편인데, toLocaleTimeString API를 사용하려다가 Intl.DateTimeFormat API를 보게되었다. 로케일스트링은 현지화 문자열의 대규모 데이터베이스에서 검색을 수행해야하기에 잠재적으로 비효율적이라고 적혀있었다. 동일한 인수로 메서드가 여러 번 호출되는 경우 개체를 만들고 Intl.DateTimeFormat API 사용을 권장하고 있어 서울의 시간을 포맷팅할 때 이 API로 교체해주었다.

> useEffect의 캡처, useRef의 사용
