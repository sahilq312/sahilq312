import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "rust",
  "react",
  "nextdotjs",
  "linux",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "prisma",
  "postgresql",
  "docker",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "mongodb",
  "mysql",
  "github",
  "visualstudiocode",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="md:relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-background mx-auto">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
