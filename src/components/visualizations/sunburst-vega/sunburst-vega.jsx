/* eslint-disable no-magic-numbers */
import React from 'react';
import { Vega } from 'react-vega';
import sunburstSpec from './utils/sunburst-spec';

import './sunburst-vega.scss';

/* PLEASE DO NOT DELETE this import
  This code is used to transform the sunburst data in to code that's usable by Vega.  This should be handled on the data analyst
  side but hasn't been rewritten yet due to the analyst backlog being long. */
// import transformData from './utils/transformData.js';

export default class Sunburst extends React.Component {
  constructor(props) {
    super(props);
    // console.log(transformData());

    this.state = {
      data: props.data,
      info: '',
      spec: sunburstSpec,
      originalData: props.data,
      agency: null,
      level: null
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdateData = this.handleUpdateData.bind(this);
    this.signalListeners = { arcClick: this.handleClick, arcHover: this.handleHover };
  }

  // works: data is updated by parent, but chart won't redraw when state changed below
  // componentDidUpdate(prevProps) { 
  //   if (this.props.data !== prevProps.data) {
  //     this.setState({ data: this.props.data });
  //   }
  // }

  handleHover(...args) {
    const item = args[1];
    this.props.getDetails(item);
  }

  handleClick(...args) {
    const item = args[1];
    const newData = item.id === 1 ? this.state.originalData : { "tree": this.handleUpdateData(item.id) };
    this.props.getDetails(item);
    this.setState({ data: newData, depth: item.depth });
  }

  handleUpdateData(newId) {
    const flare = this.state.originalData;

    let selectedArc = flare.tree.filter(function (item) {
      if (item.id === newId) {
        return item.agency;
      }
    });

    const agencyName = selectedArc[0].agency;
    const depth = selectedArc[0].depth;

    let filtered = flare.tree.filter(function (item) {

      if (item.id == 1) {
        return true;
      }

      switch (item.depth) {
        case 1:
          break;

        case 2:
          // if selected item is depth 3 and current item is parent
          if (depth === 3 && item.id === selectedArc[0].parent) {
            return true;
          }

          // if selected item is depth 2 and is current item
          // else selected item is depth 2 and is not current item
          if (depth === 2) {
            return (item.id === newId);
          }

          break;
        case 3:
          // if selected item is depth 2 and the current item is a child
          if (depth === 2 && item.parent === newId) {
            return true;
          }

          // if selected item is depth 2 and the current item is NOT a child
          if (depth === 2 && item.parent !== newId) {
            return false;
          }

          // if selected item is depth 3 and the current item is not the item
          if (depth == 3 && item.id !== newId) {
            return false;
          }

          break;
      }
      return (item.id == newId || item.parent == newId || item.agency == agencyName);
    });
    return filtered;
  }

  render() {
    const { data, spec } = this.state;
    if (typeof window !== 'undefined') {
      return (
        <Vega data={data} spec={spec} signalListeners={this.signalListeners} />
      )
    } else {
      return <div></div>
    }
  }
}