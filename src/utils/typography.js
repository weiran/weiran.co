import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

delete noriegaTheme.googleFonts

const typography = new Typography(noriegaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
