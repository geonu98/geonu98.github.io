import { ProjectAccordion } from "../components/ProjectAccordion";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 animate-reveal">
      <SectionHeading
        eyebrow="Projects"
        title="서비스 문제를 구조로 풀어낸 작업들"
        description="핵심 프로젝트 3개만 추려 구조 설계, 성능 개선, 정책 정리 관점에서 정리했습니다. 항목을 열면 상세 내용을 확인할 수 있습니다."
      />
      <div className="space-y-5">
        {projects.map((project, index) => (
          <ProjectAccordion
            key={project.name}
            project={project}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </section>
  );
};
