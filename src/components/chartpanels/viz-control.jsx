import React from 'react';
import PropTypes from 'prop-types';
import styles from './viz-control.module.scss';

import SearchPanel from './search';
import { IconButton, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';

export default class VizControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'chart',
      expanded: false
    };
  }

  activateButton(button) {
    if (button === 'search') {
      this.toggleSearch();
    }
    if (button !== this.state.activeButton) {
      if (button === 'chart') {
        this.props.switchView('chart');
      } else if (button === 'table') {
        this.props.switchView('table');
      } else if (button !== 'search') {
        console.log(`Invalid parameter to VizControlPanel.activateButton: ${button}`);
        return;
      }
      this.setState({ activeButton: button });
    }
  }

  toggleSearch() {
    this.setState(prevState => { return { expanded: !prevState.expanded } });
  }

  selectItem(id) {
    if (this.props.onSelect) {
      this.props.onSelect(id);
    }
  }

  render() {
    return (
      <div id='sidebar' className={styles.sidebar + (this.state.expanded ? '' : ' ' + styles.collapsed)}>
        <SearchPanel
          searchList={this.props.searchList}
          listDescription={this.props.listDescription}
          onSelect={this.props.onSelect}
        />

        <div>
          <IconButton
            aria-label='search'
            className={styles.panelGroup}
            onClick={() => this.activateButton('search')}
          >
            <SearchIcon className={(this.state.activeButton === 'search' ? styles.selected : styles.unselected)}
            />
          </IconButton>
          <div className={styles.panelGroup}>
            <IconButton
              aria-label='show chart'
              onClick={() => this.activateButton('chart')}
              className={(this.state.activeButton === 'chart' ? styles.selected : styles.unselected)}
            >
              {this.props.children}
            </IconButton>
            <Divider variant='middle' className={styles.divider} />
            <IconButton
              aria-label='show data table'
              onClick={() => this.activateButton('table')}
            >
              <ListIcon
                className={(this.state.activeButton === 'table' ? styles.selected : styles.unselected)}
              />
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
}

VizControlPanel.propTypes = {
  'searchList': PropTypes.arrayOf(PropTypes.object).isRequired,
  'listDescription': PropTypes.string.isRequired,
  'children': PropTypes.node.isRequired,
  'onSelect': PropTypes.func,
  'switchView': PropTypes.func.isRequired
}