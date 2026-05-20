export const skillset = {
  react: [
    'Component-based Architecture',
    'State Management',
    'Routing and Hooks',
    'API Integration',
    'Context and State Management Libraries',
    'Use Typescript with React',
  ],
  javascript: [
    'Core Language Profiency',
    'Asyncronous programming',
    'DOM Manipulation',
    'Nodules and Bundling',
    'Error Handling',
    'Data Structures',
  ],
  NextJs: [
    'Static Site Generation (SSG)',
    'Server-Side Rendering (SSR)',
    'API Routes',
    'Next Middleware',
    'Typescript Integration',
    'Next Auth',
    'API Integration',
  ],
  NodeJs: [
    'Core Node.js Concepts',
    'Express.js Framework',
    'Routing and Middleware',
    'Database Integration',
    'Authentication and Authorization',
    'Error Handling',
    'REST API',
    'Testing',
  ], laravel: [
    'Laravel Brezee',
    'CRUD Operations',
    'Database Integration',
    'CSS Framework Integration',
    'Authentication and Authorization',
  ],
  mongodb: [
    'Database Design',
    'CRUD Operations',
    'Mongoose',
    'Data Validation',
    'Atlas',
  ],
  postgree: [
    'Database Design',
    'CRUD Operations',
    'Data Validation',
    'PostgreeSQL',
  ],
  figma: [
    'UI Design',
    'Prototyping',
    'Design System',
    'Responsive Design',
    'Slicing UI from figma',
  ],
  adonisjs: [
    'CRUD Operations',
    'Database Integration',
    'CSS Framework Integration',
    'Authentication and Authorization',
  ],
  redis: [
    'Cacthing',
    'Session',
    'Queue',
    'Rate Limiting',
  ],
  docker: [
    'Containerization',
    'Image',
    'Container',
    'Dockerfile',
  ],
  golang: [
    'Gin',
    'GORM',
    'Database Integration',
    'REST API',
    'Testing',
  ]
};

export const projects = [
  {
    id: 'nutrify',
    name: 'Nutrify',
    about: 'Website Tracking Nutrisi Makanan',
    stacks:
      '(MERN Stack) ReactJS, NodeJS, ExpressJS, MongoDB, Figma, Postman, Redux.',
    image: '/images/nutrify.png',
    url: 'https://nutrify.live/',
    githubUrl: 'https://github.com/RioAldie',
    timeline: 'Feb 2023 - Apr 2023',
    longDescription: 'Nutrify is a comprehensive application built with the MERN stack that helps users track their daily nutritional intake. My goal was to create a fluid, intuitive experience where users can easily search for foods, log their meals, and visualize their progress toward their dietary goals over time.',
    features: [
      {
        title: 'Calorie Tracking Dashboard',
        description: 'The core feature is a real-time tracking dashboard. When users input a food item, the system queries the nutrition database and instantly calculates daily macro-nutrient targets, visually representing them in clean, responsive charts.',
        image: '/images/nutrify.png'
      },
      {
        title: 'Custom Meal Builder',
        description: 'To allow maximum flexibility, I built a custom meal builder feature. It enables users to combine multiple ingredients, calculate cumulative calories accurately, and save their favorite recipes for easy logging in the future.',
        image: '/images/nutrify.png'
      }
    ]
  },
  {
    id: 'bakatanak',
    name: 'Bakatanak',
    about: 'Sistem Pakar Identifikasi Minat Bakat Anak',
    stacks:
      '(MERN Stack) ReactJS, NodeJS, ExpressJS, MongoDB, NextJS, Figma.',
    image: '/images/bakatanak.png',
    url: 'https://bakatanak.site/',
    githubUrl: 'https://github.com/RioAldie',
    timeline: 'May 2023 - July 2023',
    longDescription: 'Bakatanak is an expert system designed to help parents identify their children\'s talents and interests. Leveraging a Next.js frontend with SSR capabilities for high performance and an Express/MongoDB backend to handle expert-rule processing, it provides accurate, dynamic assessment results.',
    features: [
      {
        title: 'Interactive Assessment Engine',
        description: 'I engineered the assessment engine to dynamically load questions based on previous answers. This ensures that the evaluation is tailored to the child\'s responses, improving the accuracy of the talent identification algorithms.',
        image: '/images/bakatanak.png'
      },
      {
        title: 'Detailed Analytical Reports',
        description: 'Once the assessment is complete, the application generates a comprehensive analytical report. I implemented a customized dashboard where parents can read expert advice, see statistical breakdowns, and download results natively from the browser.',
        image: '/images/bakatanak.png'
      }
    ]
  },
  {
    id: 'startmov',
    name: 'StartMov',
    about: 'Find a Best Movies from TMDB',
    stacks: 'ReactJS, NextJS, Figma, API, Tailwind',
    image: '/images/startmov.png',
    url: 'https://startmov-app.vercel.app/',
    githubUrl: 'https://github.com/RioAldie',
    timeline: 'Aug 2023 - Sep 2023',
    longDescription: 'StartMov is a modern movie discovery platform integrated with the TMDB API. The app is highly optimized using Next.js and Tailwind CSS, focusing on a visually stunning dark-mode UI with fluid animations to showcase trending films and detailed cinematic information.',
    features: [
      {
        title: 'Live TMDB API Integration',
        description: 'I connected the platform directly to the global TMDB database. Designing the fetching logic allowed me to instantly pull popular, trending, and top-rated movies across multiple genres and efficiently handle pagination on the frontend.',
        image: '/images/startmov.png'
      },
      {
        title: 'Dynamic Search & Filtering',
        description: 'To provide a seamless discovery experience, I built a client-side search system with debouncing and advanced filter options. Users can search for movies dynamically without page reloads, filtering by rating and release year.',
        image: '/images/startmov.png'
      }
    ]
  },
];

