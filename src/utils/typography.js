import Typography from "typography"
import typographyTheme from "typography-theme-judah"

typographyTheme.overrideThemeStyles = () => ({
  "p a, h1 a, h2 a, ul a, ol a, .nav a": {
    color: "black",
    textDecoration: "underline"
  },
  "p a:hover, h1 a:hover, h2 a:hover, ul a:hover, ol a:hover, .nav a:hover": {
    color: "white"
  },
  "a.gatsby-resp-image-link:hover, h1 a:hover, .nav a:hover": {
    backgroundColor: "inherit",
  },
  ".nav, p.post-meta": {
    fontFamily: "'Roboto Condensed'",
    textTransform: "uppercase"
  },
  ".nav a": {
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
