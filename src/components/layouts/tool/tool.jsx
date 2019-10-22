import React from 'react';
import PropTypes from 'prop-types';
import styles from './tool.module.scss';

import Grid from '@material-ui/core/Grid';
import Default from '../default/default';
import HWCTALink from '../../hwcta-link/hwcta-link';
import MoreAnalyses from '../../more-analyses/more-analyses';

export default class ToolLayout extends React.Component {
  render = () =>
    <Default>
      <div className={styles.toolPage}>
        <header className={styles.header}>
          <Grid container justify='space-between'>
            <Grid item className={styles.title}>{this.props.title}</Grid>
          </Grid>
        </header>
        <section>
          <p className={styles.intro} dangerouslySetInnerHTML={{ __html: this.props.introSentence }}></p>
          <p className={styles.p} dangerouslySetInnerHTML={{ __html: this.props.contextStatement }}></p>
        </section>

        <main className={styles.main}>
          <article>
            <section>
              {this.props.children}
            </section>
            <section className={styles.followUp}>
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <div className={styles.bodyIntro} dangerouslySetInnerHTML={{ __html: this.props.sectionTitle }}></div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div dangerouslySetInnerHTML={{ __html: this.props.sectionText }}></div>
                </Grid>
              </Grid>
            </section>
          </article>
        </main>
        <HWCTALink url={this.props.hwctaLink || '#'} _mainClass={styles.hwcta} _noOffset='true' />
        <MoreAnalyses />
      </div>
    </Default>
}


ToolLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  introSentence: PropTypes.string.isRequired,
  contextStatement: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  sectionText: PropTypes.string.isRequired,
  hwctaLink: PropTypes.string,
}

// export default ToolLayout
