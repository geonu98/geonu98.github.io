import type { NavItem, SocialLink } from "../types/portfolio";

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "박건우",
  role: "Backend Developer",
  intro: [
    "구조와 상태 흐름을 기준으로 문제를 다시 정의하고, 구현 이후에도 성능 병목을 측정하며 개선하는 백엔드 개발자입니다.",
    "정산 분석, 인증 정책, 캐시 전략, 예약 집계 구조 같은 도메인 문제를 실제 서비스 관점에서 설계하고 다듬어왔습니다.",
  ],
  about: [
    "단순히 기능을 구현하는 것보다, 사용자가 겪는 문제를 어떤 도메인 구조와 데이터 흐름으로 풀어낼지 먼저 고민합니다. CRUD를 넘어 상태 전이, 데이터 정합성, 변경 비용을 줄이는 방향으로 설계하는 것을 중요하게 생각합니다.",
    "프로젝트에서는 정산 파일 표준화, 인증 정책 단일화, 캐시 전략 재구성, 예약 집계 모델 설계처럼 구조가 서비스 경험에 직접 영향을 주는 문제를 주로 다뤄왔습니다. 구현 이후에는 로그와 지표를 바탕으로 병목을 추적하고 개선하는 과정에도 꾸준히 관심을 두고 있습니다.",
    "Spring Boot, PostgreSQL, Redis, React 기반으로 서비스를 설계하고 구현해왔으며, 팀이 유지보수하기 쉬운 구조와 명확한 책임 분리를 지향합니다.",
  ],
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/geonu98" },
  { label: "Email", href: "mailto:checkitbomb@gmail.com" },
];
