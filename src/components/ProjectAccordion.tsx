import { useState } from "react";
import type { ProjectItem } from "../types/portfolio";

interface ProjectAccordionProps {
  project: ProjectItem;
  defaultOpen?: boolean;
}

export const ProjectAccordion = ({
  project,
  defaultOpen = false,
}: ProjectAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <article className="group rounded-3xl border border-white/6 bg-white/[0.02] p-6 shadow-card transition duration-300 hover:border-accent-500/20 hover:bg-white/[0.04]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-sm text-ink-300">
                <span>{project.period}</span>
                <span className="h-1 w-1 rounded-full bg-ink-300/60" />
                <span>{project.type}</span>
              </div>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-ink-50 transition group-hover:text-accent-400">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-ink-200 sm:text-base">
                    {project.summary}
                  </p>
                </div>
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/35 bg-accent-500/18 text-xl font-semibold text-accent-400 transition group-hover:border-accent-500/60 group-hover:bg-accent-500/24 group-hover:text-ink-50">
                  {isOpen ? "−" : "+"}
                </span>
              </div>
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
                    className="rounded-full border border-accent-500/15 bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="grid gap-2 text-sm leading-6 text-ink-200">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-6 border-t border-white/8 pt-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.8fr)]">
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

            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-accent-500">
                Links
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-ink-100 transition hover:border-accent-500/50 hover:text-accent-400"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
