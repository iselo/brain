[![npm version](https://badge.fury.io/js/@raccoons-co%2Fgenera.svg)](https://badge.fury.io/js/@raccoons-co%2Fgenera)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=raccoons-co_genera&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=raccoons-co_genera)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/genera/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/genera/tree/master)

Genera
---

Class field decorator `@EnvironmentVariable` (TypeScript 5, Stage 3 ECMAScript Decorators).

~~~TypeScript
class MongoWorkerBuilder {

    @EnvironmentVariable("MONGODB_ATLAS_HOST")
    private host: string = "";

    @EnvironmentVariable("MONGODB_ATLAS_CERT")
    private tlsCertificate: string = "";

    @EnvironmentVariable("MONGODB_ATLAS_KEY")
    private tlsPrivateKey: string = "";

    ...
}
~~~

Install:
```shell script
% npm i @raccoons-co/genera
```
