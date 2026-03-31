import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolveBase = () => {
  const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

  if (!repository || repository.toLowerCase() === "geonu98.github.io") {
    return "/";
  }

  return `/${repository}/`;
};

export default defineConfig({
  base: resolveBase(),
  plugins: [react()],
});
