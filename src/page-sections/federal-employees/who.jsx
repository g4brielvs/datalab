import React from "react"
import "../../styles/index.scss"

/* components */
import ControlBar from "../../components/control-bar/control-bar"
import Share from "../../components/share/share"
import Treemap from "../../components/visualizations/federal-employees/treemap/treemap"

function Who(props) {

  const defaultImageStyle = {
    marginBottom: "1rem"
  };

  return (
    <>
      <h2>Spending by Agency</h2>
      <ControlBar>
        <Share siteUrl='https://datalab-dev.usaspending.gov/' pageUrl='federal-employees'
                   facebook='' reddit='' linkedin='' tumblr='' email=''/>
      </ControlBar>
      <Treemap sectionId={props.sectionId} dataSource={props.dataSource}/>
    </>
  )
}

export default Who

