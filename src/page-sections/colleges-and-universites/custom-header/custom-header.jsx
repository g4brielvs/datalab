import './custom-header.scss'
import React from 'react';

import { Grid } from '@material-ui/core';

const CustomHeader = (props) => (
  <div className='header container-fluid'>
    <Grid container>
      <Grid item xs={10}>
        <section className='header--hero'>
          <div id='header__banner'>
            <p className='header__subtext'>
              {props.subtext}
            </p>
            <p className='header__subblurb'>
              {props.subblurb}
            </p>
            <p className='header__blurb'>
              {props.blurb.map(item => item)}
            </p>
          </div>
        </section>
      </Grid>
    </Grid>
  </div>
)

export default CustomHeader;
