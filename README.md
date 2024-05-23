## 💬 프로젝트 소개

CAMUS로 채팅을 안전하게 즐겨요!

---

## 📚 목차

- [🎯 기획 배경](#plans)
- [🙇 팀원 소개](#members)
- [🔨 기술 스택](#skills)
- [🚀 실행 방법 및 배포 주소](#installation)
- [💡 주요 기능 및 역할](#features)

---

<a name="plans"></a>

## 🎯 기획 배경

<!-- TODO: notion - 기획서 - 기획 배경 참고, 변경 필요 -->

채팅을 할 때에 불시의 욕설 공격...

---

<a name="members"></a>

## 🙇 팀원 소개

|           [김세진](https://github.com/nijesmik)           |          [전민정](https://github.com/dolmeengii)          | 
| :--------------------------------------------------------: | :----------------------------------------------------: |
| <img src="https://github.com/nijesmik.png" width="120" /> | <img src="https://github.com/dolmeengii.png" width="120"> | 

---

<a name="skills"></a>

## 🔨 기술 스택

- Language: Typescript
- Core: Next 14.2.0
- Styling: Sass(Scss)
- State: Zustand

---

<a name="installation"></a>

## 🚀 실행 방법 및 배포 주소

```
// 패키지 라이브러리 설치
npm install

// 개발 환경 실행
npm run dev

// 빌드 파일 생성
npm run build
```

- 📱 front-domain : https://www.camus.life, https://biz.camus.life
- 🛠 back-server : https://api.camus.life
- 🔗 back-swagger : https://api.camuse.life/swagger-ui/index.html

---

<a name="features"></a>

## 💡 주요 기능 및 역할

### 🖥️ 랜딩 페이지 - `전민정`

|                    개인 회원                     |                      기업 회원                       |
|:--------------------------------------------:|:------------------------------------------------:|
| <img src="assets/landing.gif" width='500px'> | <img src="assets/landing-biz.gif" width='500px'> |


### 🔑 로그인 페이지 - `전민정`

|                         로그인                         |
|:---------------------------------------------------:|
| <img src="assets/login-personal.gif" width='400px'> |

### 👤 회원 가입 페이지 - `전민정`

|                        개인 회원                         |                      기업회원                       |
|:----------------------------------------------------:|:-----------------------------------------------:|
| <img src="assets/signup-personal.gif" width='400px'> | <img src="assets/signup-biz.gif" width='400px'> |

### 🧾 튜토리얼 페이지- `전민정`

|                         채널 생성                         |                        필터링 강도                        |
|:-----------------------------------------------------:|:----------------------------------------------------:|
| <img src="assets/tutorial-channel.gif" width='400px'> | <img src="assets/tutorial-filter.gif" width='400px'> |

### 🙋‍♂️ 채팅 페이지 - `김세진`

|                       채팅 리스트                       |                     채팅 방                      |
|:--------------------------------------------------:|:---------------------------------------------:|
| <img src="assets/chatting-list.png" width='200px'> | <img src="assets/chatting.gif" width='600px'> |


### 🕊️ 채널 관리 페이지 - `김세진`

|                      채널 리스트                       |                        채널 생성                        |
|:-------------------------------------------------:|:---------------------------------------------------:|
| <img src="assets/channel-list.png" width='200px'> | <img src="assets/channel-create.gif" width='600px'> | 

|                        채널 수정                        |                     채널 링크 공유                      |
|:---------------------------------------------------:|:-------------------------------------------------:|
| <img src="assets/channel-update.gif" width='400px'> | <img src='assets/channel-link.gif' width='400px'> |


### 🗂️ 프로필 페이지 - `전민정`, `김세진`

|                        프로필                        |                       프로필 수정                        |
|:-------------------------------------------------:|:---------------------------------------------------:|
| <img src="assets/profile-page.png" width='200px'> | <img src="assets/profile-update.gif" width='600px'> |

### ⚙️ 문의하기 페이지 - `전민정`

|                        일반 문의                        |                        도입 문의                         |
|:---------------------------------------------------:|:----------------------------------------------------:|
| <img src="assets/support-assist.gif" width='400px'> | <img src="assets/support-request.gif" width='400px'> |

[//]: # (### 🃏 docs 페이지 - `전민정`)

[//]: # (| 서비스 소개 | 서비스 사용 가이드 | REST API | Java Script |)

[//]: # (|:------:|:----------:|:--------:|:-----------:|)

[//]: # (| <img src="assets/gifs/home-card.gif" width="400px"> |)


### 🧾 요금 페이지 - `전민정`

|                    요금 소개                    |
|:-------------------------------------------:|
| <img src="assets/charge.gif" width='400px'> |

### 📂 폴더 구조 및 아키텍처 설계 - `김세진`

```
.
├── public
│   ├── animations
│   ├── fonts
│   └── images
└── src
    ├── app
    ├── components
    ├── containers
    ├── hooks
    ├── lib
    ├── states
    ├── styles
    └── types
```