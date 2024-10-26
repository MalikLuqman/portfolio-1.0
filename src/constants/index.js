import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vuejs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  cqIcon,
  fiverr,
  threejs,
  bot,
  database,
  scss,
  postgresql,
  python,
  openai,
  material,
  aws,
  xd,
  lcs,
  bb,
  mpd,
  leankitReplica,
  movieApp,
  tarotPro,
  wizlink,
  weaponhire,
  telegram,
  coverlettersco,
  facebook,
  twitter,
  linkedin,
  instagram,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Developer",
    icon: database,
  },
  {
    title: "AI/ML Enthusiast",
    icon: bot,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    level: 90,
  },
  {
    name: "CSS 3",
    icon: css,
    level: 85,
  },
  {
    name: "SCSS",
    icon: scss,
    level: 80,
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: 90,
  },
  {
    name: "Python",
    icon: python,
    level: 85,
  },
  {
    name: "TypeScript",
    icon: typescript,
    level: 85,
  },
  {
    name: "React JS",
    icon: reactjs,
    level: 90,
  },
  {
    name: "Next JS",
    icon: nextjs,
    level: 85,
  },
  {
    name: "Vue JS",
    icon: vuejs,
    level: 80,
  },
  {
    name: "OpenAI",
    icon: openai,
    level: 90,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    level: 65,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    level: 70,
  },
  {
    name: "Material UI",
    icon: material,
    level: 70,
  },
  {
    name: "Node JS",
    icon: nodejs,
    level: 85,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    level: 80,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    level: 70,
  },
  {
    name: "AWS",
    icon: aws,
    level: 60,
  },
  {
    name: "Three JS",
    icon: threejs,
    level: 65,
  },
  {
    name: "git",
    icon: git,
    level: 80,
  },
];

const experiences = [
  {
    title: "Full Stack Developer & ML Engineer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#1dbf73",
    date: "Feb 2023 - Present",
    points: [
      "Worked remotely with on different projects with clients from all over the world.",
      "Took a leader role in full stack applications",
      "Integrated the trending OpenAI's models like ChatGPT, Dall-e and whisper",
      "Technical Skills: React, Vue, Next, Tailwind, Python, Flask, Google API, OpenAI API, Linux, Git",
      "Soft Skills: Project Management, Communication skills.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "CQ Technologies",
    icon: cqIcon,
    iconBg: "#000",
    date: "Feb 2022 - Dec 2022",
    points: [
      "Worked remotely with highly professional and cooperative environment.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Technical Skills: React TypeScript, Express, Node JS, Vanila JS, Redux, Sass CSS, PostgreSQL, Testing with Jest, Ubuntu Linux, Linux tools, Scripting, Git.",
      "Soft Skills: Teamwork, Time Management, Communication, Presentation skills.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#1dbf73",
    date: "Mar 2020 - Dec 2021",
    points: [
      "Developed and maintained web applications using simple HTML, CSS and ES6 Javascript.",
      "Converted designs in Figma/XD into responsive web pages using CSS and Bootstrap.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Worked with clients to understand their requirements and delivered solutions that met their needs.",
      "Contributed to the development and maintenance of internal tools and frameworks.",
      "Kept up-to-date with the latest trends and technologies in web development.",
    ],
  },
];

const projects = [
  {
    name: "Wizlink - Mobile Landing Page Builder with AI",
    description:
      "A web application that allows users to create mobile landing pages using ChatGPT and Dall-e. It also allows users to create their own templates and use them to create landing pages.",
    tags: [
      {
        name: "VueJS",
        color: "blue-text-gradient",
      },
      {
        name: "Python Flask",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: wizlink,
    sourceCodeLink: "",
    websiteLink: "https://ai.wiz.link/",
  },
  {
    name: "Tarot Pro",
    description:
      "A web application that allows users to get their tarot card readings using ChatGPT. It also allows users to ask questions and get answers in context of their questions from AI.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: tarotPro,
    sourceCodeLink: "",
    websiteLink: "https://tarot.pro/",
  },
  {
    name: "Cover Letters Co",
    description:
      "An AI powered web application that allows users to generate cover letters for their job applications. It also allows users to upload their resumes and generate cover letters based on their resumes and job description they are applying for.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: coverlettersco,
    sourceCodeLink: "",
    websiteLink: "https://coverletters.co/",
  },
  {
    name: "Weaponhire",
    description:
      "An AI powered web application that allows users to rent weapons for a specific period of time. It also allows users to view the details of the weapons and book them for a specific period of time.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: weaponhire,
    sourceCodeLink: "",
    websiteLink: "https://weaponhire.com/",
  },
  {
    name: "Crypto News Bot",
    description:
      "A telegram/discord bot that scrapes articles from popular crypto website, summarizes it using ChatGPT, generates a thumbnail using Dall-e and sends it to the channels/groups.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Telegram API",
        color: "pink-text-gradient",
      },
    ],
    image: telegram,
    sourceCodeLink: "",
    websiteLink: "",
  },
  {
    name: "E-Lawyer",
    description:
      "A web application that allows users to find lawyers and book appointments with them. It also allows lawyers to manage their appointments and clients.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: lcs,
    sourceCodeLink: "https://github.com/DanishAqib/lcs-fe",
    websiteLink: "",
  },
  {
    name: "Online Task Management App",
    description:
      "Almost learnkit.com replica. 1 year project, worked with qualified team involving extensive front-end and back-end features.",
    tags: [
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
    ],
    image: leankitReplica,
    websiteLink: "",
  },
  {
    name: "Missing Person Detector",
    description:
      "A desktop application that uses OpenCV and Python to detect missing people in a video stream. It also stores the data of missing people in a database.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: mpd,
    sourceCodeLink:
      "https://github.com/DanishAqib/missing-person-detection-system",
    websiteLink: "",
  },
  {
    name: "Movie Theatre",
    description:
      "A web application that allows users to browse and view details of all the movies to date. Implemented with free API from themoviedb.org.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: movieApp,
    sourceCodeLink: "https://github.com/DanishAqib/Movie-App",
    websiteLink: "",
  },
];

const contactLinks = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/malikluqman",
  },
  {
    name: "GitHub",
    icon: github,
    url: "https://github.com/MalikLuqman",
  },
  {
    name: "Facebook",
    icon: facebook,
    url: "https://www.facebook.com/malik.luqman.5036",
  },
  {
    name: "Twitter",
    icon: twitter,
    // url: "https://twitter.com/malikluqman5",
  },
  {
    name: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/malikk.luqman/",
  },
];

export { services, technologies, experiences, projects, contactLinks };
