import { profile } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 animate-reveal">
      <SectionHeading
        eyebrow="About"
        title="구조와 데이터 흐름을 먼저 설계합니다"
        description="사용자 문제를 기능 단위로만 보지 않고, 상태 전이와 데이터 흐름까지 연결해서 설계하려고 합니다."
      />
      <div className="space-y-5 text-base leading-8 text-ink-200">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};
