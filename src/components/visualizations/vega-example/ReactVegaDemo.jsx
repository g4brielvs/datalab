/* eslint-disable no-magic-numbers */
import React from 'react';
import { Vega, createClassFromSpec } from 'react-vega';
// import data1 from '../../../unstructured-data/vega-example/data1.json';
import spec1 from '../../../unstructured-data/vega-example/spec1';
import spec2 from '../../../unstructured-data/vega-example/spec2';
import sunburstSpec from '../../../unstructured-data/vega-example/sunburst-spec';
import flareData from '../../../unstructured-data/vega-example/flare.json';
import csvData from '../../../unstructured-data/contract-explorer/awards_contracts_FY18_v2.csv';
import { Contains } from 'lodash';



// const BarChart = createClassFromSpec({ spec: sunburstSpec });

const code1 = `<Vega data={this.state.data} spec={this.state.spec} onSignalHover={this.handleHover} />`;

// const code2 = `const BarChart = ReactVega.createClassFromSpec(barSpec);
// <BarChart data={this.state.data} onSignalHover={this.handleHover} />`;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: flareData,
      info: '',
      spec: sunburstSpec,
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleToggleSpec = this.handleToggleSpec.bind(this);
    this.handleUpdateData = this.handleUpdateData.bind(this);
    this.handlers = { tooltip: this.handleHover };
  }

  handleHover(...args) {
    this.setState({
      info: JSON.stringify(args),
    });
  }

  handleToggleSpec() {
    const { spec } = this.state;
    if (spec === spec1) {
      this.setState({ spec: spec2 });
    } else {
      this.setState({ spec: spec1 });
    }
  }

  handleUpdateData() {
    const flare = [];
    // for (let i = 1; i <= flareData.tree.length; i += 1) {
    //   flare.push({
    //     id: i,
    //     name: flareData.tree[i].name,
    //     parent: 1,
    //     size: flareData.tree[i] && flareData.tree[i].size ? flareData.tree[i].size : null
    //   });
    // }
    this.convertCsvToJson();
    console.log(flare);

    this.setState({ data: { flare } });
  }

  convertCsvToJson() {
    let tree = [{
      "id": 1,
      "name": "flare"
    }];


    csvData.forEach(function (row, rowIndex) {
      Object.keys(row).forEach(function(item, index) {
        if(item === 'agency') {
          if (row['agency']) {

          }
        }
        // add a new node and mark parent
        // if agency parent is 1 (will need to check if this exists already)
        // if subagency parent is the agency id
        // if recipient parent is the subagency
        // but how am i going to get the sums (there is a d3 function some where
        // the parent is the previous item
      });
    });

    console.log(csvData);
  }

  render() {
    const { data, spec, info } = this.state;

    return (
      <div>
        <div style={{ float: 'right' }}>
          <iframe
            title="star"
            src="https://ghbtns.com/github-btn.html?user=vega&repo=react-vega&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="100px"
            height="20px"
          />
        </div>
        <button type="button" onClick={this.handleToggleSpec}>
          Toggle Spec
        </button>
        <button type="button" onClick={this.handleUpdateData}>
          Update data
        </button>
        <h3>
          <code>&lt;Vega&gt;</code> React Component
        </h3>
        Will recompile when spec changes and update when data changes.
        <pre>{code1}</pre>
        <Vega data={data} spec={spec} signalListeners={this.handlers} />
        {/*<h3>*/}
          {/*<code>ReactVega.createClassFromSpec()</code>*/}
        {/*</h3>*/}
        {/*Use the given spec to create a reusable component.*/}
        {/*<pre>{code2}</pre>*/}
        {/*<BarChart data={data} signalListeners={this.handlers} />*/}
        <div>
          Hover info: <code>{info}</code>
        </div>
      </div>
    );
  }
}