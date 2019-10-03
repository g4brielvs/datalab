import React from 'react';
import AWS from 'aws-sdk';

AWS.config.update(
  {
    accessKeyId: 'AKIA3YCOPFO3LMPSH75B',
    secretAccessKey: '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',
    region: 'us-gov-west-1'
  }
);

const s3 = new AWS.S3();

export default class DataPOC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      csv: 'gathering data...'
    }

    s3.getObject(
      { Bucket: 'datalab-qat', Key: 'data-lab-data/dts/dts.csv' },
      (error, data) => {
        if (error) {
          console.log('Could not get DTS data: ' + error);
        } else {
          this.setState({csv: data.Body.toString('ascii')});
        }
      }
    );
  }

  render = () => (<div>{JSON.stringify(this.state.csv)}</div>);
}
