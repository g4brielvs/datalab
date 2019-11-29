import React, { useEffect } from "react"
import * as d3 from 'd3v4';

function RadialLegend (props) {

  useEffect(() => {


    d3.select('#agency-legend_scaleKey')
      .attr("viewBox", `0 0 200 200`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr('width', 200)
      .attr('height', 200)
      .append('circle')
      .attr('r', 25)
      .attr('class', 'legend_scaleKeyCircle')
      .attr('cx', 60)
      .attr('cy', 65);
    d3.select('#agency-legend_scaleKey').append('circle')
      .attr('r', 35)
      .attr('class', 'legend_scaleKeyCircle')
      .attr('cx', 60)
      .attr('cy', 65);
    d3.select('#agency-legend_scaleKey').append('circle')
      .attr('r', 45)
      .attr('class', 'legend_scaleKeyCircle')
      .attr('cx', 60)
      .attr('cy', 65);
  });

  return (<>
    <div>
      <svg id='agency-legend_scaleKey'></svg>
    </div>
  </>);

}

export default RadialLegend;
