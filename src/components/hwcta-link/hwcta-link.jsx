import React from 'react';
import PropTypes from 'prop-types';
import hwctaLinkStyles from './hwcta-link.module.scss';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core'
import Sources from '../logos/sources';

const HWCTALink = (props) => {
  return (
    <div className={hwctaLinkStyles.hwcta + ' ' + props._mainClass}>
      <a href={props.url.replace(/\/\//g, '/')}>
        <Grid container alignItems='center'>
          <Grid item className={hwctaLinkStyles.icon}>
            <Sources fillColor={props.fillColor} />
          </Grid>
          <Grid item>
            Data Sources and{' '}
            <Hidden mdUp>
              <br />
            </Hidden>
            Methodologies
        </Grid>
          <Grid item className={hwctaLinkStyles.arrow}>
            <FontAwesomeIcon icon={faChevronRight} color={props.fillColor} />
          </Grid>
        </Grid>
      </a>
    </div>
  );
};

HWCTALink.propTypes = {
  fillColor: PropTypes.string
};

HWCTALink.defaultProps = {
  fillColor: '#881E3D'
};

export default HWCTALink;
