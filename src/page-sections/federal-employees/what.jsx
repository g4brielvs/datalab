import React from 'react';
import '../../styles/index.scss';

import ControlBar from '../../components/control-bar/control-bar';
import Reset from '../../components/reset/reset';
import Share from '../../components/share/share';
import BarChart from '../../components/visualizations/federal-employees/bar-chart/bar-chart';

export default function What(props) {
  return <>
    <h2>Federal Employee Bar Chart</h2>
    <ControlBar>
      <Reset />
      <Share location={props.location} facebook='' reddit='' linkedin='' tumblr='' email='' />
    </ControlBar>
    <BarChart sectionId={props.sectionId} dataSource={props.dataSource} />
  </>;
}
