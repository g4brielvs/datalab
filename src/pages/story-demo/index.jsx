import React, {Component} from 'react'

/* components */
import SEO from '../../components/seo'
import StoryLayout from '../../components/layouts/story/story'
import SectionOne from "../../page-sections/story-demo/section-one"
import SectionTwo from "../../page-sections/story-demo/section-two"

class StoryDemoPage extends Component {
  render() {
    return <>
      <SEO title='Story Layout Demo' keywords={[`application`, `demo`]}/>
      <StoryLayout
        title='Title'
        introSentence='Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eiusmod. Intro sentence.'
        contextStatement='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Context - keep to 2 lines if possible.'
        sectionTitle='Section title. Keep to 2-3 lines if possible.'
        sectionText='<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.</p>
            </p>Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.</p>'
        sectionToc={[
          {
            section: "Section 1",
            number: "01",
            subblurb: "Subtitle / Question"
          },
          {
            section: "Section 2",
            number: "02",
            subblurb: "Subtitle / Question"
          },
          {
            section: "Section 3",
            number: "03",
            subblurb: "Subtitle / Question"
          },
          {
            section: "Section 4",
            number: "04",
            subblurb: "Subtitle / Question"
          }
        ]}>

        <SectionOne/>

        <SectionTwo/>

      </StoryLayout>
    </>
  }
};

export default StoryDemoPage;