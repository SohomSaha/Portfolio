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
  Unified_Mentor,
  sih,
  girlcode,
  bookbuzz,
  buildstack,
  chatapp,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX designer",
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
    title: "Web Developer intern",
    company_name: "Unified Mentor",
    icon: Unified_Mentor,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Contributed to the frontend of two projects, focusing on designing intuitive and user-friendly interfaces using HTML, CSS, JavaScript and React",
      "Designed and optimized the UI/UX for both projects, ensuring a seamless user-experience across devices.",
      "Implemented responsive design and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Smart India Hackathon",
    icon: sih,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Developed and integrated the frontend of the application using HTML, CSS, JavaScript, and React.js to provide a user-friendly interface for cloudburst detection.",
      "Collaborated with the team to connect the machine learning model to the backend, ensuring seamless integration with Flask and the OpenWeather API for real-time weather data retrieval.",
      "Contributed to the project's success by optimizing the application's performance and responsiveness, leading to our team's selection in the top 30 teams at the college level in the Smart India Hackathon.",
    ],
  },
  {
    title: "Open-source frontend developer",
    company_name: "GirlScript Summer of Code",
    icon: girlcode,
    iconBg: "#383E56",
    date: "Jan 2022 - March 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Echo Chat",
    description:"A real-time chat application with secure JWT authentication, personalized chat rooms, customizable themes, and seamless image handling via Cloudinary for an enhanced user experience.",
        tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      }
    ],
    image: chatapp,
    source_code_link: "https://github.com/SohomSaha/EchoChat",
  },
  {
    name: "BuildStack",
    description:"A platform to discover, share, and showcase innovative products with features like responsive design, user authentication, and seamless browsing of different product categories. \n",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: buildstack,
    source_code_link: "https://github.com/Enigma-52/Final-Year-Project-HITK",
  },
  {
    name: "BookBuzz",
    description:
      "A comprehensive platform for discovering and accessing online books, both free and paid. Features user authentication, a responsive interface, and seamless navigation. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: bookbuzz,
    source_code_link: "https://github.com/SohomSaha/bookbuzz",
  },
];

export { services, technologies, experiences, projects };
