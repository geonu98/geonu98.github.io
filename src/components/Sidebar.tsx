import type { NavItem, NavSectionId, SocialLink } from "../types/portfolio";
import { SocialLinks } from "./SocialLinks";

interface SidebarProps {
  name: string;
  role: string;
  intro: string[];
  navItems: NavItem[];
  activeSection: NavSectionId;
  socialLinks: SocialLink[];
}

export const Sidebar = ({
  name,
  role,
  intro,
  navItems,
  activeSection,
  socialLinks,
}: SidebarProps) => {
  const handleNavigate = (id: NavSectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="flex w-full max-w-xl flex-col justify-between gap-10 lg:sticky lg:top-0 lg:h-screen lg:py-24">
      <div className="space-y-10">
        <div className="space-y-5">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-500">
              Portfolio
            </p>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl">
                {name}
              </h1>
              <p className="mt-3 text-xl font-semibold text-ink-100">{role}</p>
            </div>
          </div>
          <div className="max-w-md space-y-3 text-base leading-7 text-ink-200">
            {intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <nav className="hidden lg:block" aria-label="Section navigation">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = item.id === activeSection;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(item.id)}
                    className={`group flex items-center gap-4 text-left font-mono text-sm uppercase tracking-[0.24em] transition ${
                      isActive ? "text-ink-50" : "text-ink-300 hover:text-ink-100"
                    }`}
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive
                          ? "w-16 bg-accent-500"
                          : "w-8 bg-ink-300/40 group-hover:w-12 group-hover:bg-accent-500/70"
                      }`}
                    />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-ink-300">
          Links
        </p>
        <SocialLinks items={socialLinks} compact />
      </div>
    </aside>
  );
};
