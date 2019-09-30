import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import OfficialBanner from '../../headers/official-banner'
import PageFooter from "../../footers/page"
import SiteFooter from "../../footers/site"

import styles from '../../../styles/variables.scss';
import '../../../styles/index.scss';

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
    <OfficialBanner />
    <div className='default'>
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