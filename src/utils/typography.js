import Typography from "typography"
import typographyTheme from "typography-theme-judah"

typographyTheme.overrideThemeStyles = () => ({
  "p a, h1 a, h2 a, li a": {
    color: "black",
    textDecoration: "underline"
  },
  "p a:hover, h1 a:hover, h2 a:hover, li a:hover": {
    backgroundColor: "#3C455A",
    color: "white"
  },
  "a.gatsby-resp-image-link:hover, h1 a:hover, ul.nav a:hover": {
    backgroundColor: "inherit",
  },
  "ul.nav, p.post-meta": {
    fontFamily: "'Roboto Condensed'",
    textTransform: "uppercase"
  },
  "ul.nav a": {
    textDecoration: "none"
  },
  "a": {
    textDecorationSkip: "initial"
  }
})

const typography = new Typography(typographyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
