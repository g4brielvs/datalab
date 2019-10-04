import './custom-toc.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Hidden } from '@material-ui/core';

const CustomToc = (props) => {
  return (
    <>
      <section id='custom__TOC'>
        <Grid container>
          {props.sections.map((item, key) =>
            <Grid item xs={12} md={6} xl={3}
              key={key}
              className='toc__tile'
            >
              <a href={`#section-${item.section}`}>
                <Grid container alignItems='center'>
                  <Grid item xs={6} md={12} xl={6}
                    className='toc__number'
                  >
                    {item.number}
                  </Grid>
                  <Grid item xs className='toc__subtext'>{item.subtext}</Grid>
                </Grid>
                <Hidden smDown>
                  <p className='toc__subblurb'>{item.subblurb}</p>
                  <p className='toc__blurb'>{item.blurb}</p>
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
