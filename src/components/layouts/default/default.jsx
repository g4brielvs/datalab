import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import SiteHeader from '../../headers/site';
import PageHeader from '../../headers/page';
import PageFooter from '../../footers/page';
import SiteFooter from '../../footers/site';
import './default.scss'

const Default = ({ children }) => (
  <>
    <Helmet>
      <title>Data Lab - U.S. Treasury</title>
    </Helmet>

    <SiteHeader />
    <PageHeader />
    <div className='default'>
      {children}
    </div>
    <PageFooter />
    <SiteFooter />
  </>
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default;
