import React from "react";
import { Gears } from "@/lib/Gears";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8 animate-in">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Gear
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              My toolbox.
            </p>
          </div>
          <p
            className="max-w-lg animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            This is gear I usaualy use in daily basis 
          </p>
        </div>

        <ul>
          {Gears.map((item, i) => (
            <li key={i} className="flex gap-4 items-center transition-opacity">
              <a
                className="relative rounded-xl overflow-hidden bg-tertiary aspect-square w-[4rem] min-w-[4rem] h-[4rem] shadow"
                href={item.name}
                target="_blank"
              >
                {/* <Image
            src={item.image}
            alt={item.name}
            className="object-center object-cover w-full h-full"
            fill
          /> */}
              </a>
              <div className="grow flex justify-between gap-2 items-center">
                <div className="space-y-1">
                  <h3 className="text-primary line-clamp-2 leading-tight font-medium">
                    {item.name}
                  </h3>
                </div>
                <div>
                  <a
                    className="ml-auto text-sm rounded-full px-4 py-1 bg-secondary h-fit"
                    href={item.link}
                    target="_blank"
                  >
                    Get
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
