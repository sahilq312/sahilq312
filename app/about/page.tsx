import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link"
import ConnectLinks from "@/components/ConnectLink";
const page = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          About Me
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <Section heading="about" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hello world, I&apos;m Sahil Quraishi!</p>

            <p>
              I have a passion for design and am always looking for ways to
              incorporate it into my engineering work.
            </p>
            <p>
               a passionate full-stack
              developer dedicated to crafting innovative solutions through code.
              Beyond my love for coding, I prioritize my well-being by engaging
              in regular workouts, fostering both mental resilience and personal
              growth. This balance between technological creativity and
              self-care fuels my drive to excel in both my professional and
              personal endeavors
            </p>
          </div>
        </Section>
        <Section heading="Contact me" headingAlignment="left">
          <div className="flexfle-col gap-6">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <a className=" underline">email me.</a> Try finding me anywhere
              else at @sahilq312
            </p>
          </div>
        </Section>
        <Section heading="Frontend" headingAlignment="left">
          <div className="grid grid-cols-4  gap-2 ">
            {frontend.map((item) => (
              <Badge  variant={"outline"} key={item.id} className=" flex justify-center items-center pr-4 pl-4 pt-2 pb-2 font-bold ">
                {item.tech}
              </Badge>
            ))}
          </div>
        </Section>
        <Section heading="Backend" headingAlignment="left">
        <div className="grid grid-cols-4  gap-2 ">
            {backend.map((item) => (
              <Badge  variant={"outline"} key={item.id} className=" flex justify-center items-center pr-4 pl-4 pt-2 pb-2 font-bold ">
                {item.tech}
              </Badge>
            ))}
          </div>
        </Section>
        <Section heading="Tools" headingAlignment="left">
        <div className="grid grid-cols-4  gap-2 ">
            {tool.map((item) => (
              <Badge variant={"outline"} key={item.id} className=" flex justify-center items-center pr-4 pl-4 pt-2 pb-2 font-bold ">
                {item.tech}
              </Badge>
            ))}
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <Link href="mailto:contact@quraishisahil04@outlook.com" >
                email me
              </Link>
              . Try finding me anywhere else at @Sahilq312
            </p>
            <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
              {ConnectLinks.map((link) => (
                <li className="transition-opacity col-span-1" key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-auto text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default page;

const frontend = [
  { id: 1, tech: "HTML" },
  { id: 2, tech: "Tailwind" },
  { id: 3, tech: "Sadcn ui" },
  { id: 4, tech: "React" },
  { id: 5, tech: "Next.js" },
  { id: 6, tech: "Redux" },
  { id: 7, tech: "CSS" },
];
const backend = [
  { id: 1, tech: "Mongodb" },
  { id: 2, tech: "Node.js" },
  { id: 3, tech: "Typescript" },
  { id: 4, tech: "Express" },
  { id: 5, tech: "JWT" },
  { id: 6, tech: "Next Auth"},
  { id: 7, tech: "Clerk.js"},
  { id: 8, tech: "Prisma"},
  { id: 9, tech: "NeonDB"},
];
const tool = [
  { id: 1, tech: "Github" },
  { id: 2, tech: "Vercel" },
  { id: 3, tech: "Notion" },
  { id: 4, tech: "Cloudinary" },
  { id: 5, tech: "Postman" },

];
