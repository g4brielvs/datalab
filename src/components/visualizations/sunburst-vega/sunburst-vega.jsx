/* eslint-disable no-magic-numbers */
import React from 'react';
import { Vega } from 'react-vega';
import sunburstSpec from './utils/sunburst-spec';
import transformData from './utils/transformData.js';

export default class Sunburst extends React.Component {
  constructor(props) {
    super(props);
    console.log(transformData());

    this.state = {
      data: props.data[0],
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
    console.log('update');
    const flare = this.state.data;
    this.setState({ data: { flare } });
  }




  render() {
    const { data, spec, info } = this.state;

    // `<Vega data={this.state.data} spec={this.state.spec} onSignalHover={this.handleHover} />`
    return <Vega data={data} spec={spec} signalListeners={this.handlers} />;
  }
}