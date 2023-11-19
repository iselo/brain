[![npm version](https://badge.fury.io/js/@raccoons-co%2Fgenera.svg)](https://badge.fury.io/js/@raccoons-co%2Fgenera)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_genera&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_genera)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/genera/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/genera/tree/master)

Genera
---

Class field decorator `@EnvironmentVariable`. Depends on TypeScript 5, Stage 3 ECMAScript Decorators 
and does not requires the opt-in compiler flag called `--experimentalDecorators`.

~~~TypeScript
export default class AwsEnvironmentMock {

    @EnvironmentVariable("AWS_REGION_MOCK").orInitial()
    private readonly awsRegion: string = "us-east-1";

    @EnvironmentVariable("AWS_ACCOUNT_MOCK").orElseThrow()
    private readonly awsAccount: string = "";

    public region(): string {
        return this.awsRegion;
    }

    public account(): string {
        return this.awsAccount;
    }
}
~~~

Install:
```shell script
% npm i @raccoons-co/genera
```
