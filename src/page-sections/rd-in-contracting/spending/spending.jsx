import React from 'react';
import styles from './spending.module.scss';

import Accordion from 'src/components/accordion/accordion';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import microscope from 'src/images/rd-in-contracting/microscope.svg';
import science from 'src/images/rd-in-contracting/science.svg';
import bottle from 'src/images/rd-in-contracting/bottle.svg';
import bulb from 'src/images/rd-in-contracting/bulb.svg';

export default class Spending extends React.Component {
  constructor(props) {
    super(props);
  }

  whatIsContents = () =>
    <div className={styles.accordionContents}>
      <img src={microscope} role='presentation' className={styles.centerImg} />
      <p className={styles.extraSpace}>
        <span className={styles.bold}>What is R&D?</span> Research and development are part of a process to help us find solutions to problems using science, engineering, and technology.  Let’s take a closer look at the role each play.
      </p>
      <div className={styles.flexContainer}>
        <div className={styles.bullet}></div>
        <div>
          <span className={`${styles.bold} ${styles.highlight} ${styles.bulletSize}`}>Basic Research</span>
          <p>The intent of basic research is to study more about a subject, to expand upon what we already know about it. This type of research usually doesn’t result in solving a specific problem.</p>
          <p className={styles.bold}>Real world example of Basic Research</p>
          <div className={styles.flexContainer}>
            <img src={science} role='presentation' className={styles.leftImg} />
            <div>
              <p>NASA working with Techshot, Inc. on a research platform that will be used on the International Space Station to gather data on temperature, light cycle, humidity control and more.</p>
              <a href='https://www.usaspending.gov/#/award/CONT_AWD_NNJ15GU47T_8000_NNJ15GU31B_8000' target='_blank' rel='noopener noreferrer'>
                Contract Summary <LaunchOutlinedIcon fontSize='inherit' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.bullet}></div>
        <div>
          <span className={`${styles.bold} ${styles.highlight} ${styles.bulletSize}`}>Applied Research</span>
          <p>Applied research has a more specific goal of finding solutions to current problems using the accumulated knowledge from basic research.</p>
          <p className={styles.bold}>Real world example of Applied Research</p>
          <div className={styles.flexContainer}>
            <img src={bottle} role='presentation' className={styles.leftImg} />
            <div>
              <p>The Department of Health and Human Services is working with the pharmaceutical company Novartis to research a drug that could counteract damage caused by radiation exposure.</p>
              <a href='https://www.usaspending.gov/#/award/CONT_AWD_HHSO100201700026C_7505_-NONE-_-NONE-' target='_blank' rel='noopener noreferrer'>
                Contract Summary <LaunchOutlinedIcon fontSize='inherit' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.bullet}></div>
        <div>
          <span className={`${styles.bold} ${styles.highlight} ${styles.bulletSize}`}>Development</span>
          <p>Development refers to the innovative process of using applied research to create prototypes of potential solutions to real-world problems.</p>
          <p className={styles.bold}>Real world example of Development</p>
          <div className={styles.flexContainer}>
            <img src={bulb} role='presentation' className={styles.leftImg} />
            <div>
              <p>The Department of Energy is working with the Electric Power Research Institute to develop and implement a long-term solution for storing spent nuclear fuel as this requirement will have an impact on licensing and operations of nuclear plants. </p>
              <a href='https://www.usaspending.gov/#/award/CONT_AWD_DENE0000593_8900_-NONE-_-NONE-' target='_blank' rel='noopener noreferrer'>
                Contract Summary <LaunchOutlinedIcon fontSize='inherit' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  render = () => <>
    <aside>
      <Accordion title='What is R&D?' color='#1302D9' backgroundColor='rgba(19, 2, 217, 0.1)'>
        {this.whatIsContents()}
      </Accordion>
    </aside>

    <p>spending chart</p>
  </>;
}