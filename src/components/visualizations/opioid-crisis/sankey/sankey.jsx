import React from 'react';
import { Sankey } from 'react-vis';
import styles from './sankey.module.scss';

import leftData from '../../../../unstructured-data/opioid-crisis/sankeyLeftTest.json';
import rightData from '../../../../unstructured-data/opioid-crisis/sankeyRightTest.json';

import SankeyPopup from '../../../../components/visualizations/opioid-crisis/sankey/sankeyPopup';

export default class CrisisSankey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftData: leftData,
      rightData: rightData,
      clickedNode: '',
      isModalOpen: false,
    };
  }
  
  /* set the color of specific node */
  colorSetter = (node) => {
    switch (node) {

    case 'Department of Agriculture':
      return '#97332E';

    case 'Department of Health and Human Services':
      return '#7FB05B';

    case 'Department of Homeland Security':
      return '#3D6590';

    case 'Office of the Assistant Secretary for Administration':
      return '#3D6590';

    case 'Office of the Under Secretary for Science and Technology':
      return '#3D6590';

    case 'U.S. Customs and Border Protection':
      return '#3D6590';

    case 'U.S. Immigration and Customs Enforcement':
      return '#3D6590';

    case 'Department of Justice':
      return '#75B5CB';

    case 'Criminal Justice':
      return 'blue';

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

    case 'Substance Abuse and Mental Health Services Administration':
      return '#7FB05B';

    case 'Centers for Disease Control and Prevention':
      return '#7FB05B';

    case 'Centers for Disease Control and Prevention':
      return '#7FB05B';

    case 'Health Resources and Services Administration':
      return '#7FB05B';

    case 'Indian Health Service':
      return '#7FB05B';

    case 'Office of Assistant Secretary for Health':
      return '#7FB05B';

    case 'Office of the Assistant Secretary for Administration':
      return '#7FB05B';

    case 'First Responders':
      return 'purple';

    case 'National Institute of Food and Agriculture':
      return '#97332E';

    case 'Rural Housing Service':
      return '#97332E';

    case 'Rural Utilities Service':
      return '#97332E';

    case 'Office of Justice Programs':
      return '#75B5CB';

    default:
      return '';

    };
  };

  render() {

    const leftData = this.state.leftData; // set back to 'leftData' when done (note!
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
          nodeWidth={20}
          onValueClick={(datapoint, event) => {
            this.setState({clickedNode: datapoint});
            this.setState({isModalOpen: true});
          }}
          onLinkClick={(data) => console.log(data)}
          style={{
            links: {stroke: '#dddddd', opacity: .8},
          }}
        />

        <Sankey
          nodes={nodesRight}
          links={linksRight}
          height={800}
          width={700}
          nodePadding={10}
          nodeWidth={20}
          hideLabels={false}
          layout={0}
          /* onValueClick={(datapoint, event) => { */
          /*   /\* this.setState({clickedNode: datapoint}); *\/ */
          /*   /\* this.setState({isModalOpen: true}); *\/ */
          /* }} */
          onLinkClick={(data) => console.log(data)}
          style={{
            links: { stroke: '#dddddd', opacity: .3 }
          }}
        />

        <SankeyPopup clickedNode={this.state.clickedNode} isOpen={this.state.isModalOpen}/>

      </div>

    );
  };


};
