import style from './customHeader.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Hidden } from '@material-ui/core';

/* This file has both the banner and the table of contents for 
  story templates. Our original 
*/

/*
  Steps: 
  1. Add colors to page in Object
  2. Pass name of STORY page to prop
  3. render specific colors for said story page in inline stylen
*/
const CustomHeaderBanner = (props) => {
  if (props.page === 'opioid') {
    <>
      {/* <Hidden mdDown> */}
      {/*   <div className={style.bannerImage} */}
      {/*        role='image' */}
      {/*        aria-label="Explore The Federal Investment In Your Alma Mater"> */}
      {/*   </div> */}
      {/* </Hidden> */}

      <Hidden lgUp>
        <section className={style.headerHero}>
          <div id={style.banner}>
            <p className={style.subtext}>
              {props.subtext}
            </p>
            <p className={style.subblurb}>
              {props.subblurb}
            </p>
            <p className={style.blurb}>
              {props.blurb.map(item => item)}
            </p>
          </div>
        </section>
      </Hidden>
    </>;
  };

};

const CustomTocHeader = (props) => {

  if (props.page === 'opioid') {
    return (
      <>
        <section id={style.toc}>
          <Grid container wrap='nowrap'>
            {props.sections.map((item, key) =>
                                <Grid item xs={12} md={6} xl={3}
                                      key={key}
                                      className={style.tile}>
                                  <a href={`#section-${item.section}`}>
                                    <Grid container alignItems='center'>
                                      <Grid item xs={6} md={12} xl={6}
                                            className={style.number}>
                                        {item.number}
                                      </Grid>
                                      <Grid item xs style={{color: props.colors.opioidOrange}}>{item.subtext}</Grid>
                                    </Grid>
                                    <Hidden smDown>
                                      <p className={style.subblurb}>{item.subblurb}</p>
                                      <p className={style.blurb}>{item.blurb}</p>
                                    </Hidden>
                                  </a>
                                </Grid>
                               )}
          </Grid>
        </section>
      </>
    );
  };
};

CustomTocHeader.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object)
};

export {CustomTocHeader, CustomHeaderBanner};


