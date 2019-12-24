import React from 'react';
import StorySectionHeading from '../../../components/section-elements/story-section-heading/story-section-heading';
import storyHeadingStyles from "../../../components/section-elements/story-heading/story-heading.module.scss";
import storySectionHeadingStyles from "../../../components/section-elements/story-section-heading/story-section-heading.module.scss";
import Grid from '@material-ui/core/Grid';
import Accordion from '../../../components/accordion/accordion';

import CrisisSankey from '../../../components/visualizations/opioid-crisis/sankey/sankey';

export default class SectionThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rawBlurb = <>
                       <p className={storySectionHeadingStyles.blurbText}>
                         More than 130 people die every day in the US due to an opioid related overdose. What is this epidemic that has
                         led to over 400,000 deaths in the United States since 2000? The opioid epidemic, also referred to as the opioid
                         crisis, is a term that refers to the rapid increase in the use of prescription and nonprescription opioid drugs.
                         n                         According to the National Institute on Drug Abuse, an opioid is a class of drugs that can include the illegal
                         drug heroin, synthetic opioids such as fentanyl, and prescribed pain relievers such as oxycodone, hydrocodone,
                         codeine, and morphine.
                       </p>
                     </>;
    
    return(
      <>
        <StorySectionHeading
          number={'03'}
          title={'Major Players'}
          teaser={['What Organizations received ', <span key='teaser-callout' className={storyHeadingStyles.headingOrange}>the most funding?</span>]}
          blurb={rawBlurb}
        />

        <h3>Title</h3>

        <Accordion
          title="Instructions">
          <p>This diagram shows the investments made by 31 agencies and their sub-agencies to combat the opioid crisis. </p>
          <ul>
            <li>x</li>
            <li>x</li>
            <li>x</li>
            <li>x</li>
          </ul>
        </Accordion>

        <Grid container justify='center'>
          <section id='section-three-viz'>
            <CrisisSankey/>
          </section>
        </Grid>

      </>
    ); // end return
  };
};
