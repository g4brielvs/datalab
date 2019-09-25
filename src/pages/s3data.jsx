import React from 'react';

const AWS = require('aws-sdk');
// AWS.config.update(
//   {
//     accessKeyId: 'data-lab-data/dts/dts.csv'
//     // secretAccessKey: '.. your secret key ..'
//   }
// );

let data;
const s3 = new AWS.S3();
s3.getObject(
  { Bucket: 'datalab-qat', Key: 'data-lab-data/dts/dts.csv' },
  function (error, data) {
    if (error != null) {
      alert('Failed to retrieve an object: ' + error);
    } else {
      alert('Loaded ' + data.ContentLength + ' bytes');
      data = data.Body;
    }
  }
);
export default class DataPOC extends React.Component {
  render = () => (<>{JSON.stringify(data)}</>);
}
