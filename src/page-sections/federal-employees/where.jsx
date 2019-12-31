import React from "react"
import "../../styles/index.scss"

/* components */
import Mapviz from '../../components/visualizations/federal-employees/mapviz/mapviz';
import Downloads from "../../components/section-elements/downloads/downloads"

function Where(props) {

  return (
    <>
      <h2>Federal Employees Density Map</h2>
      <Mapviz sectionId={props.sectionId} dataSource={props.dataSource} location={props.location}/>
      <Downloads
        href={'assets/js/colleges-and-universities/download-files/Agency_Section_Download.csv'}
        date={'March 2019'}
      />
    </>
  )
}

export default Where
