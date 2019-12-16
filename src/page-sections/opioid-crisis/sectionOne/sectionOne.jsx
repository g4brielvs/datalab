import React from 'react';
import StoryHeading from '../../../components/section-elements/story-heading/story-heading';
import storyHeadingStyles from "../../../components/section-elements/story-heading/story-heading.module.scss";

export default class SectionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <>
        <StoryHeading
          number={'01'}
          title={'A $78.5 Billion Dollar Crisis'}
          teaser={['A national view ', <span key='teaser-callout' className={storyHeadingStyles.headingOrange}>of the opioid crisis.</span>]}
          blurb={`More than 130 people die every day in the US due to an opioid related overdose. What is this epidemic that has led to over 400,000 deaths in the United States since 2000? The opioid epidemic, also referred to as the opioid crisis, is a term that refers to the rapid increase in the use of prescription and nonprescription opioid drugs. According to the National Institute on Drug Abuse, an opioid is a class of drugs that can include the illegal drug heroin, synthetic opioids such as fentanyl, and prescribed pain relievers such as oxycodone, hydrocodone, codeine, and morphine.  

`}
          blurbCont={`This crisis has had an undeniable effect on the United States. In 2017, the Department of Health and Human Services declared the opioid crisis a public health emergency and created a strategy focusing on five major priorities.

More than 130 people die every day in the US due to an opioid related overdose. What is this epidemic that has led to over 400,000 deaths in the United States since 2000? The opioid epidemic, also referred to as the opioid crisis, is a term that refers to the rapid increase in the use of prescription and nonprescription opioid drugs. According to the National Institute on Drug Abuse, an opioid is a class of drugs that can include the illegal drug heroin, synthetic opioids such as fentanyl, and prescribed pain relievers such as oxycodone, hydrocodone, codeine, and morphine.  

This crisis has had an undeniable effect on the United States. In 2017, the Department of Health and Human Services declared the opioid crisis a public health emergency and created a strategy focusing on five major priorities.
`}
        />

        <section id='section-one-viz'>
          {/* put section one viz here */}
        </section>

      </>
    ); // end return
  };
};
