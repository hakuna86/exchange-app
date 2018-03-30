### 실시간으로 들어오는 매수, 매도에 대해서 호가창을 보여주는 어플리케이션

#### 문제해결 방법
  - 백엔드
     > 소켓통신을 구현하여, 제공된 txt파일을 json으로 파싱후, 1초 간격으로 이벤트를 호출하는 방식으로 구성됨
  
  - 프론트엔드
     > 실시간으로 받은 매수, 매도 데이터를 모든 컴퍼넌트가 공유 할수 있는 구조로 설계
     > 데이터를 받는 즉시 가격별 내림차순으로 정렬, 정렬의 방식읍 삽입정렬 알고리즘을 차용
     > 데이터를 가공 할 때, 항상 정렬된 리스트를 이용해서 작업을 수행하므로, 서치 작업등의 오버헤드가 적음
     > 단점으로는 해당 데이터가 끝 부분에 있을때는 처리 오버헤드가 증가되는 점
     > src > lib에 공통 정렬 및 머지함수를 구현해서, 유틸의 형식으로 사용하도록 구성
     > TDD 방법으로 테스트 설계후, 해당 기능을 구현했음

#### Back End 구성
    - 서버 사이드 프레임워크 :  NodeJS, ExpressJS
    - Websocket : 소켓통신 방식을 사용하기 위한 라이브러리 [socket.io] https://socket.io/

#### Front End 구성
    - SPA(Single Page Applictaion)
    - Framework : ReactJS
    - Websocket : socket.io.clinet https://www.npmjs.com/package/socket.io-client
    - 리덕스를 구현하여, 매수, 매도가격 데이터를 스토어에서 관리 및 변경하는 구성

#### 프로젝트 실행 방법

##### 프론트 엔드와 서버에 각각 의존성을 설치하고, 프론트 엔드에 빌드를 수행 후 서버를 실행한다.
> 서버에 패키지를 설치한후 서버를 기동하면, 빌드된 결과물이 보입니다. http://localhost:5000
서버 실행
  1. cd backend
  2. npm install
  3. node index.js // localhost:5000 번으로 실행된다.

프론트엔드
  1. cd exchange-app
  2. yarn install
  3. yarn start // localhost:3000 으로 개발용 서버가 열린다.