import React from 'react';
import '../../styles/index.scss';

import ControlBar from '../../components/control-bar/control-bar';
import Share from '../../components/share/share';
import Treemap from '../../components/visualizations/federal-employees/treemap/treemap';

export default function Who(props) {
  return <>
    <h2>Spending by Agency</h2>
    <ControlBar>
      <Share location={props.location} facebook='' reddit='' linkedin='' tumblr='' email='' />
    </ControlBar>
    <Treemap sectionId={props.sectionId} dataSource={props.dataSource} />
  </>;
}

