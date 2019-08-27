/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'

import PageFooter from "../../footers/page"
import SiteFooter from "../../footers/site"
import '../../../styles/index.scss'
import './default.scss'

const defaultStyle = {
  margin: '1% 9%'
}

const Default = ({ children }) => (
  <>
    <Helmet>
        <title>Data Lab - U.S. Treasury</title>
    </Helmet>

    {/* add nav bar here */}

    <main
      className='default'
      style = {defaultStyle} >{children}</main>

    <PageFooter />
    <SiteFooter />
  </>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default


