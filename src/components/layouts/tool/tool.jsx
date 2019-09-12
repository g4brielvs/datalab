import React from 'react'
import PropTypes from 'prop-types'
import './tool.scss'

import Grid from '@material-ui/core/Grid';

import SiteHeader from '../../headers/site'
import PageHeader from '../../headers/page'
import ShareMenu from '../../share-menu/share-menu'
import HWCTALink from '../../hwcta-link/hwcta-link'
import MoreAnalyses from '../../more-analyses/more-analyses'
import PageFooter from '../../footers/page'
import SiteFooter from '../../footers/site'

class ToolLayout extends React.Component {
  render = () => <>
    <SiteHeader />
    <PageHeader />
    <div className='tool-page'>
      <header>
        <Grid container justify='space-between'>
          <Grid item className='title'>{this.props.title}</Grid>
          <Grid item><ShareMenu /></Grid>
        </Grid>
      </header>
      <section>
        <p className='intro' dangerouslySetInnerHTML={{ __html: this.props.introSentence }}></p>
        <p dangerouslySetInnerHTML={{ __html: this.props.contextStatement }}></p>
      </section>

      <main>
        <article>
          <section>
            {this.props.children}
          </section>
          <section className='follow-up'>
            <Grid container>
              <Grid item xs={4}>
                <div className='intro' dangerouslySetInnerHTML={{ __html: this.props.sectionTitle }}></div>
              </Grid>
              <Grid item xs={8}>
                <div dangerouslySetInnerHTML={{ __html: this.props.sectionText }}></div>
              </Grid>
            </Grid>
          </section>
        </article>
      </main>
      <HWCTALink url={'#'} />
      <MoreAnalyses />
    </div>
    <PageFooter />
    <SiteFooter />
  </>
}


ToolLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  introSentence: PropTypes.string.isRequired,
  contextStatement: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  sectionText: PropTypes.string.isRequired,
}

export default ToolLayout
