import Typography from "typography"
import moragaTheme from "typography-theme-moraga"

moragaTheme.overrideThemeStyles = () => ({
  "p a, h1 a, h2 a, li a": {
    color: "#3C455A",
    borderBottom: "1px solid #3C455A"
  },
  "p a:hover, h1 a:hover, h2 a:hover, li a:hover": {
    textDecoration: "none",
    backgroundColor: "#3C455A",
    color: "white"
  },
  "a.gatsby-resp-image-link, h1 a, ul.nav a": {
    borderBottom: "none"
  },
  "a.gatsby-resp-image-link:hover, h1 a:hover, ul.nav a:hover": {
    backgroundColor: "inherit",
  },
  "h1 a, h2 a, h3 a, h4 a": {
    fontWeight: "400"
  }
})

const typography = new Typography(moragaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
