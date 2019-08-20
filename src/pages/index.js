import React from "react"
import { Link, Img, graphql, useStaticQuery } from "gatsby"

import Home from "../components/layouts/home/home"
import Image from "../components/.demo/image"
import SEO from "../components/seo"
import Featured from "../components/featured-landing/featured"
import "../styles/index.scss"
import "../components/layouts/home/landing.scss"
import "../components/layouts/home/landing-dts.scss"
import "../components/layouts/home/landing-row.scss"
import main from "../images/home/collegehomepage.svg"
import contractExplorer from "../images/home/contract-explorer.svg"
import cg from "../images/home/cg-gif.gif"
import contractSpending from "../images/home/c-o-t.png"
import Highlight from "../components/highlight-landing/highlight"
import "./index.scss"
import MoreAnalyses from "../components/more-analyses/more-analyses"
import Dts from "../components/visualizations/dts/dts"


const IndexPage = () => (
  <Home>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article id="main">
      <div className="container">
        <div className="row center-xs">
          <div class="col-xs-6">
              <Featured
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
              <Dts/>

              <Highlight
                heading={'Contract Spending Analysis'}
                subheading={['How has federal', <br/>, 'contract spending',<br/>,' changed over time?']}
                href={'contract-explorer.html'}
                imgSrc={contractSpending}
                imgAlt={' '}
                body={`We explore 10 years of contract data, and provide an analysis of the
                impact of short-term continuing resolutions on contract spending.`}
              />

              <Highlight
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

      <section className="landing-row landing-row--analyses">
        <h1 className="landing-row__heading">
          More Analyses
        </h1>
        <MoreAnalyses/>
        <div className="landing-row__featured">

            <Featured
              imgSrc={cg}
              imgAlt={'Answer all your questions about federal government finance'}
              heading={"Your Guide to America's Finances"}
              body={`Your Guide to America's Finances is an overview of federal government finances in 2018, providing
                information on spending, revenue, the deficit, and debt. The Guide, which is created by Treasury's Data
                Lab,
                presents a series of interactive visualizations to allow you to explore these categories and how they
                have
                changed over time. Ultimately, the Guide seeks to provide a comprehensive overview of the trillions of
                dollars collected and spent by the federal government each year.`}
              mobileBody={`The Guide presents straightforward information about the federal government's spending and revenue, as
                  well as the deficit and debt in 2018.`
              } />
        </div>

      </section>

      <section className="feature-row">
        <a href="/homelessness-analysis.html"
           ga-on="click" ga-event-category="Data Lab Home Page" ga-event-action="Clicked 'Homelessness Analysis'"
        >
          <div className="feature-row__border">
            <div className="feature-row__text">
              <h1 className="feature-row__heading">
                Homelessness Analysis
              </h1>
              <p className="feature-row__title">
                Explore federal programs that address homelessness
              </p>
              <p className="feature-row__blurb">
                On a single night in 2016, more than 500,000 people experienced homelessness in the United States. With
                our
                visualizations, you can see which federal programs are addressing homelessness, the amount of federal
                spending on homelessness by region, and where individuals experiencing homelessness are located. We also
                provide information about which regions are similar to others based on their homeless populations and
                funding profiles.
              </p>
            </div>
            <div className="feature-row__image">
              <img src="../images/home/homelessness.png"/>
            </div>
          </div>
        </a>
      </section>


      <section className="landing-row landing-row--resources">
        <h1 className="landing-row__heading">
          Resources
        </h1>
        <div className="landing-row__tiles">

          <div className="landing-row__tile landing-row__tile--primary">
            <div className="landing-row__text">
              <p className="landing-row__title">
                Do you want
                <strong> to conduct your own analysis?</strong>
              </p>
              <p className="landing-row__p">
                Access Treasury data and create your own charts and visualizations!
              </p>
            </div>
          </div>

          <a className="landing-row__tile" href="http://api.usaspending.gov/">
            <img src="../images/home/resources-api-2.svg" className="svgImg"/>
            <div className="landing-row__text">
              <h1 className="landing-row__title landing-row__title-mod">
                API Guide
              </h1>
              <p className="landing-row__p landing-row__p--hide">
                Guidance on accessing Treasury data with open source code.
              </p>
            </div>
          </a>

          <a className="landing-row__tile" href="/assets/analyst-guide-1-2.pdf">
            <img src="../images/home/resources-user-guide-2.svg" className="svgImg"/>
            <div className="landing-row__text">
              <h1 className="landing-row__title landing-row__title-mod">
                Analyst Guide
              </h1>
              <p className="landing-row__p landing-row__p--hide">
                Methods to easily navigate data from our sister site, USAspending.gov
              </p>
            </div>
          </a>

          <a className="landing-row__tile landing-row__tile--last" href="/student-innovators-toolbox.html">
            <img src="../images/home/resources-playbook-2.svg" className="svgImg"/>
            <div className="landing-row__text">
              <h1 className="landing-row__title landing-row__title-mod">
                Student Innovators Toolbox
              </h1>
              <p className="landing-row__p landing-row__p--hide">
                Ways for professors and students to get involved.
              </p>
            </div>
          </a>


        </div>


      </section>

      </div>
    </article>
    <div className="clearfix"></div>

  </Home>
)

export default IndexPage


