import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/default/layout"
import Image from "../components/demo/image"
import SEO from "../components/seo"
import "../styles/index.scss"
import "../styles/landing.scss"
import "../styles/landing-dts.scss"
import "../styles/landing-row.scss"
import main from "../images/index/collegehomepage.svg"
import featured from "../images/index/c-o-t.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article id="main">
      <div className="dl-landing">
        <section className="primary">
          <a href="/colleges-and-universities.html"
             className="primary__link"
             ga-on="click" ga-event-category="Data Lab Home Page"
             ga-event-action="Clicked 'Federal Investment in Higher Education'"
          >
            <h1 className="primary__mobile-heading">
              Federal Investment in Higher Education
            </h1>

            <img className="primary__image" src={main} alt="Answer all your questions about federal government finance"/>
            <div className="primary__content">

              <h2 className="primary__heading">
                Federal Investment in Higher Education
              </h2>

              <p className="primary__text primary__text--desktop">
                The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges and
                universities through grants, contracts, and student aid. This interactive analysis gives you an
                opportunity to search schools and discover how much the government has invested in that institution. In
                the visualizations you can also break down the investment by federal agency and view data by investment
                category. This analysis gives the public an interactive lens into the government’s investment in higher
                education.
              </p>

              <div className="primary__text_container">
                <p className="primary__text primary__text--mobile">
                  The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges
                  and universities. Dive in and search by individual schools, federal agencies, or investment
                  categories!
                </p>
              </div>

            </div>

          </a>
        </section>
        <section className="secondary">
          <section className="landing-chart">
            <a href="dts.html"
               className="landing-chart__link"
               ga-on="click" ga-event-category="Data Lab Home Page"
               ga-event-action="Clicked 'Visualizing the Daily Treasury Statement'"
            >
              <h1>
                Visualizing the Daily Treasury Statement
              </h1>
              <h2>
                How much does the federal government spend each day?
              </h2>
              {/*{% include landing-dts.html %}*/}
            </a>
          </section>
          <section className="landing-feature">
            <a href="contracts-over-time.html"
               className="landing-feature__link"
               ga-on="click" ga-event-category="Data Lab Home Page"
               ga-event-action="Clicked 'Contract Spending Analysis'"
            >
              <div className="landing-feature__headings">
                <h1>
                  Contract Spending Analysis
                </h1>
                <h2>
                  How has federal<br/> contract spending<br/> changed over time?
                </h2>
              </div>
              <div className="landing-feature__image">
                <img className="" src={featured} />
              </div>
              <p className="landing-feature__text">
                We explore 10 years of contract data, and provide an analysis of the
                impact of short-term continuing resolutions on contract spending.
              </p>

            </a>
          </section>
          <section className="landing-feature">
            <a href="contract-explorer.html"
               className="landing-feature__link"
               ga-on="click" ga-event-category="Data Lab Home Page" ga-event-action="Clicked 'Contract Explorer'"
            >
              <div className="landing-feature__headings">
                <h1>
                  Contract Explorer
                </h1>
                <h2>
                  Who receives federal contracts?
                </h2>
              </div>
              <div className="landing-feature__image">
                <img className="" src="../images/index/contract-explorer.svg"/>
              </div>
              <p className="landing-feature__text">
                The federal government spends about $500 billion each year on contracts. Learn more
                about contract recipients and what agencies receive from these contracts.
              </p>
            </a>
          </section>
        </section>
      </div>
      <section className="landing-row landing-row--analyses">
        <h1 className="landing-row__heading">
          More Analyses
        </h1>
        <div className="landing-row__featured">
          <a href="/americas-finance-guide/"
             className="landing-row__featured__link"
             ga-on="click" ga-event-category="Data Lab Home Page"
             ga-event-action="Clicked 'Your Guide to Americas Finances'"
          >
            <h2 className="landing-row__featured__mobile-heading">
              Your Guide to America's Finances
            </h2>
            <img className="landing-row__featured__image" src="../images/index/cg-gif.gif"
                 alt="Answer all your questions about federal government finance"/>
            <div className="landing-row__featured__content">

              <h2 className="landing-row__featured__heading">
                Your Guide to America's Finances
              </h2>

              <p className="landing-row__featured__text landing-row__featured__text--desktop">
                Your Guide to America's Finances is an overview of federal government finances in 2018, providing
                information on spending, revenue, the deficit, and debt. The Guide, which is created by Treasury's Data
                Lab,
                presents a series of interactive visualizations to allow you to explore these categories and how they
                have
                changed over time. Ultimately, the Guide seeks to provide a comprehensive overview of the trillions of
                dollars collected and spent by the federal government each year.
              </p>

              <div className="landing-row__featured__text_container">
                <p className="landing-row__featured__text">
                  The Guide presents straightforward information about the federal government's spending and revenue, as
                  well as the deficit and debt in 2018.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="landing-row__tiles">
          <div className="landing_row__tile-row">
            <a href="federal-account-explorer.html"
               className="landing-row__tile"
               ga-on="click" ga-event-category="Data Lab Home Page" ga-event-action="Clicked 'Federal Account Explorer'"
            >
              <div className="landing-row__text">
                <h2>
                  Federal Account Explorer
                </h2>
                <p className="landing-row__title">
                  Discover the federal government's spending accounts
                </p>
              </div>
              <div>
                <img src="../images/index/federal.jpg" className="landing-row__image"/>
              </div>
            </a>
            <a href="federal-employees.html"
               className="landing-row__tile"
               ga-on="click" ga-event-category="Data Lab Home Page" ga-event-action="Clicked 'Federal Employees'"
            >
              <div className="landing-row__text">
                <h2>
                  Federal Employees
                </h2>
                <p className="landing-row__title">
                  Who works in government?
                </p>
              </div>
              <div>
                <img src="../images/index/workers.jpg" className="landing-row__image"/>
              </div>
            </a>
          </div>

          <div className="landing_row__tile-row">
            <a href="budget-function.html"
               className="landing-row__tile"
               ga-on="click" ga-event-category="Data Lab Home Page" ga-event-action="Clicked 'Budget Function'"
            >
              <div className="landing-row__text">
                <h2>
                  Budget Function
                </h2>
                <p className="landing-row__title">
                  Check out how federal spending is categorized
                </p>
              </div>
              <div>
                <img src="../images/index/budget.jpg" className="landing-row__image"/>
              </div>
            </a>

            <a href="competition-in-contracting.html"
               className="landing-row__tile"
               ga-on="click" ga-event-category="Data Lab Home Page"
               ga-event-action="Clicked 'Competition in Contracting'"
            >
              <div className="landing-row__text">
                <h2>
                  Competition in Contracting
                </h2>
                <p className="landing-row__title">
                  How often do federal agencies compete for contracts?
                </p>
              </div>
              <div>
                <img src="../images/index/competition.jpg" className="landing-row__image"/>
              </div>
            </a>
          </div>

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
              <img src="../images/index/homelessness.png"/>
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
            <img src="../images/index/resources-api-2.svg" className="svgImg"/>
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
            <img src="../images/index/resources-user-guide-2.svg" className="svgImg"/>
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
            <img src="../images/index/resources-playbook-2.svg" className="svgImg"/>
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


    </article>
    <div className="clearfix"></div>

      {/*<Link to="/sankey/">Budget Sankey</Link>&nbsp;|&nbsp;*/}
    {/*<Link to="/d3test/">D3 Example</Link>&nbsp;|&nbsp;*/}
    {/*<Link to="/chart/">Bar Chart Example</Link>*/}


  </Layout>
)

export default IndexPage
