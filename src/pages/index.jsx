import React from "react"
import { Grid } from "@material-ui/core"


import Home from "../components/layouts/home/home"
import SEO from "../components/seo"
import FeatureTile from "../page-sections/home/feature-tile/feature-tile"
import SecondaryTile from "../page-sections/home/secondary-tile/secondary-tile"
import DtsTile from "../page-sections/home/dts-tile/dts-tile"
import MoreAnalysesTiles from "../page-sections/home/more-analyses-tiles/more-analyses-tiles"
import FeatureRow from "../page-sections/home/feature-row/feature-row"
import ResourcesRow from "../page-sections/home/resources-row/resources-row"

import main from "../images/home/collegehomepage.svg"
import contractExplorer from "../images/home/contract-explorer.png"
import contractSpending from "../images/home/c-o-t.png"

import "../styles/index.scss"
import homeStyles from "./index.module.scss"
import cg from "../images/home/cg-gif.gif"


function IndexPage() {

  return (
    <Home>
      <SEO title="Data Lab - U.S. Treasury" keywords={[`gatsby`, `application`, `react`]}/>

      <Grid container
              spacing={3}
              justify="center"
              className={homeStyles.featuredTileRow}>

          <Grid item lg={12} xl={8}
                className={homeStyles.featuredTile}>

            <FeatureTile
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

          <Grid item lg={12} xl={4}>

            <DtsTile
              href={"dts"}
              heading={"Visualizing the Daily Treasury Statement"}
              title={"How much does the federal government spend each day?"}/>

            <Grid
              container
              spacing={3}
              className={homeStyles.secondaryTiles}>

              <Grid item md={12} lg={6} xl={12}>
                <SecondaryTile
                  heading={"Contract Spending Analysis"}
                  subheading={"How has federal contract spending changed over time?"}
                  href={"contract-spending"}
                  imgSrc={contractSpending}
                  imgAlt={" "}
                  body={`We explore 10 years of contract data, and provide an analysis of the
                impact of short-term continuing resolutions on contract spending.`}
                />
              </Grid>

              <Grid item md={12} lg={6} xl={12}>
                <SecondaryTile
                  heading={"Contract Explorer"}
                  subheading={"Who receives federal contracts?"}
                  href={"contract-explorer"}
                  imgSrc={contractExplorer}
                  imgAlt={" "}
                  body={`The federal government spends about $500 billion each year on contracts. Learn more
                    about contract recipients and what agencies receive from these contracts.`}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <p className={homeStyles.heading}>
            More Analyses
          </p>
        </Grid>

        <Grid
            container
            spacing={3}
            className={homeStyles.moreAnalysesRow}>

            <Grid item lg={12} xl={6}>
              <MoreAnalysesTiles/>
            </Grid>

            <Grid item lg={12} xl={6}>
              <FeatureTile
                href={'americas-finance-guide'}
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

            </Grid>
          </Grid>

          <div className={homeStyles.featuredRow}>
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
          </div>

        <div className={homeStyles.resourceRow}>
            <ResourcesRow/>
        </div>

    </Home>
  )
}

export default IndexPage


