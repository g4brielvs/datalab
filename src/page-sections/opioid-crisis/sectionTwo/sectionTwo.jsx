import React from 'react';
import StoryHeading from '../../../components/section-elements/story-heading/story-heading';
import storyHeadingStyles from "../../../components/section-elements/story-heading/story-heading.module.scss";
import defaultImage from '../../../images/default-image.jpg';
import Grid from '@material-ui/core/Grid';

export default class SectionTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <>
        <StoryHeading
          number={'02'}
          title={'Societial Effects'}
          teaser={['How the Opioid Crisis ', <span key='teaser-callout' className={storyHeadingStyles.headingOrange}>affects everyday life?</span>]}
          blurb={`More than 130 people die every day in the US due to an opioid related overdose. What is this epidemic that has led to over 400,000 deaths in the United States since 2000? The opioid epidemic, also referred to as the opioid crisis, is a term that refers to the rapid increase in the use of prescription and nonprescription opioid drugs. According to the National Institute on Drug Abuse, an opioid is a class of drugs that can include the illegal drug heroin, synthetic opioids such as fentanyl, and prescribed pain relievers such as oxycodone, hydrocodone, codeine, and morphine.  

`}
          blurbCont={`This crisis has had an undeniable effect on the United States. In 2017, the Department of Health and Human Services declared the opioid crisis a public health emergency and created a strategy focusing on five major priorities.

More than 130 people die every day in the US due to an opioid related overdose. What is this epidemic that has led to over 400,000 deaths in the United States since 2000? The opioid epidemic, also referred to as the opioid crisis, is a term that refers to the rapid increase in the use of prescription and nonprescription opioid drugs. According to the National Institute on Drug Abuse, an opioid is a class of drugs that can include the illegal drug heroin, synthetic opioids such as fentanyl, and prescribed pain relievers such as oxycodone, hydrocodone, codeine, and morphine.  
`}
        />

        <Grid container justify='center'>
          <section id='section-two-viz'>
            <img src={defaultImage}/>
          </section>
        </Grid>


      </>
    ); // end return
  };
};
