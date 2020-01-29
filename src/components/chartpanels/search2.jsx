import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';

export default class Search extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
  }

  render = () => (
    <List
      height={150}
      itemCount={1000}
      itemSize={35}
      width={350}
    >
      {this.props.children}
    </List>
  );
}
