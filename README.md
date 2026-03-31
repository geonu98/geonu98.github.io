# Backend Developer Portfolio

React + Vite + TypeScript + Tailwind CSS 기반의 정적 포트폴리오입니다. GitHub Pages 배포를 기준으로 구성했고, 왼쪽 고정 소개 영역과 오른쪽 스크롤 콘텐츠 레이아웃을 사용합니다.

## 추천 저장소

- `geonu98.github.io`
  - URL: `https://geonu98.github.io`
  - 메인 포트폴리오 주소로 쓰기 가장 깔끔합니다.
- `portfolio`
  - URL: `https://geonu98.github.io/portfolio`
  - 서브 경로 배포가 필요할 때 적합합니다.

현재 `vite.config.ts`는 `GITHUB_REPOSITORY` 값을 기준으로 base 경로를 자동 계산합니다.
- 저장소명이 `geonu98.github.io`면 `/`
- 그 외 저장소명이면 `/<repo-name>/`

## 실행 방법

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## GitHub Pages 배포

1. GitHub에 저장소를 생성합니다.
2. 이 프로젝트를 `main` 브랜치에 푸시합니다.
3. GitHub 저장소 `Settings > Pages`에서 `Build and deployment`를 `GitHub Actions`로 설정합니다.
4. `main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 자동으로 빌드 및 배포합니다.

## 프로젝트 구조

```text
src/
  components/
    ProjectAccordion.tsx
    SectionHeading.tsx
    Sidebar.tsx
    SocialLinks.tsx
  data/
    profile.ts
    projects.ts
    skills.ts
  hooks/
    useActiveSection.ts
  sections/
    AboutSection.tsx
    ContactSection.tsx
    ProjectsSection.tsx
    SkillsSection.tsx
  types/
    portfolio.ts
  App.tsx
  index.css
  main.tsx
```

## 커스터마이징 포인트

- 프로필 정보: `src/data/profile.ts`
- 프로젝트 목록 및 링크: `src/data/projects.ts`
- 기술 스택 분류: `src/data/skills.ts`
- 색상과 폰트: `src/index.css`, `tailwind.config.js`

## 메모

- 현재는 더미 `Resume` 링크를 포함합니다. 실제 이력서 URL 또는 PDF 경로로 교체하면 됩니다.
- 프로젝트 이미지는 의존하지 않고 텍스트 중심 레이아웃으로 구성했습니다. 필요하면 각 프로젝트 항목에 썸네일 필드를 추가해 확장할 수 있습니다.
