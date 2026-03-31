export type NavSectionId = "about" | "skills" | "projects" | "contact";

export interface NavItem {
  id: NavSectionId;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  name: string;
  summary: string;
  period: string;
  type: string;
  role: string;
  techStack: string[];
  highlights: string[];
  details: string[];
  links: ProjectLink[];
  image: string;
  imageAlt: string;
}
