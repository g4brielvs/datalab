import React from 'react';
import styles from '../../pages/student-innovators-toolbox/student-innovators-toolbox.module.scss';

export default {
  title: 'AGENCY-RELATED QUESTIONS',
  introSentence: <></>,
  data: [
    {
      accordionTitles: [
        <>Use the data to learn about something else</>
      ],
      accordionContent: [
        <ul className={styles.numberedList}>
          <li>
            <a href='https://datalab.usaspending.gov/assets/analyst-guide-1-2.pdf' target='_blank'
               rel='noopener noreferrer'>Analyst Guide to Federal Spending Data</a>
          </li>
          <li>
            <a href='https://www.fiscal.treasury.gov/fsservices/gov/data-trans/dt-daims.htm' target='_blank'
               rel='noopener noreferrer'>Data Dictionary</a>
          </li>
        </ul>
      ]
    }
  ]
};
