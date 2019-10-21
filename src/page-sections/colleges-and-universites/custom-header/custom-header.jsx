import './custom-header.scss';
import React from 'react';

const CustomHeader = (props) => (
  <div className='header container-fluid'>
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
  </div>
);

export default CustomHeader;
