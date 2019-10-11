import './viz-detail.scss'; // because this overrides MUI class names and they are mixed-case with hyphens, CSS module won't work here
import React from 'react';
import PropTypes from 'prop-types';

import { Paper, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class VizDetailPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
    this.expandDetails = this.expandDetails.bind(this);
  }

  expandDetails() {
    this.setState({ expanded: true });
  }

  closeDetails() {
    this.setState({ expanded: false });
  }

  renderDetails() {
    let tables;
    if (this.props.details.tables) {
      tables = this.renderTables(this.props.details.tables);
    }

    const header = this.props.details.header;
    if (header) {
      let display = <>
        <Grid container justify='space-between' alignItems='baseline'>
          <Grid item xs={12} className='label'>{header.title}</Grid>
          <Grid item xs={12} className='itemName'>{header.itemName}</Grid>
          <Grid item xs={12} className='label'>{header.label}</Grid>
          <Grid item xs={12} className='itemName'>{header.subitemName}</Grid>
          <Grid item xs={6} className='col1title'>{header.totalLabel}</Grid>
          <Grid item xs={6} className='col2title'>${header.totalValue.toLocaleString('en')}</Grid>
        </Grid>
        {tables}
      </>
      return display;
    }
  }

  renderTables(data) {
    let tableFrag = [];
    data.forEach(table => {
      let rowsFrag = [];
      if (table.rows) {
        Object.keys(table.rows).forEach(rowLabel => {
          rowsFrag.push(<tr>
            <td>{rowLabel}</td>
            <td>${table.rows[rowLabel].toLocaleString('en')}</td>
          </tr>);
        });
      }
      tableFrag.push(<table><thead><tr>
        <th>{table.col1Title}</th>
        <th>{table.col2Title}</th>
      </tr></thead>
        <tbody>
          {rowsFrag}
        </tbody>
      </table>);
    });
    return tableFrag;
  }

  render = () => (
    <Paper className={'details' + (this.state.expanded ? ' expanded' : '')}>
      <IconButton className='closeButton'
        onClick={() => this.closeDetails()}
      >
        <HighlightOffIcon />
      </IconButton>
      {this.renderDetails()}
    </Paper>
  );
};

/*
  Notes on props:
  showDetails is a function on the parent viz triggering opening this panel
  details is all the info for the details to display, with main properties "header" and array of "table"s
  e.g.
{
  'header': {
    'title': 'Institution',
    'itemName': 'Central College',
    'label': 'Public, 2-year',
    'subItemName': null,
    'totalLabel': 'Total $ Received',
    'totalValue': 1100000
  },
  'tables': [
    {
      'col1Title': 'Funding Investment Type',
      'col2Title': null,
      'rows': {
        'Contracts': 35000,
        'Grants': 590200,
        '   Grants (Research)': 0
      }
    },
    {
      'col1Title': 'Institution (Top 5)',
      'col2Title': 'Toatal Investment',
      'rows': {
        'UNLV': 35000,
        'Baker College': 590200,
        'Massachusetts General Hospital Dietetic Intership': 6954359235967253
      }
    }
  ]
}
*/

VizDetailPanel.propTypes = {
  showDetails: PropTypes.func,
  details: PropTypes.object.isRequired
};
