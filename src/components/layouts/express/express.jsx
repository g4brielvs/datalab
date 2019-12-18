import React from 'react';
import PropTypes from 'prop-types';
import styles from './express.module.scss';

import Default from '../default/default';
import GenericHeader from '../../headers/genericHeader';
import HWCTALink from '../../hwcta-link/hwcta-link';
import MoreAnalyses from '../../more-analyses/more-analyses';

import logo from '../../../images/logos/express.png';

export default class ExpressLayout extends React.Component {
  render = () =>
    <Default>
      <GenericHeader isHome={false} />
      <div className={styles.page}>
        <main>
          <div className={styles.header}>
            <img src={logo} alt='Datalab Express logo' className={styles.logo} />
            <header className={styles.title}>{this.props.title}</header>
            <p className={styles.topic}>{this.props.topic}</p>
          </div>

          {this.props.children}

        </main>
        <HWCTALink url={this.props.hwctaLink || '#'} _mainClass={styles.hwcta} />
        <MoreAnalyses />
      </div>
    </Default>
}

ExpressLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  hwctaLink: PropTypes.string
}
