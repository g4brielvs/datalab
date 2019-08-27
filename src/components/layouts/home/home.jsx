/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import PageFooter from "../../footers/page"
import SiteFooter from "../../footers/site"

import "./home.scss"

const Home = ({ children }) => (
      <>
        <main>{children}</main>

        <PageFooter />
        <SiteFooter />
      </>
)

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home