export const certificates = [
  {
    url: 'https://www.dicoding.com/certificates/1OP81851QZQK',
    title: 'Become React Web Development Expert',
    imageCompany: '/images/dicoding-header-logo.png',
    companyName: 'Dicoding Indonesia',
    id: '1',
  },
  {
    url: 'https://www.dicoding.com/certificates/EYX4YJ7MJZDL',
    title: 'Learn Fundamental Web Application With React',
    imageCompany: '/images/dicoding-header-logo.png',
    companyName: 'Dicoding Indonesia',
    id: '2',
  },
  {
    url: 'https://www.dicoding.com/certificates/MRZMLLDMNXYQ',
    title: 'Become Front-End Web Developer Expert',
    imageCompany: '/images/dicoding-header-logo.png',
    companyName: 'Dicoding Indonesia',
    id: '3',
  },
  {
    url: 'https://skilvul.com/challenges/danone-platform-gizi-seimbang-new/student/cl5nid3ud060z01lqq90ki8ex',
    title:
      'Danone - Kampus Merdeka: Product Innovation Challenge (Completion with Honor)',
    imageCompany: '/icon/skilvul-logo.svg',
    companyName: 'Skilvul',
    id: '4',
  },
  {
    url: 'https://skilvul.com/courses/uiux-design-mastery/student/cl5nid3ud060y01lqu6ae0s23',
    title: 'UI/UX (User Interface / User Experience) Design Mastery',
    imageCompany: '/icon/skilvul-logo.svg',
    companyName: 'Skilvul',
    id: '5',
  },
];

export const experiences = [
 
{
  id: '2',
  role: 'Software Developer',
  company: 'PT. Eagle Sporting Goods',
  duration: 'March 2025 - Present',
  jobdesk: [
    'Developed and maintained internal systems used to support daily operational and business processes.',

    'Worked closely with the team to discuss system flow, feature requirements, and implementation for ongoing projects.',

    'Handled bug fixing, troubleshooting, testing, and system maintenance to keep applications running smoothly.',

    'Helped improve user experience by contributing to feature planning and UI/UX discussions.',

    'Supported both technical and non-technical tasks, including user support, testing, and system-related discussions.',

    'Used AI tools in daily development workflow for planning, reviewing, debugging, and speeding up development process through structured prompts and documentation context.'
  ],
  logo: '/images/pt_egs.png'
},
{
  id: '1',
  role: 'Full Stack Developer Intern',
  company: 'Dinas Sosial Nganjuk',
  duration: 'April 2024 - May 2024',
  jobdesk: [
    'Developed a web-based complaint reporting system for cases related to violence against women and children.',

    'Built the application using Next.js and Firebase for authentication, database, and backend services.',

    'Implemented features for submitting, managing, and tracking complaint reports.',

    'Worked on responsive UI and basic system flow to improve accessibility and reporting efficiency.'
  ],
  logo: '/images/dinsos.png'
}
];
