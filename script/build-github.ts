import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, copyFile, writeFile } from "fs/promises";

const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildForGitHub() {
  await rm("dist", { recursive: true, force: true });

  console.log("Building for GitHub Pages with base: /canyonboxing/");
  
  await viteBuild({
    base: "/canyonboxing/",
  });

  console.log("Fixing meta image URLs for GitHub Pages...");
  let indexHtml = await readFile("dist/public/index.html", "utf-8");
  indexHtml = indexHtml.replace(
    /content="https:\/\/[^"]*opengraph\.jpg"/g,
    'content="https://lucasclaxton1997.github.io/canyonboxing/opengraph.jpg"'
  );
  indexHtml = indexHtml.replace(
    /href="\.\/favicon\.png"/g,
    'href="/canyonboxing/favicon.png"'
  );
  await writeFile("dist/public/index.html", indexHtml);
  
  console.log("Copying index.html to 404.html for SPA routing...");
  await copyFile("dist/public/index.html", "dist/public/404.html");
  
  console.log("Building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });

  console.log("");
  console.log("Build complete! Files are in dist/public/");
  console.log("");
  console.log("To deploy to GitHub Pages:");
  console.log("1. Copy the contents of dist/public/ to your GitHub repository");
  console.log("2. Enable GitHub Pages in your repository settings");
  console.log("3. Set the source to the root of the branch containing these files");
}

buildForGitHub().catch((err) => {
  console.error(err);
  process.exit(1);
});
