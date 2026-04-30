export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Invora",
    location: "Remote",
    period: "Apr 2026 – Present",
    current: true,
    bullets: [
      "Developing an enterprise-scale SaaS product using React, Redux Toolkit, Next.js, and TypeScript, with a focus on scalable front-end architecture",
      "Making user-centered design decisions throughout the development process to ensure intuitive and accessible UI",
      "Contributing to full-stack features, bridging client-side logic with overall product structure",
    ],
    accent: "var(--color-rose)",
  },
  {
    role: "Full-Stack Web Developer Intern",
    company: "JuniusTech",
    location: "Remote",
    period: "Jan 2026 – Mar 2026",
    current: false,
    bullets: [
      "Contributed to real-world web development projects within a professional Agile team environment, participating in daily standups, sprint planning, and task management using Juniflow — JuniusTech's custom Agile project management tool.",
      "Built responsive and dynamic user interfaces using React, TypeScript, and Tailwind CSS; collaborated through code reviews and pull requests to ensure code quality and consistency.",
      "Took on increasing back - end responsibility — built REST API modules with NestJS and MongoDB as part of Therhappy, a full- stack online therapy platform: JWT - based auth flows, admin approval pipeline, session booking system with an i18n(EN / TR) React frontend with strict TypeScript throughout.",
    ],
    accent: "var(--color-amber)",
  },
  {
    role: "Social Media Customer Relations Specialist",
    company: "Turkcell Global Bilgi · SunExpress Airlines",
    location: "İzmir, Turkey",
    period: "Oct 2021 – Feb 2025",
    current: false,
    bullets: [
      "Achieved over 100% customer loyalty growth by managing and responding to customer inquiries across Instagram, Twitter, and Facebook on an annual basis.",
      "Developed and executed a comprehensive social media content and engagement strategy to enhance SunExpress Airlines’ brand visibility and online reputation.",
      "Monitored brand - related and competitor social media trends to deliver strategic insights for B2B clients and support informed decision- making.",
      "Compiled and presented weekly KPI reports, including engagement analytics, audience demographics, and sentiment analysis, to guide strategic planning.",
      "Participated in B2B meetings to offer CRM solutions, define sales personas, and optimize social media - based sales strategies.",
    ],
    accent: "var(--color-mint)",
  },
];

export const skills = [
  {
    category: "Frontend",
    accent: "var(--color-rose)",
    bg: "rgba(227, 112, 131, 0.08)",
    border: "rgba(227, 112, 131, 0.18)",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & Database",
    accent: "var(--color-amber)",
    bg: "rgba(255, 184, 118, 0.08)",
    border: "rgba(255, 184, 118, 0.18)",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    category: "Tools",
    accent: "var(--color-mint)",
    bg: "rgba(180, 216, 212, 0.08)",
    border: "rgba(180, 216, 212, 0.18)",
    items: ["Git", "JIRA", "Vite", "Axios", "Chart.js", "AI Tools"],
  },
  {
    category: "Marketing & Strategy",
    accent: "var(--color-mauve)",
    bg: "rgba(162, 153, 184, 0.08)",
    border: "rgba(162, 153, 184, 0.18)",
    items: [
      "Social Media Marketing",
      "Brand Management",
      "Meta Business",
      "SEO",
      "Performance Marketing",
      "Influencer Marketing",
    ],
  },
];

export const projects = [
  {
    title: "Travel Trucks",
    subtitle: "Camper Van Rental Platform",
    role: "Solo Developer",
    period: "Apr 2026",
    description:
      "A camper van rental browsing platform with filtering by equipment and vehicle type, favourites management, and a booking form. Built with a focus on clean UX and responsive layout.",
    tech: ["React 19", "Redux Toolkit", "React Router v7", "Axios", "Tailwind CSS v4", "MUI Icons", "Vite", "Sonner", "react-photo-view", "react-day-picker"],
    github: "https://github.com/halenurgurel/travel-trucks",
    live: "https://halenur-gurel-travel-trucks.vercel.app/",
  },
  {
    title: "CinePink",
    subtitle: "Movie Discovery App",
    role: "Solo Developer",
    period: "Feb 2026 - Apr 2026",
    description:
      "A personal movie discovery app built with a bold pink aesthetic. Features movie browsing, search, and detailed film pages powered by a public movie API.",
    tech: ["React 19", "React Router v7", "Tailwind CSS v4", "Firebase", "TMDB API", "Axios", "Swiper", "MUI Icons", "Sonner"],
    github: "https://github.com/halenurgurel/cinepink",
    live: "https://cinepink.vercel.app/",
  },
  {
    title: "Slim Mom",
    subtitle: "Calorie Tracker App",
    role: "Team Leader · Scrum Master",
    period: "Mar 2026 – Apr 2026",
    description:
      "A full-stack calorie tracking application built during GoIT Node.js Bootcamp. Led team coordination and Agile workflow while delivering key features including user authentication, daily calorie calculation, food diary management, and product database search.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/halenurgurel/slim-moms",
    live: "https://goit-slim-moms.vercel.app/",
  },
  {
    title: "Money Guard",
    subtitle: "FinTech Project",
    role: "Team Leader · Scrum Master",
    period: "Mar 2026 – Apr 2026",
    description:
      "Led a team of 8 to build a React-based personal finance tracker. Managed sprint planning, task distribution, and Git workflow while contributing to core features including income/expense management, category-based statistics, and live exchange rates via Monobank API.",
    tech: ["React", "Redux Toolkit", "Chart.js", "Monobank API"],
    github: "https://github.com/halenurgurel/money-guard",
    live: "https://goit-react-money-guard.vercel.app/",
  },
  {
    title: "Cinemania",
    subtitle: "Movie Search App",
    role: "Scrum Master",
    period: "Jan 2026 – Feb 2026",
    description:
      "A collaborative cinema-themed web application built with a team of 7 developers as part of GoIT training. Features dynamic content rendering, DOM manipulation, and responsive design with an Agile-style Git workflow using branching and pull requests.",
    tech: ["Vanilla JavaScript", "HTML", "CSS", "Vite"],
    github: "https://github.com/halenurgurel/cinemania",
    live: "https://january-javascript-project.github.io/cinemania/",
  },
];

export const education = [
  {
    degree: "Full-Stack Web Developer Bootcamp",
    school: "GoIT Global",
    period: "2025 – 2026",
    accent: "var(--color-rose)",
    bullets: [
      "React, Redux Toolkit, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL",
      "Team Leader & Scrum Master on 2 graduation projects (Slim Mom, Money Guard)",
      "Agile workflow: sprint planning, daily standups, PR-based Git collaboration",
    ],
  },
  {
    degree: "Digital Marketing Bootcamp",
    school: "Digital Hub",
    period: "2024",
    accent: "var(--color-amber)",
    bullets: [
      "Performance marketing, SEO, Meta Business, Google Ads, influencer campaigns",
      "Content strategy, audience segmentation, and conversion funnel optimisation",
    ],
  },
  {
    degree: "BA Sociology (English)",
    school: "İzmir University of Economics",
    period: "2014 – 2019",
    detail: "Full scholarship",
    accent: "var(--color-mint)",
    bullets: [
      "Full merit scholarship — ranked in top percentile nationwide university entrance exam",
      "Focus on social research methods, consumer behaviour, and organisational dynamics",
    ],
  },
];

export const contact = {
  email: "halenur.gurel@hotmail.com",
  github: "https://github.com/halenurgurel",
  linkedin: "https://www.linkedin.com/in/halenurgurel/",
};
