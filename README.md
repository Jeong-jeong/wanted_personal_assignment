# 목표는 취업이조 2팀

## 🚀 정보
[![Netlify Status](https://api.netlify.com/api/v1/badges/9ea3e503-0bd9-45e7-bf1f-1f7be27ed38d/deploy-status)](https://app.netlify.com/sites/personal-assignment-firstweek/deploys)


- [배포주소 바로가기](https://personal-assignment-firstweek.netlify.app)
- [회고 바로기기](https://velog.io/@jeongs/프리온보딩-3번째-과제-회고-2주차)

<br>
<br>

## 🛠 기술 스택
### **📚 Frameworkes & Libraries**

- react.js@17.0.2
- typescript@^4.5.5
- redux@^4.1.2
- redux-thunk@^2.4.1
- styled-components@^5.3.3
- axios@^0.25.0


### **🔧 Tools**

- webpack@^5.67.0
- commitizen@^4.2.4
- netlify

<br>
<br>

## 🧐 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/Jeong-jeong/wanted_personal_assignment1.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start
```

## 🙆‍♀️ 구현

### 필수 구현 사항 

- [x] 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시 
- [x] 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
- [x] 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
- [x] tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있던 tool tip은 닫히고 새로 클릭한 가구 tooltip만 노출
- [x] 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tooltip 출력
- [x] 할인율이 존재하는 경우 상단에 할인율 표시
- [x] 입점된 가구, 입점되지 않은 가구 다르게 표시



### 추가 구현 사항

- 데이터 저장
  - local storage에 저장된 데이터가 없을 경우에만 API 호출, 있을 경우 재사용하여 새로고침시에도 데이터가 날아가지 않게 구현
- Tooltip 위치 표시
  - 이미지의 width, height 절반씩 보다 pointX, pointY가 클 경우 말풍선과 tip의 위치가 변경
- 하단 슬라이드 구현
- 두 번이상 반복된 스타일들은 @styles/commonStyles에 재활용 가능하도록 저장

<br>
<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── config-overrides.js
├── package.json
├── public
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── apis
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── index.tsx
│   ├── pages
│   ├── react-app-env.d.ts
│   ├── redux
│   ├── setupTests.ts
│   ├── styles
│   ├── types
│   └── utils
├── tsconfig.json
├── tsconfig.paths.json
├── yarn-error.log
└── yarn.lock
```
