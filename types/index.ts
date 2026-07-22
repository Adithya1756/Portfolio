export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
  link?: { label: string; href: string };
}

export interface EducationItem {
  period: string;
  institution: string;
  detail: string;
  score: string;
}

export interface ProjectFeature {
  label: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  tag: string;
  featured?: boolean;
  summary: string;
  description: string[];
  stack: string[];
  features: ProjectFeature[];
  architecture?: { title: string; detail: string }[];
  links?: { label: string; href: string }[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
