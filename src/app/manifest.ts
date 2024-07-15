import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NextJS Emotion Typescript Boiler",
    short_name: "NextJS Boiler",
    description:
      "A boilerplate for bootstrapping projects with NextJS, Emotion and Typescript",
    // Icon files stored in /public dir
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#F8F4ED",
    background_color: "#F8F4ED",
    display: "standalone",
  }
}
