import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';

import { TextField, List, ListItem, ListItemText, IconButton, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'chart',
      expanded: false
    };
    this.filteredList = this.props.searchList;
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
        console.log(`Invalid parameter to SearchPanel.activateButton: ${button}`);
        return;
      }
      this.setState({ activeButton: button });
    }
  }

  toggleSearch() {
    this.setState(prevState => { return { expanded: !prevState.expanded } });
  }

  filterSearch(event) {
    this.filteredList = [];
    const filter = new RegExp(event.target.value, 'i');

    this.props.searchList.forEach(parent => {
      let keepParent = false;
      const childrenToKeep = [];

      if (parent.text.search(filter) !== -1) {
        keepParent = true;
      }
      if (parent.children) {
        parent.children.forEach(child => {
          if (child.text.search(filter) !== -1) {
            childrenToKeep.push(child);
          }
        });
      }
      if (keepParent || childrenToKeep.length > 0) {
        this.filteredList.push({ ...parent, children: childrenToKeep });
      }
    });
    this.forceUpdate();
  }

  selectItem(id) {
    if (this.props.onSelect) {
      this.props.onSelect(id);
    }
  }

  render() {
    return (
      <div id='sidebar' className={'sidebar' + (this.state.expanded ? '' : ' collapsed')}>
        <form className='search-panel'>
          <TextField
            label={'Search ' + this.props.listDescription}
            variant='outlined'
            className='select-box'
            onChange={event => this.filterSearch(event)}
          >
          </TextField>
          <List aria-label={'List of ' + this.props.listDescription}>
            {
              this.filteredList.map(parent => <>
                <ListItem
                  key={parent.id}
                  button
                  divider
                  onClick={event => this.selectItem(parent.id)}
                >
                  <ListItemText primary={parent.text} />
                </ListItem>
                {
                  parent.children ?
                    parent.children.map(child =>
                      <ListItem
                        key={child.id}
                        button
                        divider
                        onClick={event => this.selectItem(child.id)}
                      >
                        <ListItemText primary={parent.text} secondary={child.text} className='list-item' />
                      </ListItem>
                    )
                    : ''
                }
              </>)}
          </List>
        </form>
        <div>
          <IconButton
            aria-label='search'
            className='panel-group'
            onClick={() => this.activateButton('search')}
          >
            <SearchIcon className={(this.state.activeButton === 'search' ? 'selected' : 'unselected')}
            />
          </IconButton>
          <div className='panel-group'>
            <IconButton
              aria-label='show chart'
              onClick={() => this.activateButton('chart')}
              className={(this.state.activeButton === 'chart' ? 'selected' : 'unselected')}
            >
              {this.props.children}
            </IconButton>
            <Divider variant='middle' className='divider' />
            <IconButton
              aria-label='show data table'
              onClick={() => this.activateButton('table')}
            >
              <ListIcon
                className={(this.state.activeButton === 'table' ? 'selected' : 'unselected')}
              />
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
}

/*
  NOTE: searchList is expected to be an array of {id, text to display, children (optional; array of {id, text}) }
  id values are arbitrary, but must be unique within the list (expected but not enforced by SearchPanel)
  e.g. [
    {
      id: 1,
      text: 'R&D'
    }, {
      id: 2,
      text: 'Education',
      children: [
        {
          id: 3,
          text: 'Adult Education - Basic Grants to States'
        }, {
          id: 4,
          text: '1890 Institution Capacity Building Grants'
        }
      ]
    }, {
      id: 5,
      text: 'Medical R&D',
      children: [
        {
          id: 6,
          text: 'Human Genome Research'
        }
      ]
    }
  ]
*/

SearchPanel.propTypes = {
  'searchList': PropTypes.arrayOf(PropTypes.object).isRequired,
  'listDescription': PropTypes.string.isRequired,
  'children': PropTypes.node.isRequired,
  'onSelect': PropTypes.func,
  'switchView': PropTypes.func.isRequired
}