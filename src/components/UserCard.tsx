"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function UserCard() {
  const imageUrl =
    "https://i.ibb.co/N92zx3k/pfp.jpg"
  return (
    <div className="relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p></p>
      </DirectionAwareHover>
    </div>
  );
}
