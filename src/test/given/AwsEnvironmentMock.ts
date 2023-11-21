/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import {EnvironmentVariable} from "../../main";

export default class AwsEnvironmentMock {

    @EnvironmentVariable.of("AWS_REGION_MOCK").orElseInitial()
    private readonly awsRegion: string = "us-east-1";

    @EnvironmentVariable.of("AWS_ACCOUNT_MOCK").orElseThrow()
    private readonly awsAccount: string = "";

    public region(): string {
        return this.awsRegion;
    }

    public account(): string {
        return this.awsAccount;
    }
}
