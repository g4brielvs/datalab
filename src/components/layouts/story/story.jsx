import React from "react"
import PropTypes from "prop-types"
import "./story.scss"

import Default from "../default/default"
import { Grid } from "@material-ui/core"
import PageHeader from '../../headers/page'
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
    <PageHeader
      headerItems={['Analyses', 'DataLab Express', "America's Finance Guide", 'Resources', 'Glossary']}
      megamenuItems={[
        {
          analyses: [
            { name: 'Colleges and Universities', link: 'colleges-and-universities.html' },
            { name: 'DTS Tracker', link: 'dts.html' },
            { name: 'Contract Spending Analysis', link: 'contracts-over-time.html' },
            { name: 'Federal Account Explorer', link: 'federal-account-explorer.html' },
            { name: 'Contract Explorer', link: 'contract-explorer.html' },
            { name: 'Homelessness Analysis', link: 'homelessness-analysis.html' },
            { name: 'Budget Function', link: 'budget-function.html' },
            { name: 'Federal Employees', link: 'federal-employees.html' },
            { name: 'Competition In Contracting', link: 'competition-in-contacting.html' }
          ]
        },
        {
          express: [
            { name: 'test express', link: 'test-link.html' }
          ]
        },
        {
          ffg: [
            { header: 'Overview', name: "America's Finance Guide", link: '#' },
            { header: 'Revenue', name: 'Revenue and GDP', link: '#' },
            { header: 'Revenue', name: 'Revenue Categories', link: '#' },
            { header: 'Revenue', name: 'Federal Revenue Trends', link: '#' },
            { header: 'Revenue', name: 'Country Comparison', link: '#' },
            { header: 'Spending', name: 'Spending and GDP', link: '#' },
            { header: 'Spending', name: 'Spending Categories', link: '#' },
            { header: 'Spending', name: 'Federal Spending Trends', link: '#' },
            { header: 'Spending', name: 'Country Comparison', link: '#' },
            { header: 'Deficit', name: 'Explore Deficit', link: '#' },
            { header: 'Deficit', name: 'Federal Deficit Trends', link: '#' },
            { header: 'Deficit', name: 'Country Comparison', link: '#' },
            { header: 'Debt', name: 'Explore Debt', link: '#' },
            { header: 'Debt', name: 'Federal Debt Trends', link: '#' },
            { header: 'Debt', name: 'Federal Debt Analysis', link: '#' },
            { header: 'Debt', name: 'Country Comparison', link: '#' },
          ]
        },
        {
          resources: [
            { name: 'Analyst Guide', link: '#' },
            { name: 'API Guide', link: '#' },
            { name: 'Data Model', link: '#' },
            { name: "Student Innovator's Toolbox", link: '#' },
          ]
        },
        {
          glossary: [
            { name: 'Glossary', link: '#' }
          ]
        },
      ] // end of whole array  
      }
      isHome={false}
    />

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

