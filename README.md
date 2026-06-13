# 조승혁 포트폴리오

서비스 운영과 화면 품질 개선을 고민하는 웹 퍼블리셔 조승혁의 개인 포트폴리오 사이트입니다.

🔗 **[choslion.github.io/portfolio](https://choslion.github.io/portfolio/)**

---

## 소개

금융권 디지털채널 3년 운영, 웹 접근성 개선, GitHub Actions 기반 자동 배포 구축 경험을 한 페이지에 담은 싱글 페이지 포트폴리오입니다. Intro · About · Career · Project · Contact 섹션으로 구성됩니다.

주요 특징

- **스크롤 인터랙션**: GSAP ScrollTrigger 기반 Career 섹션 스티키 스크롤, 단계별 카운트업
- **인트로 인터랙션**: Three.js 기반 와이어프레임 박스 물리 시뮬레이션(중력·충돌·마우스/터치 타격), aurora 그라데이션 배경
- **접근성·모션 배려**: `prefers-reduced-motion` 대응, 터치/마우스 매체쿼리 분기, 시맨틱 헤딩 구조
- **반응형**: 데스크탑/태블릿/모바일 브레이크포인트별 레이아웃·인터랙션 조정

## 기술 스택

| 구분 | 사용 기술 |
|------|-----------|
| Core | Vue 3 (`<script setup>`), Vite 5 |
| 스타일 | SCSS |
| 애니메이션 | GSAP + ScrollTrigger, AOS, Three.js |
| 아이콘 | FontAwesome, simple-icons |
| 배포 | GitHub Actions → GitHub Pages |

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
│  │  ├─ projectModule.vue # 프로젝트 카드
│  │  ├─ contact.vue       # 이메일 복사·SNS
│  │  └─ scrollUI.vue      # 스크롤 진행바 + 맨 위로 버튼
│  └─ assets/css/          # SCSS 모듈 (_intro, _about, _career …)
└─ .github/workflows/deploy.yml  # 빌드 → Pages 배포
```

## 실행

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
