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

import cu from "src/images/home/collegehomepage.svg";
import contractExplorer from "src/images/home/contractexplorersunburst.png";
import homelessImg from 'src/images/home/homelessness.png';

import "src/styles/index.scss";
import homeStyles from "./index.module.scss";
import cg from "src/images/home/CG-GIF_sm_2019.gif";


function IndexPage() {
  return (
    <Home>
      <SEO title="Data Lab - U.S. Treasury"
           description="The Data Lab is a U.S. Treasury Department website of topic-based analyses and visualizations to help the public understand government spending."
           keywords={[`Federal spending`, `data`, `visualizations`, `contracts`, `accounts`, `grants`, `federal programs`,
						 `federal financial data`, `government spending`, `government programs`, `government contracts`]} />

      <Grid
        container
        spacing={3}
        justify="center"
        className={homeStyles.featuredTileRow} >

        <Grid
          item md={12} lg={8}
          className={homeStyles.featuredTile} >

          <FeatureTile
            href={'americas-finance-guide'}
            imgSrc={cg}
            isMain={true}
            imgAlt={'The Department of Treasury building, in Washington, D.C., that includes a bronze statue of Albert Gallatin, the fourth Secretary of the Treasury.'}
            heading={"Your Guide to America's Finances"}
            body={`Your Guide to America's Finances is an overview of federal government finances in 2019, providing
              information on spending, revenue, the deficit, and debt. The Guide, which is created by Treasury's Data Lab,
              presents a series of interactive visualizations to allow you to explore these categories and how they have
              changed over time. Ultimately, the Guide seeks to provide a comprehensive overview of the trillions of
              dollars collected and spent by the federal government each year.`}
            mobileBody={`The Guide presents straightforward information about the federal government's spending and revenue, as
              well as the deficit and debt in 2019.`} />
        </Grid>

        <Grid item md={12} lg={4}>
          <DtsTile
            href={"dts"}
            heading={"Visualizing the Daily Treasury Statement"}
            title={"How much does the federal government spend each day?"} />

          <Grid item>
            <SecondaryTile
              heading={"Homelessness Analysis"}
              subheading={"Explore federal programs that address homelessness"}
              href={"homelessness-analysis"}
              imgSrc={homelessImg}
              imgAlt={'A homeless person leaning against a street pole and additional homeless people stand against a building in the far background.'}
              body={`On a single night in 2018, more than 550,000 people experienced homelessness in the United States. With our visualization you can explore federal spending on programs that address homelessness and where individuals experiencing homeless are located.`} />

          </Grid>
        </Grid>
      </Grid>

      {/* The more analyses is outside of the more analyses section on purpose */}
      <Grid item xs={12}>
        <p className={homeStyles.heading}>
          More Analyses
        </p>
      </Grid>

      <Grid
        container
        spacing={3}
        className={homeStyles.moreAnalysesRow} >

        <Grid item md={12} lg={6}>
          <MoreAnalysesTiles />
        </Grid>

        <Grid item md={12} lg={6} className={homeStyles.featuredTile}>
          <FeatureTile
            href={'homelessness-analysis'}
            imgSrc={homelessImg}
            imgAlt={'A homeless person leaning against a street pole and additional homeless people stand against a building in the far background.'}
            heading={'Explore federal programs that address homelessness'}
            body={'On a single night in 2018, more than 550,000 people experienced homelessness in the United States. With our visualization you can explore federal spending on programs that address homelessness and where individuals experiencing homeless are located.'}
            mobileBody={'On a single night in 2018, more than 550,000 people experienced homelessness in the United States. With our visualization you can explore federal spending on programs that address homelessness and where individuals experiencing homeless are located.'}
          />
        </Grid>
      </Grid>

      <div className={homeStyles.featuredRow}>
        <FeatureRow
          href={'colleges-and-universities'}
          heading={'Colleges & Universities'}
          title={'Federal Investment in Higher Education'}
          blurb={`The Federal Investment in Higher Education analysis gives an overview of federal funding in colleges and universities through grants, contracts, and student aid. This interactive analysis gives you an opportunity to search schools and discover how much the government has invested in that institution. In the visualizations you can also break down the investment by federal agency and view data by investment category.`}
          imgSrc={cu}
          imgAlt={'A university building with three streets leading up to it, each has an icon representing financial aid, grants, and contracts respectively.'}
        />
      </div>

      <div className={homeStyles.resourceRow}>
        <ResourcesRow />
      </div>

    </Home>
  );
}

export default IndexPage;
