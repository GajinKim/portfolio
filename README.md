# Reminders for Future Reference

### Setting up AWS Credentials
Configure new IAM Role.
- `IAM > Roles > {Role} > Trust Relationships`

Reference [Github Docs](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) to see how to setup trust relationship. See [here](https://github.com/aws-actions/configure-aws-credentials) for more details.

### Configuring Route53 alias for S3 Bucket (static website)
[S3 template snippets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-s3.html) - Also provides examples for enabling static website hosting (WebsiteConfiguration)

[RecordSet AliasTarget docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html) for various AWS resources - Configure HostedZoneId and DNSName for static S3 websites according to [this](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints) static list of endpoints.

#

### Configuration for cicd (Github Actions) workflow
`.github/workflows/ci-prod.yml` - Only triggers on pushes to `master` branch.
- See [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html) for `sam cli` documentation.

### CloudFormation Template
`template.yml` - Resource list: `S3:Bucket`, `S3:BucketPolicy`, `Route53:RecordSetGroups`.


### Cool Font linker
[https://www.cssfontstack.com/Nunito](link)