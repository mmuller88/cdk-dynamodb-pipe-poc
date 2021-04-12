import * as core from '@aws-cdk/core';
import { BuildPipelineStack } from './build-pipeline-stack';
import { GlobalDynamoDBStack } from './global-dynamodb-stack';
import * as cfn from '@aws-cdk/cloudformation-include';


const buildEnv = {
  account: '981237193288',
  region: 'ca-central-1',
};

const devEnv = {
  account: '981237193288',
  region: 'us-east-1',
};

// const prodEnv = {
//   account: '991829251144',
//   region: 'us-east-1',
// };

const app = new core.App();

new cfn.CfnInclude(app, 'ddb', {
  templateFile: 'cdk.out/DdbDev5.template.json',
});

app.synth();