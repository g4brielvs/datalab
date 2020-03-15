/* eslint-disable no-magic-numbers */
import React from 'react';
import { Vega } from 'react-vega';
import sunburstSpec from './utils/sunburst-spec';

import './sunburst-vega.scss';
import PropTypes from "prop-types"

/* PLEASE DO NOT DELETE this import
  This code is used to transform the sunburst data in to code that's usable by Vega.  This should be handled on the data analyst
  side but hasn't been rewritten yet due to the analyst backlog being long. */
// import transformData from './utils/transformData.js';

export default class Sunburst extends React.Component {
  constructor(props) {
    super(props);
    /* PLEASE DO NOT DELETE this console.log
        This code is used to transform the sunburst data in to code that's usable by Vega.  This should be handled on the data analyst
        side but hasn't been rewritten yet due to the analyst backlog being long. */
    // console.log(transformData());

    this.state = {
      data: this.props.data,
      spec: sunburstSpec,
      selectedArc: this.props.default,
      previousArc: this.props.default
    };
    
    this.signalListeners = { arcClick: this.handleClick, arcHover: this.handleHover, arcUnhover: this.handleUnhover };
  }

  handleUnhover = () => {
    this.props.updatePanels();
  }

  handleHover = (...args) => {
    const item = args[1];
    this.props.updatePanels(item);
  }

  handleClick = (...args) => {
    const item = args[1];
    this.props.updateSunburst(item);
  }

  updateData = (data) => {
    this.setState({data: data});
  }

  render() {
    const { data, spec } = this.state;
    if (typeof window !== 'undefined') {
	// polyfill for vega library
	// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
		(function (arr) {
		  arr.forEach(function (item) {
			if (item.hasOwnProperty('append')) {
			  return;
			}
			Object.defineProperty(item, 'append', {
			  configurable: true,
			  enumerable: true,
			  writable: true,
			  value: function append() {
				var argArr = Array.prototype.slice.call(arguments),
				  docFrag = document.createDocumentFragment();
        
				argArr.forEach(function (argItem) {
				  var isNode = argItem instanceof Node;
				  docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});
        
				this.appendChild(docFrag);
			  }
			});
		  });
		})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
      return (
        <Vega data={data} spec={spec} signalListeners={this.signalListeners} />
      )
    } else {
      return <div></div>
    }
  }
}

Sunburst.propTypes = {
  updatePanels: PropTypes.func.isRequired,
  updateSunburst: PropTypes.func.isRequired,
  default: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}