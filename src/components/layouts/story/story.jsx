/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./story.scss"
import Default from "../default/default"
import HWCTALink from "../../hwcta-link/hwcta-link"
import MoreAnalyses from "../../more-analyses/more-analyses"
import Toc from "../../toc/toc"


const StoryLayout = (props) => (
    <Default>
      <header className="header--hero">
        <div className="row center-xs">
          <div className="col-xs-10">
            <p className="header__title">
              {props.title}
            </p>
            <p className="header__introSentence">
              {props.introSentence}
            </p>
            <p className="header__contextStatement">
              {props.contextStatement}
            </p>
          </div>
        </div>
      </header>

      <Toc
        sections={
          [{
            section: "one",
            number: "01",
            subtext: "Investment Overview",
            subblurb: "WHAT IS A FEDERAL INVESTMENT?",
            blurb: "Learn more about the three categories of federal investments: student aid, grants, and contracts."
          },
            {
              section: "two",
              number: "02",
              subtext: "My Alma Mater",
              subblurb: "How much did my school receive?",
              blurb: "Search for your school and discover details about federal funding at your alma mater."
            },
            {
              section: "three",
              number: "03",
              subtext: "Agency Investment",
              subblurb: "Which federal agencies are involved?",
              blurb: "Find out which federal agencies provide investments and in what amounts."
            },
            {
              section: "four",
              number: "04",
              subtext: "Investment Categories",
              subblurb: "What are the investments used for?",
              blurb: "Discover more about what is funded by federal investment."
            }
          ]}
      />

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

      {/*<MoreAnalyses />*/}

    </Default>
)
export default StoryLayout

StoryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

