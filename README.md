# 🥝 kiwIT Mockup (React Native)

kiwIT 앱의 mockup이자 React Native를 활용한 앱 제작 템플릿. 실제 앱 개발은 Swift, Flutter(android)로 진행 (가제: Proper IT)

## 사용 기술

- Typescript
- React Native (v. 0.72.5)
- Expo Modules: Secure Store, Assets, Preload, etc
- React Navigation
- Mobx
- Styled Components
- React Query

## Navigators

- React Navigation: Stack Navigation, Bottom Tab navigation
- Props and Params: /src/navigators/types.tsx

```
│────SignedInNav
│       │
│       │─MainTabNav
│       └─Other Screens
│
└────SignedOutNav
        │
        │─SignIn Screen
        └─SignUp Screen
```

## Screens

### 🏠 홈, 마이페이지

| <img src="https://github.com/Sevenfold777/kiwit-mockup/assets/88102203/a61da971-42d6-4316-87c8-6c257c3126f0" width=200 /> | <img src="https://github.com/Sevenfold777/kiwit-mockup/assets/88102203/70037d2f-041f-4a7d-8983-17a52e02e30e" width=200 /> |
| :-----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|                                                            홈                                                             |                                                        마이 페이지                                                        |
|                                                                                                                           |                                                                                                                           |

### 📖 강의 학습

| <img src="https://github.com/Sevenfold777/kiwit-mockup/assets/88102203/825883d6-1946-486e-ae36-655304886112" width=200 /> | <img src="https://github.com/Sevenfold777/kiwit-mockup/assets/88102203/6a09b264-7ff8-4860-946f-8406b9e1e895" width=200 /> | <img src="https://github.com/Sevenfold777/kiwit-mockup/assets/88102203/9cb393cf-7d49-4242-bd33-8c164f77d175" width=200 /> |
| :-----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|                                                           강의                                                            |                                                    세부 챕터 및 콘텐츠                                                    |                                                      학습 화면 예시                                                       |
|                                                                                                                           |                                                                                                                           |

### ✏️ 문제 풀기

| <img src="https://github.com/Sevenfold777/kiwit-mockup/assets/88102203/4e005e08-dd89-494a-81ec-14e00bf2cdc8" width=200 /> | <img src="https://github.com/Sevenfold777/kiwit-mockup/assets/88102203/f9c4c80c-c4e5-4539-9b72-9ffbfbf99f36" width=200 /> | <img src="https://github.com/Sevenfold777/kiwit-mockup/assets/88102203/0fbef2b5-a496-44aa-9b3a-0f821ff66088" width=200 /> |
| :-----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|                                                        문제 리스트                                                        |                                                문제 검색 (검색 필터 예시)                                                 |                                                       GPT 면접 예시                                                       |
|                                                                                                                           |                                                                                                                           |                                                                                                                           |

## Project Directories

```
.bundle
__tests__
android
ios
.eslintrc
.gitignore
.prettierrc.js
.watchmanconfig
Gemfile
Gemfile.lock
babel.config.json
jest.config.js
metro.config.js
tsconfig.json
README.md
package.json
yarn.lock
index.js
app.json
App.tsx
src
│────api
│
│────assets
│
│────components
│
│────navigators
│
│────screens
│
│────stores
│
│────Config.tsx
│
└────RootNavigation.tsx
```
