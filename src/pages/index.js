import React from "react"

import Home from "../components/layouts/home/home"
import SEO from "../components/seo"
import FeaturedAnalysesTile from "../page-sections/home/featured-analyses-tile/featured-analyses-tile"
import SecondaryAnalysesTile from "../page-sections/home/secondary-analyses-tile/secondary-analyses-tile"
import DtsTile from "../page-sections/home/dts-tile/dts-tile"
import MoreAnalysesRow from "../page-sections/home/more-analyses-row/more-analyses-row"
import FeaturedAnalysesRow from "../page-sections/home/featured-analyses-row/featured-analyses-row"
import ResourcesRow from "../page-sections/home/resources-row/resources-row"

import main from "../images/home/collegehomepage.svg"
import contractExplorer from "../images/home/contract-explorer.svg"
import contractSpending from "../images/home/c-o-t.png"

import "../index.scss"
import "./index.scss"

const IndexPage = () => (
  <Home>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="container-fluid">
        <div className="row center-xs margin-bottom">
          <div class="col-xs-8">
              <FeaturedAnalysesTile
                href={'colleges-and-universities'}
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
        <DtsTile
          href={'dts'}
          heading={'Visualizing the Daily Treasury Statement'}
          title={'How much does the federal government spend each day?'} />

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

      <div className="row margin-bottom">
        <div className="col-xs-12">
          <MoreAnalysesRow/>
        </div>
      </div>

      <div className="row margin-bottom">
        <div className="col-xs-12">
          <FeaturedAnalysesRow
            href={'homelessness-analysis'}
            heading={'Homelessness Analysis'}
            title={'Explore federal programs that address homelessness'}
            blurb={`On a single night in 2016, more than 500,000 people experienced homelessness in the United States. With
                our visualizations, you can see which federal programs are addressing homelessness, the amount of federal
                spending on homelessness by region, and where individuals experiencing homelessness are located. We also
                provide information about which regions are similar to others based on their homeless populations and
                funding profiles.`}
            />
        </div>
      </div>


      <div className="row margin-bottom">
        <div className="col-xs-12">
          <ResourcesRow/>
        </div>
      </div>

    </div>

  </Home>
)

export default IndexPage


