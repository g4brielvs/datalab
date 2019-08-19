/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./home.scss"
import "./landing.scss"
import "./landing-dts.scss"
import "./landing-row.scss"

const Home = ({ children }) => (
  <>
    <div>
      <main>{children}</main>

    </div>
  </>
)

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home
