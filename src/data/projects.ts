import type { ProjectItem } from "../types/portfolio";

export const projects: ProjectItem[] = [
  {
    name: "Sellivu",
    summary:
      "서로 다른 정산 파일을 자동으로 통합·검증해 수작업 정산 확인 부담을 줄이고, 주문·수수료·일별 정산 차이를 분석할 수 있도록 만든 정산 분석 서비스",
    period: "2024 - Present",
    type: "개인 프로젝트",
    role: "기획, 백엔드 설계 및 구현, 프론트엔드 구현",
    techStack: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "active-run 기반 분석 구조 전환",
      "정산 파일 표준화 및 joinKey 병합",
      "100k~500k CSV 성능 최적화",
    ],
    details: [
      "saved analysis와 workspace가 섞여 restore만으로 변경 상태가 되던 문제를 해결하기 위해, restore 직후 clean / 실제 수정 시 dirty 상태 모델로 재설계했습니다.",
      "현재 화면이 어떤 분석 결과를 보고 있는지 불명확한 문제를 줄이기 위해, active-run 기반 분석 구조로 전환했습니다.",
      "서로 다른 정산 파일 형식을 직접 맞춰 비교해야 하는 문제를 줄이기 위해, 헤더 정규화·표준 필드 매핑·숫자/날짜 파싱 기반 내부 표준 구조를 설계했습니다.",
      "파일별 기준이 달라 직접 비교하기 어려운 문제를 해결하기 위해, productOrderNo 우선 / orderNo 보조 규칙의 joinKey 병합과 snapshot 재구성을 적용했습니다.",
      "주문·수수료·일별 정산 간 정산금액, 수수료, 실수령액을 교차 검증할 수 있도록 분석 로직을 구현했습니다.",
      "100k~500k 더미 CSV와 [PERF] 로그를 기준으로 병목을 추적하고, JPA에서 PostgreSQL COPY 기반 write path로 전환해 입력 성능을 개선했습니다.",
      "100k 기준 snapshot batch insert 시간을 13.3초에서 8.5초로 줄였고, 이후 COPY write path 최적화로 7.7초에서 1.5~1.8초 수준까지 단축했습니다.",
      "하이브리드 snapshot 구조, 스트리밍 build, chunk COPY 실험 후 성능 악화 시 롤백하면서 최종 안정 버전을 확정했습니다.",
      "GitHub Actions 기반 CI를 구축해 active-run 전환, 타입 정리, 성능 리팩터링 과정의 프론트·백엔드 빌드 회귀를 자동 검증했습니다.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/geonu98/sellivu" },
      { label: "Deploy", href: "https://sellivu.vercel.app/" },
      {
        label: "상세문서",
        href: "https://www.notion.so/Sellivu-33494741d9a680ba9094c305bbefd1f5?source=copy_link",
      },
    ],
  },
  {
    name: "Stock Dashboard",
    summary:
      "인증 정책 재설계와 캐시 전략 최적화를 통해 서비스 안정성을 개선한 주식 포트폴리오 관리 서비스",
    period: "2024",
    type: "개인 프로젝트",
    role: "기획, 백엔드 설계 및 구현, 프론트엔드 구현",
    techStack: [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Redis",
      "PostgreSQL",
      "React",
    ],
    highlights: [
      "JWT 발급 조건으로 인증 정책 단일화",
      "외부 API 호출 3회 → 1회 감소",
      "refreshPromise 동시성 제어",
    ],
    details: [
      "이메일 인증 여부를 여러 계층에서 검사하던 구조를 JWT 발급 조건에서 통제하는 구조로 재설계해 인증 정책을 한 지점으로 집중했습니다.",
      "7/30/90일 차트 데이터를 각각 캐싱하던 구조를 MAX_DAYS 단일 캐시 + 서버 sliceTail 방식으로 변경해 외부 API 호출 수를 3회에서 1회로 줄였습니다.",
      "AccessToken 만료 시 복수 요청이 동시에 refresh를 호출해 401이 폭주하던 문제를 Axios 인터셉터의 refreshPromise 동시성 제어로 해결했습니다.",
      "외부 시세 API 지연과 rate limit 상황에서 홈 화면 전체가 흔들리던 문제를 HomeSnapshot Redis 캐시와 fallback 구조로 완화해 응답 안정성을 확보했습니다.",
      "application-local / application-prod 프로파일 분리와 환경변수 관리를 통해 배포 환경의 JWT·OAuth·CORS 오류를 정리했습니다.",
    ],
    links: [
      { label: "GitHub BE", href: "https://github.com/geonu98/stock-backend" },
      { label: "GitHub FE", href: "https://github.com/geonu98/stock-frontend" },
      { label: "Deploy", href: "https://stock-frontend-five-delta.vercel.app/" },
      {
        label: "상세문서",
        href: "https://www.notion.so/Stock-Dashboard-Spring-Boot-33494741d9a6801f9726ca615bfe16da?source=copy_link",
      },
    ],
  },
  {
    name: "스터디카페 예약 서비스",
    summary:
      "수용량 기반 예약 집계 모델과 좌표 Grid 수집 구조를 설계한 스터디카페 예약·그룹 플랫폼",
    period: "2023",
    type: "팀 프로젝트",
    role: "백엔드 설계 및 구현",
    techStack: ["Spring Boot", "JPA", "MySQL", "Kakao API", "Komoran"],
    highlights: [
      "Capacity 기반 예약 집계 모델 설계",
      "Pass 타입 분기 도메인 설계",
      "그룹 참여 정합성 보장",
    ],
    details: [
      "좌석 단위가 아닌 Capacity 기반 예약 집계 모델을 설계하고 구현했습니다.",
      "시간 구간 overlap 조건과 SUM 집계 구조를 적용해 예약 가능 여부를 계산했습니다.",
      "Pass 타입 분기 도메인을 설계하고 구현해 이용권 정책을 분리했습니다.",
      "Kakao API를 실시간 호출하지 않고, Grid 좌표 기반 수집 후 DB 적재하는 구조를 설계하고 구현했습니다.",
      "Komoran 형태소 분석을 활용해 검색 품질을 개선했습니다.",
      "그룹 참여 로직을 @Transactional로 묶어 인원 정합성을 보장했습니다.",
    ],
    links: [
      {
        label: "상세문서",
        href: "https://www.notion.so/Yeogiska-33494741d9a680799e1ddb1e15bedff3?source=copy_link",
      },
    ],
  },
];

