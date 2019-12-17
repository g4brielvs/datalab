import React from 'react';
import PropTypes from 'prop-types';
import styles from './express.module.scss';

import Default from '../default/default';
import GenericHeader from '../../headers/genericHeader';
import HWCTALink from '../../hwcta-link/hwcta-link';
import MoreAnalyses from '../../more-analyses/more-analyses';

import logo from '../../../images/logos/express.png';

export default class ExpressLayout extends React.Component {
  render = () => <Default className={styles.expressTemplate}>
    <GenericHeader />
    <main className={styles.page}>
      <img src={logo} alt='Datalab Express logo' />
      <header className={styles.header}>{this.props.title}</header>
      {/* <div className={styles.toolPage}>
      <header className={styles.header}>
        <Grid container justify='space-between'>
          <Grid item className={styles.title}>{this.props.title}</Grid>
        </Grid>
      </header>
      <section>
        <p className={styles.intro} dangerouslySetInnerHTML={{ __html: this.props.introSentence }}></p>
        <p className={styles.p} dangerouslySetInnerHTML={{ __html: this.props.contextStatement }}></p>
      </section>

      <div className={styles.main}>
        <article>
          <section className={styles.childrenSection}>
            {this.props.children}
          </section>
          <section className={styles.followUp}>
            <Grid container>
              <Grid item xs={12} sm={4} lg={5}>
                <div className={styles.bodyIntro} dangerouslySetInnerHTML={{ __html: this.props.sectionTitle }}></div>
              </Grid>
              <Grid item xs={12} sm={8} lg={7}>
                <div dangerouslySetInnerHTML={{ __html: this.props.sectionText }}></div>
              </Grid>
            </Grid>
          </section>
        </article>
      </div>
    </div> */}
    </main>
    <HWCTALink url={this.props.hwctaLink || '#'} _mainClass={styles.hwcta} _noOffset='true' />
    <MoreAnalyses />
  </Default>
}


ExpressLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  // introSentence: PropTypes.string.isRequired,
  // contextStatement: PropTypes.string,
  // sectionTitle: PropTypes.string,
  // sectionText: PropTypes.string,
  // hwctaLink: PropTypes.string,
}
