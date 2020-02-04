/* eslint-disable no-magic-numbers */
import React from 'react';
import { Vega } from 'react-vega';
import sunburstSpec from './utils/sunburst-spec';
import * as _ from 'lodash';

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

    const data = this.appendColors(this.props.data);

    this.state = {
      data: data,
      spec: sunburstSpec,
      originalData: data,
      selectedArc: { name: 'flare', depth: 0 },
      previousArc: { name: 'flare', depth: 0 }
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleUnhover = this.handleUnhover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.filterSunburst = this.filterSunburst.bind(this);
    this.appendColors = this.appendColors.bind(this);
    this.updateSunburst = this.updateSunburst.bind(this);
    this.signalListeners = { arcClick: this.handleClick, arcHover: this.handleHover, arcUnhover: this.handleUnhover };
  }

  appendColors(flare) {
    let agencies = _.filter(flare.tree, { 'type': 'agency' });
    let agenciesColors = {};
    let colors = this.props.colors;
    agencies = _.map(agencies, 'name');
    agencies = _.uniqBy(agencies);

    for (let i = 0; i < agencies.length; i++) {
      agenciesColors[agencies[i]] = colors[i % colors.length];
    }

    flare.tree[0]['colorHex'] = '#fff';

    for (let i = 1; i < flare.tree.length; i++) {
      flare.tree[i]['colorHex'] = agenciesColors[flare.tree[i].agency];
    }

    return flare;
  };

  handleUnhover() {
    this.props.getSelectedArc(this.state.selectedArc);
  }

  handleHover(...args) {
    const item = args[1];
    this.props.getSelectedArc(item);
  }

  handleClick(...args) {
    const item = args[1];
    this.updateSunburst(item);
  }

  updateSunburst(arc) {
    const previousArc = this.state.selectedArc;
    this.setState({ selectedArc: arc });
    const newData = this.state.selectedArc.id === 1 ? this.state.originalData : { "tree": this.filterSunburst(this.state.selectedArc) };
    this.props.getSelectedArc(this.state.selectedArc);
    this.setState({ data: newData, previousArc: previousArc });
  }

  filterSunburst(selectedArc) {
    const flare = this.state.originalData;
    const { agency, name, depth } = selectedArc;
    let recipientSubAgencyIds, recipients, subagencies, subAgencyIds, agencyNames;

    if (depth === 2) {
      subagencies = _.filter(flare.tree, { 'name': name, 'type': 'subagency' });
      agencyNames = _.map(subagencies, 'agency');
      agencyNames = _.uniqBy(agencyNames);
      subAgencyIds = _.map(subagencies, 'id');

    } else if (depth === 3) {
      recipients = _.filter(flare.tree, { 'name': name, 'type': 'recipient' });
      agencyNames = _.map(recipients, 'agency');
      agencyNames = _.uniqBy(agencyNames);
      recipientSubAgencyIds = _.map(recipients, 'parent');

    }

    const filtered = flare.tree.filter(function (arc) {
      if(arc.id === 1) {
        return true;
      }

      if(depth === 1) {
        return arc.agency === agency;

      } else if (depth === 2) {
        switch (arc.depth) {
          case 1:
            return agencyNames.includes(arc.name);

          case 2:
            return arc.name === name;

          case 3:
            return subAgencyIds.includes(arc.parent);

        }

      } else if (depth === 3) {
        switch (arc.depth) {
          case 1:
            return agencyNames.includes(arc.name);

          case 2:
            return recipientSubAgencyIds.includes(arc.id);

          case 3:
            return arc.name === name;

        }
      }
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

Sunburst.propTypes = {
  getSelectedArc: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  data: PropTypes.object.isRequired
}