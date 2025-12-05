import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with clients to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lomash is an exceptional developer who delivered our project on time and exceeded expectations.",
    name: "Client 1",
    designation: "CEO",
    company: "Tech Corp",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    name: "LomashStay",
    description:
      "Hotel Booking App. Tech: HTML, CSS, JS, Node.js, Express.js, Netlify.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lomashsrivastava/LomashStay-Hotel-Booking-App",
    netlify_link: "https://lomashstay.netlify.app/",
  },
  {
    name: "Advance Hotel Booking",
    description:
      "Advance Hotel Booking System. Tech: HTML5, CSS3, JS, Anime.js, Chart.js.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/lomashsrivastava/Hotel-Booking-Management-System",
    netlify_link: "https://lomashbookingsystem.netlify.app/",
  },
  {
    name: "Lomash Resume Matcher",
    description:
      "AI Resume Matcher. Tech: React, Vite, Tailwind, Python, FastAPI, AI/ML.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/lomashsrivastava/Resume-Matcher-With-AI",
    netlify_link: "https://lomashresumematcher.netlify.app/",
  },
  {
    name: "Laxmi Tour",
    description:
      "Tour & Travel Website. Tech: HTML5, CSS3, JS, GSAP, AI Simulation.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lomashsrivastava/Laxmi-Travels---Tour-And-Travel-Website-With-Package-AI-Integration",
    netlify_link: "https://laxmitour.netlify.app/",
  },
  {
    name: "Advance Contact Manager",
    description:
      "Contact Manager App. Tech: HTML5, CSS3, Vanilla JS, Local Storage.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/lomashsrivastava/Advance-Contact-Manager",
    netlify_link: "https://lomashcontact.netlify.app/",
  },
  {
    name: "Lomash Markets",
    description:
      "Ecommerce Store. Tech: HTML5, CSS3, Vanilla JS, E-commerce features.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/lomashsrivastava/Lomash-Market-Ecommerce-Store",
    netlify_link: "https://lomashmarkets.netlify.app/",
  },
  {
    name: "Advance Portfolio",
    description:
      "Advance Portfolio. Tech: HTML5, CSS3, Vanilla JS, AOS, Tilt.js.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lomashsrivastava/Portfolio-Website",
    netlify_link: "https://lomash.netlify.app/",
  },
  {
    name: "Hotel Booking Website",
    description:
      "Hotel Booking Website. Tech: ReactJS, NODEJS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "#",
    netlify_link: "https://lomashbooking1.netlify.app/",
  },
  {
    name: "SignIn Dashboard",
    description:
      "SignIn Dashboard. Tech: ReactJs, NodeJs, Python, Django.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "#",
    netlify_link: "https://lomashdashboard.netlify.app/signin",
  },
  {
    name: "React Login Dashboard",
    description:
      "React Login Dashboard. Tech: React, Create React App, CSS3.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lomashsrivastava/futuristic-login-react",
    netlify_link: "https://futuristicloginreact.netlify.app/",
  },
  {
    name: "3D ToDo App",
    description:
      "3D ToDo App. Tech: ReactJs, Node, Python.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "#",
    netlify_link: "https://lomashtodoai.netlify.app/",
  },
  {
    name: "Login Dashboard AI",
    description:
      "Login Dashboard AI. Tech: React Js, Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "#",
    netlify_link: "https://lomashlogin.netlify.app/",
  },
  {
    name: "Lomash UI",
    description:
      "Dashboard Project. Tech: HTML5, CSS3, JS, Canvas, TensorFlow.js.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lomashsrivastava/Advance-UI-Dashboard",
    netlify_link: "https://lomashui.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
