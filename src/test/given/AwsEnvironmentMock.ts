/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import {EnvironmentVariable} from "../../main";

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
