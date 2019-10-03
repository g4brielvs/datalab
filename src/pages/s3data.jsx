import React from 'react';

const AWS = require('aws-sdk');
AWS.config.update(
  {
    accessKeyId: 'AKIA3YCOPFO3LMPSH75B',
    secretAccessKey: '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',
    region: 'us-gov-west-1'
  }
);

let csv;
const s3 = new AWS.S3();
s3.getObject(
  { Bucket: 'datalab-qat', Key: 'data-lab-data/dts/dts.csv' },
  function (error, data) {
    if (error) {
      alert('Failed to retrieve an object: ' + error);
    } else {
      alert('Loaded ' + data.ContentLength + ' bytes');
      csv = data.Body;
    }
  }
);
export default class DataPOC extends React.Component {
  render = () => (<>{JSON.stringify(csv)}</>);
}
