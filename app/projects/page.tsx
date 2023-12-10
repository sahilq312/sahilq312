import { Badge } from "lucide-react";
import React from "react";
import { projects } from "@/lib/ProjectData";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";

const page = () => {
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
          {projects.map((item) => (
            <li
              key={item.id}
              className="py-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity first:pt-0 last:pb-0"
            >
              <h2>{item.title}</h2>
              <div className=" flex gap-2 ">
                {item.tech.map((a, i) => (
                  <p
                    className=" border rounded-sm pr-2 pl-2 flex justify-center items-center"
                    key={i}
                  >
                    {a}
                  </p>
                ))}
              </div>
              <div className="w-full md:w-3/5 space-y-2">
                <p className="line-clamp-3 text-tertiary">{item.description}</p>
              </div>
              <Button className=" flex gap-2">
                <FaGithub />
                <Link href={item.link}>Source Code</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )}
export default page;
