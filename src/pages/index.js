import React from "react"
import { Link, Img, graphql, useStaticQuery } from "gatsby"

import Home from "../components/layouts/home/home"
import SEO from "../components/seo"
import FeaturedAnalysesTile from "../page-sections/home/featured-analyses-tile/featured-analyses-tile"
import "../styles/index.scss"
import "../components/layouts/home/landing.scss"
import "../components/layouts/home/landing-dts.scss"
import "../page-sections/home/featured-analyses-row/featured-analyses-row.scss"
import main from "../images/home/collegehomepage.svg"
import contractExplorer from "../images/home/contract-explorer.svg"
import cg from "../images/home/cg-gif.gif"
import contractSpending from "../images/home/c-o-t.png"
import SecondaryAnalysesTile from "../page-sections/home/secondary-analyses-tile/secondary-analyses-tile"
import "../styles/index.scss"
import "./index.scss"
import DtsLanding from "../page-sections/home/dts-tile/dts-landing"
import MoreAnalysesLanding from "../page-sections/home/more-analyses-landing/more-analyses-landing"
import FeaturedAnalysesRow from "../page-sections/home/featured-analyses-row/featured-analyses-row"
import Resources from "../page-sections/home/resources/resources"


const IndexPage = () => (
  <Home>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container-fluid">
        <div className="row center-xs">
          <div class="col-xs-8">
              <FeaturedAnalysesTile
                imgSrc={main}
                imgAlt={'Answer all your questions about federal government finance'}
                heading={'Federal Investment in Higher Education'}
                body={`The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges and
                  universities through grants, contracts, and student aid. This interactive analysis gives you an
                  opportunity to search schools and discover how much the government has invested in that institution. In
                  the visualizations you can also break down the investment by federal agency and view data by investment
                  category. This analysis gives the public an interactive lens into the government’s investment in higher
                  education.`}
                mobileBody={`The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges
                  and universities. Dive in and search by individual schools, federal agencies, or investment
                  categories!`
                } />
        </div>

        <div className="col-xs-4">
              <DtsLanding/>

              <SecondaryAnalysesTile
                heading={'Contract Spending Analysis'}
                subheading={['How has federal', <br/>, 'contract spending',<br/>,' changed over time?']}
                href={'contract-explorer.html'}
                imgSrc={contractSpending}
                imgAlt={' '}
                body={`We explore 10 years of contract data, and provide an analysis of the
                impact of short-term continuing resolutions on contract spending.`}
              />

              <SecondaryAnalysesTile
                heading={'Contract Explorer'}
                subheading={['Who receives federal',<br/>,' contracts?']}
                href={'contract-explorer.html'}
                imgSrc={contractExplorer}
                imgAlt={' '}
                body={`The federal government spends about $500 billion each year on contracts. Learn more
                    about contract recipients and what agencies receive from these contracts.`}
              />
        </div>
      </div>

      <MoreAnalysesLanding/>
      <FeaturedAnalysesRow/>
      <Resources/>

      </div>

  </Home>
)

export default IndexPage


