[![npm version](https://badge.fury.io/js/@raccoons-co%2Fgenera.svg)](https://badge.fury.io/js/@raccoons-co%2Fgenera)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_genera&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_genera)
[![codecov](https://codecov.io/gh/raccoons-co/genera/graph/badge.svg?token=O69DveLwYF)](https://codecov.io/gh/raccoons-co/genera)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/genera/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/genera/tree/master)

Genera
---

Class field decorator `@EnvironmentVariable`. Depends on TypeScript 5, Stage 3 ECMAScript Decorators 
and does not requires the opt-in compiler flag called `--experimentalDecorators`.

~~~TypeScript
export default class AwsEnvironment {

    @EnvironmentVariable.of("AWS_REGION").orElseInitial()
    private readonly awsRegion: string = "us-east-1";

    @EnvironmentVariable.of("AWS_ACCOUNT").orElseThrow()
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
