import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Site do Bernardo",
    pageTitleSuffix: " - Site do Bernardo",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "https://bmendoim.neocities.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cascadia Mono",
        body: "Cascadia Mono",
        code: "Cascadia Mono",
      },
      colors: {
        lightMode: {
          light: "#fbf1c7",
          lightgray: "#ebdbb2",
          gray: "#928374",
          darkgray: "#3c3836",
          dark: "#282828",
          secondary: "#d65d0e",
          tertiary: "#689d6a",
          highlight: "rgba(214, 93, 14, 0.15)",
          textHighlight: "#d7992188",
        },
        darkMode: {
          light: "#282828",
          lightgray: "#3c3836",
          gray: "#665c54",
          darkgray: "#ebdbb2",
          dark: "#fbf1c7",
          secondary: "#d65d0e",
          tertiary: "#689d6a",
          highlight: "rgba(214, 93, 14, 0.15)",
          textHighlight: "#d7992188",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
