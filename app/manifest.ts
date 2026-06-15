import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hendricx Peinture",
    short_name: "Hendricx",
    description:
      "Artisan peintre a Paule : peinture interieure, exterieure, renovation et fresques murales en Centre Bretagne.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f4",
    theme_color: "#008b8b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo-hendricx.png",
        sizes: "180x25",
        type: "image/png",
      },
    ],
  };
}
