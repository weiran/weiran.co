import Typography from "typography"
import noriegaTheme from "typography-theme-noriega"

noriegaTheme.overrideThemeStyles = () => ({
  "a": {
    color: "black"
  }
})

const typography = new Typography(noriegaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
