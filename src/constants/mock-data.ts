import { Subject } from '@/types';

export const MOCK_DATA: Subject[] = [
  // Business Administration
  {
    id: 1,
    name: 'Principles of Management',
    code: 'BA101',
    department: 'Business Administration',
    description:
      'Introduces core management concepts including planning, organizing, leading, and controlling within organizations.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'BA205',
    name: 'Financial Accounting',
    department: 'Business Administration',
    description:
      'Covers fundamental accounting principles, financial statements, and basic financial analysis.',
    createdAt: new Date().toISOString(),
  },

  // Conputer Science
  {
    id: 3,
    code: 'CS101',
    name: 'Introduction to Programming',
    department: 'Conputer Science',
    description:
      'Teaches basic programming concepts such as variables, control structures, and functions using a high-level language.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    code: 'CS210',
    name: 'Data Structures',
    department: 'Conputer Science',
    description:
      'Explores common data structures including arrays, linked lists, stacks, queues, trees, and hash tables.',
    createdAt: new Date().toISOString(),
  },

  // Information Technology
  {
    id: 5,
    code: 'IT110',
    name: 'IT Fundamentals',
    department: 'Information Technology',
    description:
      'Provides an overview of computer systems, networking basics, operating systems, and IT support concepts.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    code: 'IT230',
    name: 'Network Administration',
    department: 'Information Technology',
    description:
      'Focuses on network configuration, management, security, and troubleshooting in enterprise environments.',
    createdAt: new Date().toISOString(),
  },

  // Mathematics
  {
    id: 7,
    code: 'MATH101',
    name: 'Calculus I',
    department: 'Mathematics',
    description:
      'Introduces limits, derivatives, and applications of differential calculus.',
    createdAt: new Date().toISOString(),
  },

  {
    id: 8,
    code: 'MATH220',
    name: 'Linear Algebra',
    department: 'Mathematics',
    description:
      'Covers vectors, matrices, systems of linear equations, and their applications in science and engineering.',
    createdAt: new Date().toISOString(),
  },

  // Software Engineering
  {
    id: 9,
    code: 'SE201',
    name: 'Software Design',
    department: 'Software Engineering',
    description:
      'Examines software design principles, design patterns, and architectural styles for scalable systems.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 10,
    code: 'SE310',
    name: 'Software Testing and Quality Assurance',
    department: 'Software Engineering',
    description:
      'Introduces testing strategies, test automation, and quality assurance practices in software projects.',
    createdAt: new Date().toISOString(),
  },
];
