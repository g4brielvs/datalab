import React from 'react';
import { Sankey } from 'react-vis';
import styles from './sankey.module.scss';

import leftData from '../../../../unstructured-data/opioid-crisis/sankeyLeft.json';
import leftDataTest from '../../../../unstructured-data/opioid-crisis/sankeyLeftTest.json';
import rightData from '../../../../unstructured-data/opioid-crisis/sankeyRightTest.json';


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
      rightData: rightData,
    };
  }

  /* set the color of specific node 
    (for testing)
   */
  colorSetter(node) {
    switch (node) {
    case 'Department of Agriculture:':
      return '#97332E';

    case 'Department of Health and Human Services':
      return '#7FB05B';

    case 'Department of Homeland Security':
      return '#3D6590';

    case 'Department of Justice':
      return '#75B5CB';

    case 'Department of State':
      return '#F15A24';

    case 'Department of the Interior':
      return '#2E3192';

    case 'Executive Office of the President':
      return '#FBB03B';

    case 'Institute of Museum and Library Studies':
      return '#39B54A';

    case 'National Science Foundation':
      return '#FCEE21';

    default:
      return '';

    };
  };

  /* 
    link mover (test)
   */
  linkMover(link) {
    // todo
  };

  render() {
    const leftData = this.state.leftDataTest; // set back to 'leftData' when done (note!
    const rightData = this.state.rightData; 

    const someLeft = Array.from(new Set(leftData.map(x => x.source)));
    const moreLeft = Array.from(new Set(leftData.map(x => x.target)));
    let concat = someLeft.concat(moreLeft);
    let nodesLeft = concat.map(x => {
      return {'name': x, 'color': this.colorSetter(x)};
    });
    const linksLeft = leftData; // the whole thing is the "links" array
    const someRight = Array.from(new Set(rightData.map(x => x.source)));
    const moreRight = Array.from(new Set(rightData.map(x => x.target)));
    let c = someRight.concat(moreRight);
    let nodesRight = c.map(x => {
      return {'name': x, 'color': this.colorSetter(x)};
    });

    console.log(nodesRight);


    const linksRight = rightData; // all links...

    return(
      <div className={styles.sankeyContainer}>
        <Sankey
          nodes={nodesLeft}
          links={linksLeft}
          height={800}
          width={700}
          nodePadding={13}
          hideLabels={false}
          onValueClick={(datapoint, event) => console.log('whatever we just clicked a node' + datapoint + event)}
          onLinkClick={(data) => console.log(data)}
          onLinkMouseOver={(data) => console.log(data)}
          style={{
            links: {opacity: 1, color: 'red'},
//            rects: {stroke: '#dddddd', strokeWidth: 3}
          }}
        />

        <Sankey
          nodes={nodesRight}
          links={linksRight}
          height={800}
          width={700}
          nodePadding={10}
          hideLabels={false}
          layout={0}
          onValueClick={(datapoint, event) => console.log('whatever we just clicked a node' + datapoint + event)}
          onLinkClick={(data) => console.log(data)}
          onLinkMouseOver={(data) => console.log(data)}
          style={{
//            rects: { stroke: '#dddddd', strokeWidth: 3 },
            links: { stroke: '#ddddd', color: 'red' }
          }}
        />
      </div>
    );
  };


};
