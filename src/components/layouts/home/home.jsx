/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Default from "../default"

import "./home.scss"
import { Helmet } from "react-helmet"

const Home = ({ children }) => (
      <>
        <Default>
          <main>{children}</main>
        </Default>
      </>
)

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home
