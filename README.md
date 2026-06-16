# 조승혁 포트폴리오

화면 완성도와 접근성, 반응형 구현을 중심으로 정리한 웹 퍼블리셔 조승혁의 개인 포트폴리오 사이트입니다.

🔗 **[choslion.github.io/portfolio](https://choslion.github.io/portfolio/)**

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?logo=greensock&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?logo=threedotjs&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-222222?logo=github&logoColor=white)

---

## 소개

삼성카드 디지털채널을 3년간 운영하며 쌓은 화면 품질·접근성 개선 경험을 한 페이지에 담았습니다. Vue 3와 Vite로 만든 싱글 페이지로, Intro · About · Career · Project · Contact 섹션으로 이어집니다.

시각적인 인터랙션을 더하는 데 그치지 않고, 사용자가 내용을 자연스럽게 따라 읽도록 흐름을 짜고 디바이스별 사용성까지 함께 고려했습니다.

## 주요 구현

- **스크롤 인터랙션** — GSAP ScrollTrigger로 Career 섹션의 스티키 스크롤과 단계별 카운트업을 구현했습니다.
- **인트로 비주얼** — Three.js 와이어프레임 박스에 중력·충돌·마우스 타격을 반영한 물리 시뮬레이션과 aurora 그라데이션 배경으로 첫 화면 인상을 잡았습니다.
- **접근성·모션 배려** — 시맨틱 헤딩 구조와 색상 대비를 지키고, `prefers-reduced-motion`에 대응해 모션에 민감한 사용자도 무리 없이 볼 수 있게 했습니다.
- **반응형** — 데스크탑·태블릿·모바일 브레이크포인트마다 레이아웃과 인터랙션 방식을 조정했습니다.

## 기술 스택

| 구분 | 사용 기술 |
|------|-----------|
| Core | Vue 3 (`<script setup>`), Vite 5 |
| 스타일 | SCSS |
| 애니메이션 | GSAP + ScrollTrigger, AOS, Three.js |
| 아이콘 | FontAwesome, simple-icons |
| 배포 | GitHub Actions → GitHub Pages |

## 성능 (Lighthouse)

로컬 프로덕션 빌드(`npm run build` → `npm run preview`) 기준 측정값입니다.

| 카테고리 | 데스크탑 | 모바일 |
|----------------|:----:|:----:|
| Performance    |  75  |  53  |
| Accessibility  | 100  | 100  |
| Best Practices | 100  | 100  |
| SEO            | 100  | 100  |

접근성·베스트프랙티스·SEO는 전 항목 100점입니다. 3D 인트로(Three.js)는 `defineAsyncComponent`로 첫 페인트 이후 idle 시점에 마운트하고 웹폰트도 비차단으로 로드해 초기 렌더 부담을 줄였습니다. 모바일 Performance는 클라이언트 렌더 SPA와 3D 인트로 특성상 데스크탑보다 낮지만, CLS는 0.003으로 레이아웃 시프트는 거의 없습니다.

## 프로젝트 구조

```
portfolio/
├─ index.html              # Vite 엔트리 (메타태그·OG 포함)
├─ vite.config.js          # base: '/portfolio/', @ → src 별칭
├─ public/
│  └─ og-image.png         # 링크 공유용 OG 이미지
├─ src/
│  ├─ App.vue              # 섹션 조립 + AOS 초기화
│  ├─ main.js              # FontAwesome 아이콘 등록, 앱 마운트
│  ├─ components/
│  │  ├─ intro.vue         # Hero (단어 reveal, 타이프라이터, 마그네틱 버튼)
│  │  ├─ introObject.vue   # Three.js 박스 물리 인터랙션
│  │  ├─ introFx.vue       # aurora 블롭 배경
│  │  ├─ nav.vue           # 사이드 레일 도트 네비
│  │  ├─ about.vue         # 스킬 그룹
│  │  ├─ career.vue        # 경력 스티키 스크롤 카드
│  │  ├─ project.vue       # 프로젝트 목록
│  │  ├─ projectModule.vue # 프로젝트 카드 (이미지·영상 썸네일 지원)
│  │  ├─ contact.vue       # 이메일 복사·SNS
│  │  └─ scrollUI.vue      # 스크롤 진행바 + 맨 위로 버튼
│  └─ assets/css/          # SCSS 모듈 (_intro, _about, _career …)
└─ .github/workflows/deploy.yml  # 빌드 → Pages 배포
```

## 시작하기 (Getting Started)

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (Vite)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 배포

`main` 브랜치에 push하면 **GitHub Actions**가 자동으로 빌드 후 GitHub Pages에 배포합니다. ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))

```
push → main → Actions(build: npm ci + npm run build) → upload-pages-artifact → deploy-pages
```
