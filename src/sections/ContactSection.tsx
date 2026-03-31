import { SectionHeading } from "../components/SectionHeading";

const contactNotes = [
  {
    title: "관심 있는 문제",
    description:
      "정산 처리, 인증 정책, 캐시 전략, 데이터 정합성처럼 구조 설계와 사용자 경험이 함께 연결되는 백엔드 문제에 관심이 있습니다. 기능 단위 구현보다 상태와 데이터 흐름을 먼저 정리하고, 실제 서비스에서 오래 유지되는 구조를 고민합니다.",
  },
  {
    title: "요즘 집중하는 것",
    description:
      "대량 데이터 처리 파이프라인과 성능 병목을 로그와 수치로 추적하는 방식에 관심을 두고 있습니다. 최근에는 상태 모델 분리, SQL 기반 집계, PostgreSQL COPY, 실행계획 중심 최적화를 꾸준히 파고 있으며, 변화에 유연하게 적응하는 개발자가 되기 위해 계속 배우고 있습니다.",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 animate-reveal">
      <SectionHeading
        eyebrow="Contact"
        title="프로젝트와 협업 이야기를 나눌 수 있습니다"
        description="새로운 기능보다 구조 개선과 안정성에 더 오래 남는 가치가 있다고 생각합니다. 함께 풀고 싶은 문제와 일하는 방식을 간단히 정리했습니다."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {contactNotes.map((note) => (
          <article
            key={note.title}
            className="rounded-3xl border border-white/6 bg-white/[0.03] p-5"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-500">
              {note.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-200">{note.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
