import { SectionHeading } from "../components/SectionHeading";
import { skillGroups } from "../data/skills";

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24 animate-reveal">
      <SectionHeading
        eyebrow="Skills"
        title="문제를 푸는 데 익숙한 도구들"
        description="백엔드 중심으로 설계와 구현을 진행하되, 필요한 프론트엔드와 배포 자동화까지 직접 연결할 수 있는 구성을 선호합니다."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-panel transition duration-300 hover:border-accent-500/18 hover:shadow-panelStrong"
          >
            <h3 className="text-lg font-semibold text-ink-50">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(27,43,64,0.92),rgba(19,32,50,0.92))] px-3 py-1.5 text-sm text-ink-100 shadow-[0_10px_24px_rgba(5,12,22,0.18),inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
