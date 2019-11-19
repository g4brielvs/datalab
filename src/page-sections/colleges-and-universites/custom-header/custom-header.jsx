import React from 'react';
import './custom-header.scss';
import storyStyles from '../../../components/layouts/story/story.module.scss';
import { Hidden } from '@material-ui/core';

const CustomHeader = (props) => (
  <div className='header container-fluid'>

    <Hidden mdDown>
      <div className='header-banner--image'
           role='image'
           aria-label="Explore The Federal Investment In Your Alma Mater">
      </div>
    </Hidden>

    <Hidden lgUp>
      <section className={storyStyles.headerHero}>
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
    </Hidden>
  </div>
);

export default CustomHeader;
