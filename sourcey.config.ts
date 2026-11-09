import { defineConfig, godoc, markdown } from "sourcey";

export default defineConfig({
  name: "Gin Web Framework — Go API Reference",
  description:
    "A Sourcey-generated API reference for the Gin web framework (gin-gonic/gin), built from a pinned upstream commit.",
  siteUrl: "https://gin-sourcey-docs.github.io",
  baseUrl: "/gin-sourcey-docs",
  prettyUrls: "strip",
  navigation: {
    tabs: [
      {
        tab: "Guide",
        slug: "",
        source: markdown({
          groups: [
            { group: "Start", pages: ["introduction", "about-this-build"] },
          ],
        }),
      },
      {
        tab: "Go API",
        slug: "go",
        source: godoc({ snapshot: "./godoc.json", mode: "snapshot" }),
      },
    ],
  },
});
