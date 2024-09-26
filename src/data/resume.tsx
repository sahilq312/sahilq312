import { Icons } from "@/components/icons";
import { image } from "framer-motion/client";
import { HomeIcon, NotebookIcon } from "lucide-react";
// import {githubissuetracker} from "../../public/githubissuetracker.mp4"

export const DATA = {
  name: "Sahil quraishi",
  initials: "./pfp.jpg",
  url: "https://avatars.githubusercontent.com/u/115611556?v=4",
  location: "Kolkata, India",
  locationLink: "",
  description:
    "Software Developer. I love building things and helping people. Not very active on Social Medias.",
  summary:
    "I'm Sahil quraishi, a passionate web developer with 1 year of experience in the field. Throughout my journey, I've built a range of exciting projects that showcase my skills and creativity, some of which are displayed below. My dedication to web development drives me to continually learn and innovate, bringing ideas to life through code. I thrive in collaborative environments, working effectively with cross-functional teams to deliver high-quality solutions. My experience in pair programming and participating in code reviews has enhanced my ability to write clean, maintainable code and contribute to a positive team dynamic.",
  avatarUrl: "/pfp.jpg",
  skills: [
    "React",
    "Prompt",
    "Shadcn UI",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Docker",
    "TailwindCSS",
    "Python",
    "Javascript",
    "HTML",
    "CSS",
    "Redux",
    "Jotia"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "quraishisahil04@gmail.com",
    tel: "+91 8918578831",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sahilq312",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sahilq312",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full stack developer",
      logoUrl:"https:",
      start: "",
      end: "present",
      description:
        "I've worked on creating web apps and backend API's for clients , also did some content writting for documentations and marketing purposes.",
    },
  ],

  contributions:[
    {
      title:"Devfolio-Hackerthon-Project",
      github:"https://github.com/palisadoesfoundation",
      image:"",
    },
    {
      title:"FlutFast",
      github:"https://github.com/asyncapi",
      image:""
    }
  ],

  projects: [
    {
      title: "LetterLoop",
      href: "https://chatcollect.com",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Letterloop is a emailmarketing and newsletter service that provide users ot bussnes owners to connect to thier subsribers . The main target for letterloop is to make it scalable and a cheaper option to send email.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://borrow.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/borrow.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Dizo",
      href: "https://dizo.vercel.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A whiteboard application build with modern technology like nextjs help you to draw your imagination on screen and share to other people . Dizo main focus is on collaboration thats why i working on the collaboration feature .",
      technologies: ["Next.js", "Javascript", "TailwindCSS", "Aceternity UI"],
      links: [
        {
          type: "Website",
          href: "https://dizo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahilq312/dizo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dizo.png",
    },
    {
      title: "Shopz",
      href: "https://shopz-two.vercel.app",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Shopz is a ecommerce website for selling and buying products. It is a full stack application built with nextjs and prisma.",
      technologies: [
        "Next.js",
        "Javascript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Next-Auth",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://shopz-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahilq312/shopz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shopz.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Devfolio Hosted by Google",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
  ],
  hackathons: [
    {
      title: "Devfolio Hosted by Google",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
