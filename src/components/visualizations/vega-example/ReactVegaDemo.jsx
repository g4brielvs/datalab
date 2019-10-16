/* eslint-disable no-magic-numbers */
import React from 'react';
import { Vega } from 'react-vega';
import sunburstSpec from '../../../unstructured-data/vega-example/sunburst-spec';
import flare from '../../../unstructured-data/vega-example/flare1.json';

const code1 = `<Vega data={this.state.data} spec={this.state.spec} onSignalHover={this.handleHover} />`;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: flare,
      info: '',
      spec: sunburstSpec,
    };

    this.handleHover = this.handleHover.bind(this);
    // this.handleToggleSpec = this.handleToggleSpec.bind(this);
    this.handleUpdateData = this.handleUpdateData.bind(this);
    this.handlers = { tooltip: this.handleHover };
  }

  handleHover(...args) {
    this.setState({
      info: JSON.stringify(args),
    });
  }

  handleUpdateData() {
    this.setState({ data: { flare } });
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
        <div>
          Hover info: <code>{info}</code>
        </div>
      </div>
    );
  }
}