'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});

const sns = new AWS.SNS();

const topic= 'arn:aws:sns:us-west-2:318156137996:pickup';


// let message =process.argv[index] to allow access to array of arguments from command line. if using terminal you could customize messages. 



const payload = {
  Message: 'this IS a MESSage',
  TopicArn: topic,
}

sns.publish(payload, (err,data) =>{
  if(err){
    console.log(err);
  }
  console.log(data);
});