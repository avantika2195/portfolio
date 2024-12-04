export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}