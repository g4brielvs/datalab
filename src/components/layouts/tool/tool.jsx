import React from 'react'
import PropTypes from 'prop-types'
import './tool.scss'

import ShareMenu from '../../share-menu/share-menu'
import MoreAnalyses from '../../more-analyses/more-analyses'
import PageFooter from '../../footers/page'
import SiteFooter from '../../footers/site'

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

    <main>
      <article>
        <section className='chart'>
          {props.children}
        </section>
        <section className='follow-up container-fluid'>
          <div className='row justify-content-center'>
            <div className='intro col-xs-5'>
              {props.sectionTitle}
            </div>
            <div className='col-xs-7'>
              {props.sectionText}
            </div>
          </div>
        </section>
      </article>
    </main>
    <MoreAnalyses />
    <PageFooter />
    <SiteFooter />
  </div>
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
