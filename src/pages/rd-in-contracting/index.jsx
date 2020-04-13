import React from 'react';
import styles from './rd-in-contracting.module.scss';

import Accordion from '../../components/accordion/accordion';
import ControlBar from '../../components/control-bar/control-bar';
import ExpressLayout from '../../components/layouts/express/express';
import ExpressSection from '../../page-sections/express/express-section';
import Reset from '../../components/reset/reset';
import SEO from '../../components/seo';

import microscope from 'src/images/rd-in-contracting/microscope.svg';
import science from 'src/images/rd-in-contracting/science.svg';

export default class RdInContractingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  whatIsContents = () =>
    <div className={styles.contents}>
      <img src={microscope} role='presentation' className={styles.centerImg} />
      <p><span className={styles.bold}>What is R&D?</span> Research and development are part of a process to help us find solutions to problems using science, engineering, and technology.  Let’s take a closer look at the role each play.</p>
      <ul className={styles.list}>
        <li>
          <span className={`${styles.bold} ${styles.highlight}`}>Basic Research</span>
          <p>The intent of basic research is to study more about a subject, to expand upon what we already know about it. This type of research usually doesn’t result in solving a specific problem.</p>
          <p><span className={styles.bold}>Real world example of Basic Research</span></p>
          <img src={science} role='presentation' className={styles.left} />
          <p>NASA working with Techshot, Inc. on a research platform that will be used on the International Space Station to gather data on temperature, light cycle, humidity control and more.</p>
      </li>
      </ul>
    </div>

  render = () =>
    <ExpressLayout
      title='Research & Development in Contracting'
      topic='How much did the federal government invest in Research & Development with FY18 Contract Spending?'
    >
      <SEO title='Federal R&D in Contracting' keywords={['gatsby', 'application', 'react']} />
      <ExpressSection
        title='Amount Spent in FY2018'
        subtitle={<>In Fiscal Year 2018, <span className={styles.subtitleHighlight}>$119 billion were devoted</span> to contracted R&D initiatives.</>}
        description={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>}
        viztitle='R&D as a Part of Total Contract Spending by Agency'
      >
        <aside>
          <Accordion title='Instructions' color='#1302D9' backgroundColor='rgba(19, 2, 217, 0.1)'>
            {this.whatIsContents()}
          </Accordion>
        </aside>

        <ControlBar>
          <Reset id='resetBtn' />
        </ControlBar>

        chart

      </ExpressSection>

      <ExpressSection
        title='Types of R&D in Contracting'
        subtitle={<>What are the types of <span className={styles.subtitleHighlight}>categories that R&D funded?</span></>}
        description={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>}
        viztitle='R&D in Contracting by Category'
      >
        <Accordion title='Instructions' color='#1302D9' backgroundColor='rgba(19, 2, 217, 0.1)'>
          whatever
        </Accordion>

        <ControlBar>
          <Reset id='resetBtn' />
        </ControlBar>

        chart

      </ExpressSection>
      <ExpressSection
        title='Non R&D Studies'
        subtitle={<>What types of studies were funded that are <span className={styles.subtitleHighlight}>classified as non-R&D?</span></>}
        description={<><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.</p></>}
        viztitle='Non-R&D Studies and Analyses Spending'
      >
        <Accordion title='Instructions' color='#1302D9' backgroundColor='rgba(19, 2, 217, 0.1)'>
          whatever
        </Accordion>

        <ControlBar>
          <Reset id='resetBtn' />
        </ControlBar>

        chart

      </ExpressSection>
    </ExpressLayout>
}
