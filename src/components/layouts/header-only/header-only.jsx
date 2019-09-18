import { Helmet } from 'react-helmet'

import SiteHeader from '../../headers/site'
import PageHeader from '../../headers/page'
import SEO from "../../seo"
import React from "react"
import PropTypes from "prop-types"

const HeaderOnly = ({children, _containerClass, _headerClass}) => (
  <div className={_containerClass}>
    <Helmet>
      <title>Data Lab - U.S. Treasury</title>
    </Helmet>
    <div className={_headerClass}>
      <SiteHeader />
      <PageHeader />
    </div>
    <SEO title="404: Not found" />
    {children}
  </div>
)

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
  _containerClass: PropTypes.string,
  _headerClass: PropTypes.string
}

export default HeaderOnly;
