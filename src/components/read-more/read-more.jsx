import React from 'react';
import PropTypes from 'prop-types';
import styles from './read-more.module.scss';

export default class ReadMore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clientHeight: 'auto',
      isOpen: false
    };
  }

  toggleReadMore = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render = () => {
    const inlineStyle = {
      'height': this.state.isOpen ? this.state.clientHeight : this.props.collapsedHeight,
      'overflow-y': 'hidden',
      'transition': 'height ' + this.props.animation
    };
    const className = this.props.className;
    const baseClass = className + ' ' + className + '--' + (this.state.isOpen ? 'open' : 'closed');
    return (
      <div className={className + '__wrapper'}>
        <div
          className={baseClass}
          style={inlineStyle}
          dangerouslySetInnerHTML={{ __html: this.props.children }}
        ></div>
        <button
          className={styles.button}
          onClick={() => { this.toggleReadMore() }}
        >
          {this.state.isOpen ? this.props.collapseText : this.props.expandText}
        </button>
      </div>
    );
  };
}

ReadMore.propTypes = {
  expandText: PropTypes.string,
  collapseText: PropTypes.string,
  collapsedHeight: PropTypes.string,
  animation: PropTypes.string
}

ReadMore.defaultProps = {
  expandText: 'Read more...',
  collapseText: 'Read less...',
  collapsedHeight: '6em',
  animation: '1s ease'
};
