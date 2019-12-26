import React from 'react';
import { Sankey } from 'react-vis';
import styles from './sankey.module.scss';

import leftData from '../../../../unstructured-data/opioid-crisis/sankeyLeft.json';
import leftDataTest from '../../../../unstructured-data/opioid-crisis/sankeyLeftTest.json';
import rightDataTest from '../../../../unstructured-data/opioid-crisis/sankeyRightTest.json';


/*
  We are going to do numerical mappings to the strings
  in the data to keep the props happy in
  'react-vis'
*/

export default class CrisisSankey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftData: leftData,
      leftDataTest: leftDataTest,
      rightDataTest: rightDataTest,
      rightData: null,
    };
  }

  componentDidMount() {
    
  }

  render() {
    const leftData = this.state.leftDataTest; // set back to 'leftData' when done (note!
    const rightData = this.state.rightDataTest; 

    const someLeft = Array.from(new Set(leftData.map(x => x.source)));
    const moreLeft = Array.from(new Set(leftData.map(x => x.target)));
    let concat = someLeft.concat(moreLeft);
    let nodesLeft = concat.map(x => {
      return {'id': x, 'color': 'orange'};
    });
    const linksLeft = leftData; // the whole thing is the "links" array

    const someRight = Array.from(new Set(rightData.map(x => x.source)));
    const moreRight = Array.from(new Set(rightData.map(x => x.target)));
    let c = someRight.concat(moreRight);
    let nodesRight = c.map(x => {
      return {'id': x};
    });

    const linksRight = rightData;

    return(
      <div className={styles.sankeyContainer}>
        <Sankey
          nodes={nodesLeft}
          links={linksLeft}
          height={600}
          width={700}
          nodePadding={13}
          hideLabels={false}
          onValueClick={(datapoint, event) => console.log('whatever we just clicked a node' + datapoint + event)}
          onLinkClick={(data) => console.log(data)}
          onLinkMouseOver={(data) => console.log(data)}
          style={{
            links: {opacity: 1, color: 'orange'},
            rects: {stroke: '#dddddd', strokeWidth: 3}
          }}
        />

        <Sankey
          nodes={nodesRight}
          links={linksRight}
          height={600}
          width={700}
          nodePadding={13}
          hideLabels={false}
          onValueClick={(datapoint, event) => console.log('whatever we just clicked a node' + datapoint + event)}
          onLinkClick={(data) => console.log(data)}
          onLinkMouseOver={(data) => console.log(data)}
        />

      </div>
    );
  };


};
