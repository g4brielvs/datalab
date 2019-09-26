import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'

import OfficialBanner from '../../headers/official-banner'
import PageHeader from '../../headers/page'
import PageFooter from "../../footers/page"
import SiteFooter from "../../footers/site"
import '../../../styles/index.scss'
import './default.scss'

const Default = ({ children }) => (
  <>
    <Helmet>
        <title>Data Lab - U.S. Treasury</title>
    </Helmet>

    <OfficialBanner />
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
