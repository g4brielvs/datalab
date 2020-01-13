import { Helmet } from 'react-helmet';

import OfficialBanner from '../../headers/official-banner';
import { HeadOnly } from '../../headers/headers';
import React from "react";
import PropTypes from "prop-types";

const HeaderOnly = ({children, _containerClass, _headerClass}) => (
  <div className={_containerClass}>
    <Helmet>
      <title>Data Lab - U.S. Treasury</title>
    </Helmet>
    <div className={_headerClass}>
      <OfficialBanner/>
      <HeadOnly />
    </div>
    {children}
  </div>
);

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
  _containerClass: PropTypes.string,
  _headerClass: PropTypes.string
};

export default HeaderOnly;