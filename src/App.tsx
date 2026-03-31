import { useEffect, useRef } from "react";
import { Sidebar } from "./components/Sidebar";
import { navItems, profile, socialLinks } from "./data/profile";
import { useActiveSection } from "./hooks/useActiveSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

const App = () => {
  const activeSection = useActiveSection();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let frame = 0;

    const updatePointer = (x: number, y: number) => {
      container.style.setProperty("--pointer-x", `${x}px`);
      container.style.setProperty("--pointer-y", `${y}px`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        updatePointer(event.clientX, event.clientY);
      });
    };

    const handlePointerLeave = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        updatePointer(window.innerWidth * 0.82, window.innerHeight * 0.18);
      });
    };

    handlePointerLeave();
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="portfolio-shell min-h-screen bg-surface-950 text-ink-100"
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />
        <div className="portfolio-spotlight absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,209,197,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-14 px-6 py-12 sm:px-10 lg:flex-row lg:gap-20 lg:px-12 lg:py-0">
        <div className="lg:w-[42%] lg:min-w-[360px] xl:w-[38%]">
          <Sidebar
            name={profile.name}
            role={profile.role}
            intro={profile.intro}
            navItems={navItems}
            activeSection={activeSection}
            socialLinks={socialLinks}
          />
        </div>

        <main className="flex-1 lg:py-24">
          <div className="space-y-24 pb-16">
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
