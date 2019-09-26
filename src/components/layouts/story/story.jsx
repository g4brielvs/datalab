import React from "react"
import PropTypes from "prop-types"
import "./story.scss"

import Default from "../default/default"
import { Grid } from "@material-ui/core"
import HwctaLink from "../../hwcta-link/hwcta-link"
import MoreAnalyses from "../../more-analyses/more-analyses"
import Toc from "../../toc/toc"


const StoryLayout = (props) => {
  let header, toc;

  if (!props.isCustomHeader) {
    header =
      <Grid container>
        <Grid item>
          <header className="header--hero">
            <p className="header__title">
              {props.title}
            </p>
            <p className="header__introSentence">
              {props.introSentence}
            </p>
            <p className="header__contextStatement">
              {props.contextStatement}
            </p>
          </header>
        </Grid>
      </Grid>;

    toc = <Toc sections={props.sectionToc} />

  }
  return <Default>
    <div className="story-page">
      {header}
      {toc}

      <main>
        {props.children}
      </main>

      <HwctaLink url={'#'} />

      <MoreAnalyses />
    </div>

  </Default>
}

export default StoryLayout

StoryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

