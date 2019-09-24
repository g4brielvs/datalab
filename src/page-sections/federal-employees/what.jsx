import React from "react"
import "../../styles/index.scss"
import '../../components/share-menu/share-menu.scss'

/* components */
import ControlBar from "../../components/control-bar/control-bar"
import Reset from "../../components/reset/reset"
import Share from "../../components/share/share"
import Filter from "../../components/filter/filter"
import BarChart from "../../components/visualizations/federal-employees/bar-chart/bar-chart"

function What(props) {

  const defaultImageStyle = {
    marginBottom: "1rem"
  };

  return (
    <>
      <h2>Federal Employee Bar Chart</h2>
      <ControlBar>
        <Reset />
        <Filter />
        <Share siteUrl='https://datalab-dev.usaspending.gov/federal-employees' pageUrl='federal-employees'
               twitter='#DataLab #Treasury #DataTransparency #USAspending'
               facebook='' reddit='' linkedin='' tumblr='' email=''/>
      </ControlBar>
      <BarChart sectionId={props.sectionId} />
    </>
  )
}

export default What
