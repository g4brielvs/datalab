import React from "react"
import "./page.scss"

import DataLab from "../logos/datalab"

const PageHeader = props => (
  <div className="page-header">
    <DataLab beta="true" />
    <div>Menu here</div>
  </div>
)

export default PageHeader;
