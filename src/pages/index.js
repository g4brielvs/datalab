import React, { useEffect, useState } from "react"

import Home from "../components/layouts/home/home"
import SEO from "../components/seo"
import FeaturedAnalysesTile from "../page-sections/home/featured-analyses-tile/featured-analyses-tile"
import SecondaryAnalysesTile from "../page-sections/home/secondary-analyses-tile/secondary-analyses-tile"
import DtsTile from "../page-sections/home/dts-tile/dts-tile"
import MoreAnalysesRow from "../page-sections/home/more-analyses-row/more-analyses-row"
import FeaturedAnalysesRow from "../page-sections/home/featured-analyses-row/featured-analyses-row"
import ResourcesRow from "../page-sections/home/resources-row/resources-row"

import main from "../images/home/collegehomepage.svg"
import contractExplorer from "../images/home/contract-explorer.png"
import contractSpending from "../images/home/c-o-t.png"

import "../styles/index.scss"
import "./index.scss"
import { Helmet } from "react-helmet"


function IndexPage() {

  let [d3, setD3] = useState(window.d3)


  function handleScriptInject({ scriptTags }) {
    if (scriptTags) {
      const scriptTag = scriptTags[0]
      scriptTag.onload = () => {
        // I don't really like referencing window.
        console.log(`myExternalLib loaded!`, window.d3)
        setD3(d3)
      }
    }
  }

  return (
    <Home>
      <Helmet
        script={[{ src: "https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.min.js" }]}
        // Helmet doesn't support `onload` in script objects so we have to hack in our own
        onChangeClientState={(newState, addedTags) => handleScriptInject(addedTags)}
      />

      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

      <main role="main">
        <div className="container-fluid">
          <section className="featured-tile-row row center-xs">
            <div className="col-lg-8 col-md-12 featured-tile">
              <FeaturedAnalysesTile
                href={"colleges-and-universities"}
                imgSrc={main}
                imgAlt={"Answer all your questions about federal government finance"}
                heading={"Federal Investment in Higher Education"}
                body={`The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges and
										universities through grants, contracts, and student aid. This interactive analysis gives you an
										opportunity to search schools and discover how much the government has invested in that institution. In
										the visualizations you can also break down the investment by federal agency and view data by investment
										category. This analysis gives the public an interactive lens into the government’s investment in higher
										education.`}
                mobileBody={`The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges
										and universities. Dive in and search by individual schools, federal agencies, or investment
										categories!`
                }/>

            </div>

            <div className="col-lg-4 col-md-12">
              <DtsTile
                href={"dts"}
                heading={"Visualizing the Daily Treasury Statement"}
                title={"How much does the federal government spend each day?"}/>

              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <SecondaryAnalysesTile
                    heading={"Contract Spending Analysis"}
                    subheading={"How has federal contract spending changed over time?"}
                    href={"contract-explorer.html"}
                    imgSrc={contractSpending}
                    imgAlt={" "}
                    body={`We explore 10 years of contract data, and provide an analysis of the
									impact of short-term continuing resolutions on contract spending.`}
                  />
                </div>

                <div className="col-lg-12 col-md-6 col-sm-12">
                  <SecondaryAnalysesTile
                    heading={"Contract Explorer"}
                    subheading={"Who receives federal contracts?"}
                    href={"contract-explorer.html"}
                    imgSrc={contractExplorer}
                    imgAlt={" "}
                    body={`The federal government spends about $500 billion each year on contracts. Learn more
											about contract recipients and what agencies receive from these contracts.`}
                  />
                </div>
              </div>

            </div>
          </section>

          <section className="more-analyses-row row">
            <div className="col-xs-12">
              <MoreAnalysesRow/>
            </div>
          </section>

          <section className="featured-row row">
            <div className="col-xs-12">
              <FeaturedAnalysesRow
                href={"homelessness-analysis"}
                heading={"Homelessness Analysis"}
                title={"Explore federal programs that address homelessness"}
                blurb={`On a single night in 2016, more than 500,000 people experienced homelessness in the United States. With
									our visualizations, you can see which federal programs are addressing homelessness, the amount of federal
									spending on homelessness by region, and where individuals experiencing homelessness are located. We also
									provide information about which regions are similar to others based on their homeless populations and
									funding profiles.`}
              />
            </div>
          </section>

          <section className="resource-row row">
            <div className="col-xs-12">
              <ResourcesRow/>
            </div>
          </section>

        </div>
      </main>

    </Home>
  )
}

export default IndexPage


