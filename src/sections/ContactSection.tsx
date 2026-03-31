import { SectionHeading } from "../components/SectionHeading";
import { SocialLinks } from "../components/SocialLinks";
import { socialLinks } from "../data/profile";

const contactNotes = [
  {
    title: "관심 있는 문제",
    description:
      "정산 처리, 인증 정책, 캐시 전략, 데이터 정합성처럼 구조가 바로 사용자 경험으로 이어지는 문제에 관심이 있습니다.",
  },
  {
    title: "협업 방식",
    description:
      "기능 구현보다 먼저 도메인 구조와 상태 흐름을 맞추고, 로그와 지표를 기준으로 병목을 줄이는 방식으로 일합니다.",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 animate-reveal">
      <SectionHeading
        eyebrow="Contact"
        title="프로젝트와 협업 이야기를 나눌 수 있습니다"
        description="새로운 기능보다 구조 개선과 안정성에 더 오래 남는 가치가 있다고 생각합니다. 아래 채널로 편하게 연락할 수 있습니다."
      />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
        <div className="rounded-3xl border border-white/6 bg-white/[0.03] p-6 sm:p-8">
          <SocialLinks items={socialLinks} />
        </div>
        <div className="grid gap-4">
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
      </div>
    </section>
  );
};
