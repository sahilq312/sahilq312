"use client"
import Link from "next/link"
import { ModeToggle } from "./togglebutton";
import clsx from "clsx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";

const links = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Gear", href: "/gear" },
  { label: "Projects", href: "/projects" },
];

export function Navbar() { 
  const [position , setPosition] = useState("button")
  return (
    <header className={clsx("relative md:sticky top-0 z-20")}>
      <nav className="px-4 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-between items-center gap-3">
        <Link href={"/"} className=" shrink-0 ">
            <p>Sahil</p>
        </Link>
        <ul className="hidden md:flex items-center gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className=" font-light">{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className=" md:hidden lg:hidden">
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {links.map((link)=> (
            <DropdownMenuItem key={link.href}><Link href={link.href}>{link.label}</Link></DropdownMenuItem>
          ))}
          </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="flex items-center justify-center w-8 h-8">
          <ModeToggle/>
        </div>
      </nav>
    </header>
  );
}
