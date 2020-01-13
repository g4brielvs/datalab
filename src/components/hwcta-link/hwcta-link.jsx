import React from 'react';
import PropTypes from 'prop-types';
import hwctaLinkStyles from './hwcta-link.module.scss';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Hidden } from '@material-ui/core'
import Sources from '../logos/sources';

const HWCTALink = (props) => {
  return (
    <div className={hwctaLinkStyles.entry + ' ' + props._mainClass}>
      <a className={hwctaLinkStyles.link} href={props.url}>
        <Grid container className={`${hwctaLinkStyles.dataSourcesRow} row`}>
          <Hidden xsDown>
            <Grid item sm={3} md={2} className={`${hwctaLinkStyles.image} ${props._noOffset ? '' : 'col-xs-offset-1'}`}>
              <Sources fillColor={props.fillColor} />
            </Grid>
          </Hidden>
          <Grid item className={hwctaLinkStyles.linkText} xs={11} sm={9} md={10}>
            <div>Data Sources and Methodologies</div>
            <div className={hwctaLinkStyles.chevron}>
              <FontAwesomeIcon icon={faChevronRight} color={props.fillColor}/>
            </div>
          </Grid>
          <Hidden smUp>
            <Grid item className={hwctaLinkStyles.chevronGrid} xs={1}>
              <FontAwesomeIcon icon={faChevronRight} color={props.fillColor}/>
            </Grid>
          </Hidden>
        </Grid>
      </a>
    </div>
  )
}

HWCTALink.propTypes = {
  fillColor: PropTypes.string
}

HWCTALink.defaultProps = {
  fillColor: '#881E3D'
}

export default HWCTALink;
