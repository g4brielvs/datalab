import React from 'react';

import Accordion from '../../components/accordion/accordion';
import ControlBar from '../../components/control-bar/control-bar';
import ExpressLayout from '../../components/layouts/express/express';
import ExpressSection from '../../page-sections/express/express-section';
import Reset from '../../components/reset/reset';
import SEO from '../../components/seo';
import Share from '../../components/share/share';

export default class RdInContractingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () =>
    <ExpressLayout
      title='testing'
      topic='Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eiusmod. Question - keep to 2 lines.'
    >
      <SEO title='Federal R&D in Contracting' keywords={['gatsby', 'application', 'react']} />
      <ExpressSection
        title='Eyebrow Title'
        subtitle1='In Fiscal Year 2018,'
        subtitle2='$119 billion were devoted to R&D initiatives.'
        description='<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p>'
        viztitle='Visualization Title'
      >
        <Accordion title='Instructions'>
          <ul>
            <li>instructions here</li>
          </ul>
        </Accordion>

        <ControlBar>
          <Reset id='resetBtn' />
          <Share location={this.props.location} />
        </ControlBar>

        chart

      </ExpressSection>
    </ExpressLayout>
}
