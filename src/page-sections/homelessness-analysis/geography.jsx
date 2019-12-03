import React from 'react';
import Mapviz from "../../components/visualizations/homelessness-analysis/mapviz/mapviz"

export default function Geography(props){
  return (
    <>
      <div className="homelessness-subheading">Homeless Population by Region</div>
      <div className="homelessness-subheading2">HUD Point-in-time Count by Continuum of Care Area</div>
      <Mapviz location={props.location}/>
    </>
  )
}
