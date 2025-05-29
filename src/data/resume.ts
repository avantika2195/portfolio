import { Experience, Skill, Project } from '../types';

export const experiences: Experience[] = [
  {
    title: 'Frontend Developer Intern',
    company: 'Elysian Tech Leverage',
    period: 'July 2024 - August 2024',
    description: 'Frontend development using React and Next.js. Implemented responsive designs.',
  },
  
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 92, category: 'Frontend' },
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'AngularJS', level: 70, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 94, category: 'Frontend' },
  { name: 'Bootstrap', level: 85, category: 'Frontend' },
  { name: 'Redux', level: 70, category: 'Frontend' },

  // Backend
  { name: 'Node.js', level: 87, category: 'Backend' },
  { name: 'Express.js', level: 70, category: 'Backend' },

  // Languages
  { name: 'TypeScript', level: 88, category: 'Languages' },
  { name: 'JavaScript', level: 94, category: 'Languages' },
  { name: 'C++', level: 75, category: 'Languages' },
  { name: 'C', level: 80, category: 'Languages' },
  { name: 'Python', level: 60, category: 'Languages' },
  { name: 'SQL', level: 75, category: 'Languages' },
  { name: 'HTML5', level: 95, category: 'Languages' },
  { name: 'CSS3', level: 92, category: 'Languages' },

  // Database
  { name: 'MongoDB', level: 85, category: 'Database' },
  { name: 'PostgreSQL', level: 75, category: 'Database' },

  // Tools & Platform
  { name: 'Git', level: 91, category: 'Tools & Platform' },
  { name: 'GitHub', level: 90, category: 'Tools & Platform' },
  { name: 'REST APIs', level: 85, category: 'Tools & Platform' },
  { name: 'Figma', level: 80, category: 'Tools & Platform' },
  { name: 'Canva', level: 90, category: 'Tools & Platform' },
  { name: 'Vercel', level: 82, category: 'Tools & Platform' },

  // Methodologies
  { name: 'Agile', level: 75, category: 'Methodologies' },
  { name: 'SDLC', level: 78, category: 'Methodologies' },

  // Soft Skills (optional, if needed in the same array)
  { name: 'Problem Solving', level: 85, category: 'Soft Skill' },
  { name: 'Technical Communication', level: 90, category: 'Soft Skill' },
  { name: 'Team Collaboration', level: 96, category: 'Soft Skill' },
  { name: 'Adaptability', level: 90, category: 'Soft Skill' },
  { name: 'Code Debugging', level: 84, category: 'Soft Skill' },
];


export const projects: Project[] = [
  {
    title: 'Khana Khazana ',
    description: 'Khana Khazana is a web application built using React JS and Tailwind CSS that allows users to search and find recipes, along with details like labels, ingredients, health labels.',
    technologies: ['React', 'Node.js', 'Axios', 'Tailwind css'],
    imageUrl: 'https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=2048x2048&w=is&k=20&c=0UD2e_KMbkkMcx4j9ZaxGf-z1nMHxch9hi3_0BQmuAo=',
    demoUrl: 'https://khana-khazana-psi-six.vercel.app/',
    repoUrl: 'https://github.com/avantika2195/Khana-Khazana',
  },
  {
    title: 'Task Manager',
    description: 'Developed in Angular, it features authentication, a dashboard, and task-specific components. Features User Authentication: Register and login functionality with secure routing for authorized users.',
    technologies: ['Angular.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
    demoUrl: 'https://task-manager-ecru-five.vercel.app/',
    repoUrl: 'https://github.com/avantika2195/Task-Manager',
  },
  {
    title: 'AI-assistant',
    description: 'AI-assistant in order to help virtually impaired people.',
    technologies: ['React', 'Node.js', 'Typescript'],
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    demoUrl: 'https://ai-assistant-virtually-impaired.vercel.app/',
    repoUrl: 'https://github.com/avantika2195/AI-Assistant-virtually-impaired',
  },
];
