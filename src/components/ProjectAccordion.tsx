import { useState } from "react";
import type { ProjectItem, ProjectLink } from "../types/portfolio";

interface ProjectAccordionProps {
  project: ProjectItem;
  defaultOpen?: boolean;
}

const getPreviewLinks = (project: ProjectItem) => {
  if (project.name === "Sellivu") {
    const github = project.links.find((link) => link.label === "GitHub");
    const detail = project.links.find((link) => link.label === "상세문서");
    const deploy = project.links.find((link) => link.label === "Deploy");

    return [github, detail, deploy].filter((link): link is ProjectLink => Boolean(link));
  }

  if (project.name === "Stock Dashboard") {
    const githubBe = project.links.find((link) => link.label === "GitHub BE");
    const deploy = project.links.find((link) => link.label === "Deploy");
    const githubFe = project.links.find((link) => link.label === "GitHub FE");
    const detail = project.links.find((link) => link.label === "상세문서");

    return [githubBe, deploy, githubFe, detail].filter((link): link is ProjectLink => Boolean(link));
  }

  return project.links;
};

const getPreviewLinkLayout = (project: ProjectItem) => {
  if (project.name === "Sellivu") {
    return {
      containerClass: "grid grid-cols-2 gap-2 lg:max-w-[240px]",
      itemClass: (label: string) =>
        label === "Deploy" ? "col-span-2 justify-center" : "col-span-1",
    };
  }

  if (project.name === "Stock Dashboard") {
    return {
      containerClass: "grid grid-cols-2 gap-2 lg:max-w-[260px]",
      itemClass: () => "col-span-1",
    };
  }

  return {
    containerClass: "flex flex-wrap gap-2 lg:max-w-[240px]",
    itemClass: () => "",
  };
};

export const ProjectAccordion = ({
  project,
  defaultOpen = false,
}: ProjectAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const previewLinks = getPreviewLinks(project);
  const previewLinkLayout = getPreviewLinkLayout(project);

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(19,32,50,0.98),rgba(13,23,38,0.96))] p-6 shadow-[0_30px_90px_rgba(3,10,18,0.5),0_0_0_1px_rgba(255,255,255,0.03),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:border-accent-500/26 hover:shadow-[0_34px_110px_rgba(3,10,18,0.58),0_0_0_1px_rgba(79,209,197,0.08),inset_0_1px_0_rgba(255,255,255,0.1)]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative z-10 w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-ink-300">
            <div className="flex flex-wrap items-center gap-3">
              <span>{project.type}</span>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent-500/35 bg-accent-500/18 text-xl font-semibold text-accent-400 shadow-[0_8px_24px_rgba(20,184,166,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] transition group-hover:border-accent-500/60 group-hover:bg-accent-500/24 group-hover:text-ink-50">
              {isOpen ? "−" : "+"}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-ink-50 transition group-hover:text-accent-400">
              {project.name}
            </h3>
            <p className="max-w-3xl text-sm leading-7 text-ink-200 sm:text-base">
              {project.summary}
            </p>
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-50">
              <span className="h-px w-10 bg-accent-500/55" />
              <span>{isOpen ? "클릭해서 접기" : "클릭해서 상세 보기"}</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-ink-200">
              <span className="mr-2 font-medium text-ink-100">Role</span>
              {project.role}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-accent-500/15 bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(240px,0.75fr)] lg:items-start">
            <ul className="grid gap-2 text-sm leading-6 text-ink-200">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-500">
                Links
              </p>
              <div className={previewLinkLayout.containerClass}>
                {previewLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className={`inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-ink-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-accent-500/50 hover:text-accent-400 ${previewLinkLayout.itemClass(link.label)}`}
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </button>

      <div
        className={`relative z-10 grid transition-all duration-300 ${
          isOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 border-t border-white/8 pt-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
            <div>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-accent-500">
                Detail
              </h4>
              <ul className="space-y-3 text-sm leading-7 text-ink-200 sm:text-base">
                {project.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-ink-300/70" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-accent-500">
                  Detail Links
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-ink-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-accent-500/50 hover:text-accent-400"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-500">
                  참고 이미지
                </p>
                <div className="overflow-hidden rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] shadow-panel">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="aspect-[16/10] h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
