import React from "react"
import Helmet from 'react-helmet'
import SiteLayout from "../components/siteLayout/siteLayout";
import LandingDts from "../components/landingDts/landingDts";

const IndexPage = () => (
  <SiteLayout>
    <Helmet>
      <link rel="stylesheet" href="/analyses/landing.css" />
    </Helmet>

    <article id="main">
      <div className="dl-landing">

        <section className="primary">
          <a className="primary__link" href="/americas-finance-guide/">
            <h1 className="primary__mobile-heading">
              Your Guide to America's Finances
      </h1>

            <img className="primary__image" src="/homepage/cg-gif.gif"
              alt="Answer all your questions about federal government finance" />
            <div className="primary__content">

              <h2 className="primary__heading">
                Your Guide to America's Finances
        </h2>

              <p className="primary__text primary__text--desktop">
                Your Guide to America's Finances is an overview of federal government finances in 2018, providing
                information on spending, revenue, the deficit, and debt. The Guide, which is created by Treasury's Data Lab,
                presents a series of interactive visualizations to allow you to explore these categories and how they have
                changed over time. Ultimately, the Guide seeks to provide a comprehensive overview of the trillions of
                dollars collected and spent by the federal government each year.
        </p>

              <div className="primary__text_container">
                <p className="primary__text">
                  The Guide presents straightforward information about the federal government's spending and revenue, as
                  well as the deficit and debt in 2018.
          </p>
              </div>

            </div>

          </a>
        </section>

        <section className="secondary">

          <section className="landing-chart">
            <a className="landing-chart__link" href="dts.html">
              <h1>
                Visualizing the Daily Treasury Statement
        </h1>
              <h2>
                How much does the federal<br />government spend each day?
        </h2>
            <LandingDts></LandingDts>
            </a>

          </section>

          <section className="landing-feature">
            <a className="landing-feature__link" href="contracts-over-time.html">

              <div className="landing-feature__headings">
                <h1>
                  Contract Spending Analysis
          </h1>
                <h2>
                  How has federal<br /> contract spending<br /> changed over time?
          </h2>
              </div>

              <div className="landing-feature__image">
                <img className="" src="/homepage/c-o-t.png" />
              </div>
              <p className="landing-feature__text">
                We explore 10 years of contract data, and provide an analysis of the
                impact of short-term continuing resolutions on contract spending.
        </p>

            </a>
          </section>

          <section className="landing-feature">
            <a className="landing-feature__link" href="contract-explorer.html">


              <div className="landing-feature__headings">
                <h1>
                  Contract Explorer
          </h1>
                <h2>
                  Who receives <br />federal<br /> contracts?
          </h2>
              </div>
              <div className="landing-feature__image">
                <img className="" src="/homepage/contract-explorer.svg" />
              </div>

              <p className="landing-feature__text">
                The federal government spends about $500 billion each year on contracts. Learn more
                about contract recipients and what agencies receive from these contracts.
        </p>
            </a>
          </section>

        </section>
      </div>
      <section className="landing-row">
        <h1 className="landing-row__heading">
          More Analyses
  </h1>
        <div className="landing-row__tiles">

          <a className="landing-row__tile" href="federal-account-explorer.html">
            <div className="landing-row__text">
              <h2>
                Federal Account Explorer
        </h2>
              <p className="landing-row__title">
                Discover the federal government's spending accounts
        </p>
            </div>
            <div>
              <img src="/homepage/federal.jpg" className="landing-row__image" />
            </div>
          </a>

          <a className="landing-row__tile" href="federal-employees.html">
            <div className="landing-row__text">
              <h2>
                Federal Employees
        </h2>
              <p className="landing-row__title">
                Who works<br /> in government?
        </p>
            </div>
            <div>
              <img src="/homepage/workers.jpg" className="landing-row__image" />
            </div>
          </a>

          <a className="landing-row__tile" href="budget-function.html">
            <div className="landing-row__text">
              <h2>
                Budget Function
        </h2>
              <p className="landing-row__title">
                Check out how federal spending is categorized
        </p>
            </div>
            <div>
              <img src="/homepage/budget.jpg" className="landing-row__image" />
            </div>
          </a>

          <a className="landing-row__tile" href="competition-in-contracting.html">
            <div className="landing-row__text">
              <h2>
                Competition in Contracting
        </h2>
              <p className="landing-row__title">
                How often do federal agencies compete for contracts?
        </p>
            </div>
            <div>
              <img src="/homepage/competition.jpg" className="landing-row__image" />
            </div>
          </a>
        </div>
      </section>

      <section className="feature-row">
        <a href="/homelessness-analysis.html">
          <div className="feature-row__border">
            <div className="feature-row__image">
              <img src="/homepage/homelessness.png" />
            </div>
            <div className="feature-row__text">
              <h1 className="feature-row__heading">
                Homelessness Analysis
        </h1>
              <p className="feature-row__title">
                Explore federal programs that address <br />homelessness
        </p>
              <p className="feature-row__blurb">
                On a single night in 2016, more than 500,000 people experienced homelessness in the United States. With our
                visualizations, you can see which federal programs are addressing homelessness, the amount of federal
                spending on homelessness by region, and where individuals experiencing homelessness are located. We also
                provide information about which regions are similar to others based on their homeless populations and
                funding profiles.
        </p>
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
          <strong><br />to conduct your<br /> own analysis?</strong>
              </p>
              <p className="landing-row__p">
                Access Treasury data and<br /> create your own charts and<br /> visualizations!
        </p>
            </div>
          </div>

          <a className="landing-row__tile" href="http://api.usaspending.gov/">
            <img src="/homepage/resources-api-2.svg" className="svgImg" />
            <div className="landing-row__text">
              <h1 className="landing-row__title landing-row__title-mod">
                API Guide
        </h1>
              <p className="landing-row__p landing-row__p--hide">
                Guidance on accessing Treasury<br /> data with open source code.
        </p>
            </div>
          </a>

          <a className="landing-row__tile" href="/assets/analyst-guide-1-2.pdf">
            <img src="/homepage/resources-user-guide-2.svg" className="svgImg" />
            <div className="landing-row__text">
              <h1 className="landing-row__title landing-row__title-mod">
                Analyst Guide
        </h1>
              <p className="landing-row__p landing-row__p--hide">
                Methods to easily navigate data <br />from our sister site,<br /> USAspending.gov
        </p>
            </div>
          </a>

          <a className="landing-row__tile landing-row__tile--last" href="/student-innovators-toolbox.html">
            <img src="/homepage/resources-playbook-2.svg" className="svgImg" />
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
  </SiteLayout>
)

export default IndexPage
