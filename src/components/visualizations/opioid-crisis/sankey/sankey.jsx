import React from 'react';
import { Sankey } from 'react-vis';

import leftData from '../../../../unstructured-data/opioid-crisis/sankeyLeft.json';

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
      rightData: null,
    };
  }

  componentDidMount() {

  }

  render() {
    const leftData = this.state.leftData;

    const some = Array.from(new Set(leftData.map(x => x.source)));
    const more = Array.from(new Set(leftData.map(x => x.target)));
    let concat = some.concat(more);
    let nodes = concat.map(x => {
      return {'id': x};
    });
    const links = leftData; // the whole thing is the "links" array


    return(
      <Sankey
        nodes={nodes}
        links={links}
        height={600}
        width={1200}
        nodePadding={10}
      />
    );
  };


};
