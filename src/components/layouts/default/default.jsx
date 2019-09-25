import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

import SiteHeader from '../../headers/site'
import PageHeader from '../../headers/page'
import PageFooter from "../../footers/page"
import SiteFooter from "../../footers/site"

import styles from '../../../styles/variables.scss'
import '../../../styles/index.scss'

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

const Default = ({ children }) => (
  <>
    <Helmet>
        <title>Data Lab - U.S. Treasury</title>
    </Helmet>

    <MuiThemeProvider theme = { theme }>
        <SiteHeader />
        <PageHeader />
        <div>
          {children}
        </div>
        <PageFooter />
        <SiteFooter />
    </MuiThemeProvider>
  </>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default;
