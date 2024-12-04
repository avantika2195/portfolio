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
  { name: 'React.js', level: 92, category: 'Frontend' },
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Languages' },
  { name: 'Node.js', level: 77, category: 'Backend' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  { name: 'Express.js', level: 70, category: 'Backend' },
  { name: 'Tailwind CSS', level: 94, category: 'Frontend' },
  { name: 'Redux', level: 70, category: 'Frontend' },
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