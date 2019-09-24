import React from "react"
import { Grid } from "@material-ui/core"


import Home from "../components/layouts/home/home"
import SEO from "../components/seo"
import MainTile from "../page-sections/home/main-tile/main-tile"
import SecondaryTile from "../page-sections/home/secondary-tile/secondary-tile"
import DtsTile from "../page-sections/home/dts-tile/dts-tile"
import MoreAnalysesRow from "../page-sections/home/more-analyses-row/more-analyses-row"
import FeatureRow from "../page-sections/home/feature-row/feature-row"
import ResourcesRow from "../page-sections/home/resources-row/resources-row"

import main from "../images/home/collegehomepage.svg"
import contractExplorer from "../images/home/contract-explorer.png"
import contractSpending from "../images/home/c-o-t.png"

import "../styles/index.scss"
import homeStyles from "./index.module.scss"


function IndexPage() {

  return (
    <Home>
      <SEO title="Data Lab - U.S. Treasury" keywords={[`gatsby`, `application`, `react`]}/>

      <Grid container
              spacing={2}
              justify="center"
              className={homeStyles.featuredTileRow}>

          <Grid item md={12} lg={8}
                className={homeStyles.featuredTile}>
            <MainTile
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

          </Grid>

          <Grid item md={12} lg={4}>
            <DtsTile
              href={"dts"}
              heading={"Visualizing the Daily Treasury Statement"}
              title={"How much does the federal government spend each day?"}/>

            <Grid
              container
              direction="column"
              spacing={3}>
              <Grid item sm={12} md={6} lg={12}>
                <SecondaryTile
                  heading={"Contract Spending Analysis"}
                  subheading={"How has federal contract spending changed over time?"}
                  href={"contract-explorer.html"}
                  imgSrc={contractSpending}
                  imgAlt={" "}
                  body={`We explore 10 years of contract data, and provide an analysis of the
                impact of short-term continuing resolutions on contract spending.`}
                />
              </Grid>

              <Grid item sm={12} md={6} lg={12}>
                <SecondaryTile
                  heading={"Contract Explorer"}
                  subheading={"Who receives federal contracts?"}
                  href={"contract-explorer.html"}
                  imgSrc={contractExplorer}
                  imgAlt={" "}
                  body={`The federal government spends about $500 billion each year on contracts. Learn more
                    about contract recipients and what agencies receive from these contracts.`}
                />
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={12}
                className={homeStyles.moreAnalysesRow}>
            <MoreAnalysesRow/>
          </Grid>

          <Grid item xs={12}
                className={homeStyles.featuredRow}>
              <FeatureRow
                href={"homelessness-analysis"}
                heading={"Homelessness Analysis"}
                title={"Explore federal programs that address homelessness"}
                blurb={`On a single night in 2016, more than 500,000 people experienced homelessness in the United States. With
									our visualizations, you can see which federal programs are addressing homelessness, the amount of federal
									spending on homelessness by region, and where individuals experiencing homelessness are located. We also
									provide information about which regions are similar to others based on their homeless populations and
									funding profiles.`}
              />
          </Grid>

          <Grid item xs={12}
                className={homeStyles.resourceRow}>
              <ResourcesRow/>
          </Grid>

        </Grid>

    </Home>
  )
}

export default IndexPage


