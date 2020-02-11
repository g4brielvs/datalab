import React from "react";
import { Grid } from "@material-ui/core";

import Home from "src/components/layouts/home/home";
import SEO from "src/components/seo";
import FeatureTile from "src/page-sections/home/feature-tile/feature-tile";
import SecondaryTile from "src/page-sections/home/secondary-tile/stacked-layout/secondary-tile";
import DtsTile from "src/page-sections/home/dts-tile/dts-tile";
import MoreAnalysesTiles from "src/page-sections/home/more-analyses-tiles/more-analyses-tiles";
import FeatureRow from "src/page-sections/home/feature-row/feature-row";
import ResourcesRow from "src/page-sections/home/resources-row/resources-row";

import main from "src/images/home/collegehomepage.svg";
import contractExplorer from "src/images/home/contractexplorersunburst.png";
import homelessImg from 'src/images/home/homelessness.png';

import "../styles/index.scss";
import homeStyles from "./index.module.scss";
import cg from "../images/home/cg-gif.gif";


function IndexPage() {

  return (
    <Home>
      <SEO title="Data Lab - U.S. Treasury" keywords={[`gatsby`, `application`, `react`]} />

      <Grid
        container
        spacing={3}
        justify="center"
        className={homeStyles.featuredTileRow}
      >
        <Grid
          item lg={12} xl={8}
          className={homeStyles.featuredTile}
        >
          <FeatureTile
            href={'americas-finance-guide'}
            imgSrc={cg}
            imgAlt={'Answer all your questions about federal government finance'}
            heading={"Your Guide to America's Finances"}
            body={`Your Guide to America's Finances is an overview of federal government finances in 2019, providing
              information on spending, revenue, the deficit, and debt. The Guide, which is created by Treasury's Data Lab,
              presents a series of interactive visualizations to allow you to explore these categories and how they have
              changed over time. Ultimately, the Guide seeks to provide a comprehensive overview of the trillions of
              dollars collected and spent by the federal government each year.`}
            mobileBody={`The Guide presents straightforward information about the federal government's spending and revenue, as
              well as the deficit and debt in 2019.`
            }
          />
        </Grid>
        <Grid item lg={12} xl={4}>

          <DtsTile
            href={"dts"}
            heading={"Visualizing the Daily Treasury Statement"}
            title={"How much does the federal government spend each day?"}
          />

          <Grid
            container
            spacing={3}
            className={homeStyles.secondaryTiles}
          >
            <Grid item md={12} lg={6} xl={12}>
              <SecondaryTile
                heading={"Homelessness Analysis"}
                subheading={"Explore federal programs that address homelessness"}
                href={"homelessness-analysis"}
                imgSrc={homelessImg}
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
        className={homeStyles.moreAnalysesRow}
      >

        <Grid item lg={12} xl={6}>
          <MoreAnalysesTiles />
        </Grid>

        <Grid item lg={12} xl={6}>
          <FeatureTile
            href={"colleges-and-universities"}
            imgSrc={main}
            imgAlt={''}
            heading={"Federal Investment in Higher Education"}
            body={`The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges and
                  universities through grants, contracts, and student aid. This interactive analysis gives you an
                  opportunity to search schools and discover how much the government has invested in that institution. In
                  the visualizations you can also break down the investment by federal agency and view data by investment
                  category. This analysis gives the public an interactive lens into the government’s investment in higher
                  education.`}
            mobileBody={`The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges
                  and universities. Dive in and search by individual schools, federal agencies, or investment
                  categories!`}
          />
        </Grid>
      </Grid>

      <div className={homeStyles.featuredRow}>
        <FeatureRow
          href={"contract-explorer"}
          heading={"Contract Explorer"}
          title={"Who receives federal contracts?"}
          blurb={`Ever wonder who's getting federal contracts and what agencies are awarding them? This tool lets you explore contract-related information for FY18, including which organizations received federal contracts, contract amounts, awarding agencies and sub-agencies, and the types of goods or services contract recipients provided to the federal government.`}
          imgSrc={contractExplorer}
        />
      </div>

      <div className={homeStyles.resourceRow}>
        <ResourcesRow />
      </div>

    </Home>
  );
}

export default IndexPage;
