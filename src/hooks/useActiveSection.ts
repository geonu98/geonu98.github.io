import { useEffect, useState } from "react";
import type { NavSectionId } from "../types/portfolio";

const sectionIds: NavSectionId[] = ["about", "skills", "projects", "contact"];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<NavSectionId>("about");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id as NavSectionId);
        }
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return activeSection;
};
