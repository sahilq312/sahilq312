import Link from 'next/link'
import Image from 'next/image'
import Avatar from "@/public/avatar.png";
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Brian Ruiz
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I write code and workout.
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={Avatar}
            width={85}
            height={85}
            alt="avatar"
            className="rounded-full bg-secondary"
          />
        </div>
        <p
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Hi, I&apos;m Sahil Quraishi, a full stack developer who loves building cool
          things with code. In addition to coding, I also workout ,
          where I focus on my mental health and personal development.
        </p>
        <ul
          className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <li className="transition-opacity">
            <Link
              href="mailto:quraishisahil04@outlook.com"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>Email me</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link
              href="/links"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>More ways to connect</span>
            </Link>
          </li>
        </ul>
      </div>
      </div>
      
  )
}
