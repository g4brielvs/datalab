import React from 'react';
import PropTypes from 'prop-types';
import './tool.scss';

import ShareMenu from '../../share-menu/share-menu';

const ToolLayout = props => (
  <div className='page'>
    <header>
      <span className='title'>{props.title}</span>
      <span><ShareMenu /></span>
    </header>
    <section>
      <p className='intro'>{props.introSentence}</p>
      <p>{props.contextStatement}</p>
    </section>

    <main>{props.children}</main>
  </div>
)

ToolLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  introSentence: PropTypes.string.isRequired,
  contextStatement: PropTypes.string.isRequired,
}

export default ToolLayout
