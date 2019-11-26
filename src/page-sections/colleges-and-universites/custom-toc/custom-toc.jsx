import style from './custom-toc.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Hidden } from '@material-ui/core';

const CustomToc = (props) => {
  return (
    <>
      <section id={style.toc}>
        <Grid container>
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
                  <Grid item xs className={style.subtext}>{item.subtext}</Grid>
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
}

CustomToc.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object)
}

export default CustomToc;
