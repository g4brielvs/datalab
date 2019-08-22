import React, {Component} from 'react'

/* components */
import SEO from '../../components/seo'
import ToolLayout from '../../components/layouts/tool/tool'
import Accordion from "../../components/accordion/accordion"
// import HWCTALink from '../../components/hwcta-link/hwcta-link'
// import Overview from '../../page-sections/colleges-and-universites/overview'
// import Agencies from '../../page-sections/colleges-and-universites/agencies'
// import MoreAnalyses from '../../components/more-analyses/more-analyses'
// import Footnotes from '../../components/footnotes/footnotes'

class ToolDemoPage extends Component {
  render() {
    return <>
      <SEO title='Tool Layout Demo' keywords={[`application`, `demo`]}/>
      <ToolLayout
        title='Title'
        introSentence='Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eiusmod. Intro sentence. Keep to one line if possible.'
        contextStatement='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Context - keep to 2 lines if possible.'
        sectionTitle='Section title. Keep to 2-3 lines if possible.'
        sectionText='<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.</p>
            </p>Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.</p>'
      >
        <Accordion
          title="Accordion Title">
          <p>I am an accordion with lots to say.</p>
          <p>I have several paragraphs...</p>
          <a href="https://datalab.usaspending.gov">...and a link to the Data Lab</a>
        </Accordion>
        chart here
{/* 
      <Overview/>

      <Agencies />

      <Footnotes
        footnotes={['Financial obligations represent outstanding debt or regular payments to another party. A negative value obligation (de-obligation) results from a transaction that lowers the debt amount. A grant or contract has a negative obligation for a given fiscal year when it spans multiple fiscal years and the sum of the transactions for that particular fiscal year was a net reduction of the original obligation.',
      'Due to the way military academies are funded, they have not been included in this analysis.']} />

      <HWCTALink
        url={"https://datalab.usaspending.gov/colleges-and-universities-more.html"}/>

      <MoreAnalyses/> */}

      </ToolLayout>
    </>
  }
};

export default ToolDemoPage;
