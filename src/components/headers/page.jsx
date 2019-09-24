import React from "react"
import pageHeaderStyles from "./page.module.scss"

import DataLab from "../logos/datalab"

const PageHeader = props => (
  <div className={pageHeaderStyles.pageHeader}>
    <DataLab beta="true" />
    <div>Menu here</div>
  </div>
)

export default PageHeader;
