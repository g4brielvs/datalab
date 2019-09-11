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


const StoryLayout = (props) => {
  let header, toc;

  if (!props.isCustomHeader) {
    header = <header className="header--hero">
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
      </header>;

      toc = <Toc
        sections={
          [{
            section: "Section 1",
            number: "01",
            subblurb: "Subtitle / Question"
          },
        {
          section: "Section 2",
          number: "02",
          subblurb: "Subtitle / Question"
        },
        {
          section: "Section 3",
          number: "03",
          subblurb: "Subtitle / Question"
        },
        {
          section: "Section 4",
          number: "04",
          subblurb: "Subtitle / Question"
        }
      ]}
    />

  }
  return <Default>
    {header}
    {toc}

    <main>
      <article>
        <section>
          {props.children}
        </section>
      </article>
    </main>

    <HWCTALink url={'#'}/>

    <MoreAnalyses />

  </Default>
}

export default StoryLayout

StoryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

