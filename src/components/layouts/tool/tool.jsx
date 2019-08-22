import React from 'react'
import PropTypes from 'prop-types'
import './tool.scss'

import SiteHeader from '../../headers/site'
import PageHeader from '../../headers/page'
import ShareMenu from '../../share-menu/share-menu'
import HWCTALink from '../../hwcta-link/hwcta-link'
import MoreAnalyses from '../../more-analyses/more-analyses'
import PageFooter from '../../footers/page'
import SiteFooter from '../../footers/site'

const ToolLayout = props => (
  <>
  <SiteHeader />
  <PageHeader />
  <div className='page'>
    <header>
      <span className='title'>{props.title}</span>
      <span><ShareMenu /></span>
    </header>
    <section>
      <p className='intro' dangerouslySetInnerHTML={{__html: props.introSentence}}></p>
      <p dangerouslySetInnerHTML={{__html: props.contextStatement}}></p>
    </section>

    <main>
      <article>
        <section className='chart'>
          {props.children}
        </section>
        <section className='follow-up container-fluid'>
          <div className='row justify-content-center'>
            <div className='intro col-xs-5' dangerouslySetInnerHTML={{__html: props.sectionTitle}}></div>
            <div className='col-xs-7' dangerouslySetInnerHTML={{__html: props.sectionText }}></div>
          </div>
        </section>
      </article>
    </main>
    <HWCTALink url={'#'}/>
    <MoreAnalyses />
  </div>
  <PageFooter />
  <SiteFooter />
  </>
)

ToolLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  introSentence: PropTypes.string.isRequired,
  contextStatement: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  sectionText: PropTypes.string.isRequired,
}

export default ToolLayout
