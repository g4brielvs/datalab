import './custom-toc.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

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
                <div className='toc__number'>
                  {item.number}
                  <p className='toc__subtext'>{item.subtext}</p>
                </div>
                <p className='toc__subblurb'>{item.subblurb}</p>
                <p className='toc__blurb'>{item.blurb}</p>
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
