import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo({children}:any) {
  return (
    <BackgroundLines className="mx-auto md:flex items-center justify-center w-full h-full flex-col px-4">
      {children}
    </BackgroundLines>
  );
}
