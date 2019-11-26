import React from 'react';
import customHeaderStyles from './custom-header.module.scss';
import storyStyles from '../../../components/layouts/story/story.module.scss';
import { Hidden } from '@material-ui/core';

const CustomHeader = (props) => (
  <div className={storyStyles.header}>

    <Hidden mdDown>
      <div className={customHeaderStyles.bannerImage}
           role='image'
           aria-label="Explore The Federal Investment In Your Alma Mater">
      </div>
    </Hidden>

    <Hidden lgUp>
      <section className={storyStyles.headerHero}>
        <div id={customHeaderStyles.banner}>
          <p className={customHeaderStyles.subtext}>
            {props.subtext}
          </p>
          <p className={customHeaderStyles.subblurb}>
            {props.subblurb}
          </p>
          <p className={customHeaderStyles.blurb}>
            {props.blurb.map(item => item)}
          </p>
        </div>
      </section>
    </Hidden>
  </div>
);

export default CustomHeader;
