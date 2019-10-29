import React from 'react';
import hwctaLinkStyles from "./hwcta-link.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import sourceImage from "../../images/sources.svg";
import { Grid, Hidden } from "@material-ui/core"

const HWCTALink = (props) => {
  return (
    <div className={hwctaLinkStyles.entry + ' ' + props._mainClass}>
      <a className={hwctaLinkStyles.link} href={props.url}>
        <div className={`${hwctaLinkStyles.dataSourcesRow} row`}>
          <Grid xs={2} md={1} className={`${hwctaLinkStyles.image} ${props._noOffset ? '' : 'col-xs-offset-1'}`}><img src={sourceImage} /></Grid>
          <Grid className={hwctaLinkStyles.linkText} xs={11} sm={10}>
            <div>Data Sources and Methodologies</div>
            <div className={hwctaLinkStyles.chevron}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </Grid>
          <Hidden smUp>
            <Grid className={hwctaLinkStyles.chevronGrid} xs={1}>
              <FontAwesomeIcon icon={faChevronRight} />
            </Grid>
          </Hidden>
        </div>
      </a>
    </div>
  )
}

export default HWCTALink;
