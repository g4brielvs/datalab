import React from 'react'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import styles from "./src/styles/variables.scss"

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: parseInt(styles.xs),
      sm: parseInt(styles.sm),
      md: parseInt(styles.md),
      lg: parseInt(styles.lg),
      xl: parseInt(styles.xl)
    }
  }
});

export default ({ element }) => (
  <MuiThemeProvider theme={theme}>
    {element}
  </MuiThemeProvider>
)