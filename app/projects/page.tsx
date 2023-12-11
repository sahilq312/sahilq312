import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { projects } from "@/lib/ProjectData"; 
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Projects | Sahil",
  description:
    "Here are some of the projects I've worked on.",
};


export default function Blog() {

  return (
    <div className="max-w-[700px] mx-auto">
    <div className="flex flex-col gap-16 md:gap-24 ">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">
            Projects
          </h1>
          <p
            className="text-secondary animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Here are some of the projects I&apos;ve worked on.
          </p>
        </div>
      </div>
      <ul
        className="animate-in flex flex-col animated-list"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        {projects.map((project, i) => (
          <li
            key={project.id}
            className={clsx(
              "py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0"
            )}
          >
            <Link
              href={`/projects/${project.id}`}
              className="w-full md:w-2/5 aspect-video bg-tertiary rounded-lg border border-secondary overflow-clip select-none"
            >
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="cover"
                  className="w-full h-full"
                  width={30}
                  height={30}
                  unoptimized
                />
              </div>
            </Link>
            <div className="w-full md:w-3/5 space-y-2">
              <div>
                <Link
                  href={`/projects/${project.id}`}
                  className="text-primary font-medium hover:underline"
                >
                  {project.title}
                </Link>
              </div>
              <p className="line-clamp-3 text-secondary">
                {project.description}
              </p>
              <div className="flex gap-2">
              {project.tech?.map((t,i)=> (
                <p className=" border rounded-md p-2" key={i}>{t}</p>)
              )}
              </div>
              
              
            </div>
            <Button className=" flex" ><a href={project.link}><FaGithub/></a></Button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}