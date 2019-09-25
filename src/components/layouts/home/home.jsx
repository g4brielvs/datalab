import React from "react"
import PropTypes from "prop-types"
import Default from "../default/default"

import homeTemplateStyles from "./home.module.scss"

const Home = ({ children }) => (
      <>
        <Default>
          <main className={homeTemplateStyles.default}>
            {children}
          </main>
        </Default>
      </>
)

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home