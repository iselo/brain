import {BeforeEach, Test, TestClass} from "@raccoons-co/cleanway";
import {assert} from "chai";
import AwsEnvironmentMock from "./given/AwsEnvironmentMock";

@TestClass
export default class EnvironmentVariableTest {

    @BeforeEach
    public setUp(): void {
        process.env.AWS_ACCOUNT_MOCK = "703521322927";
    }

    @Test
    public setsInitialValue(): void {
        assert.equal(new AwsEnvironmentMock().region(), "us-east-1");
    }

    @Test
    public setsValueFromUserEnvironment(): void {
        process.env.AWS_REGION_MOCK = "us-west-1";
        const awsEnvironment = new AwsEnvironmentMock();
        assert.equal(awsEnvironment.region(), "us-west-1");
        assert.equal(awsEnvironment.account(), "703521322927");
    }

    @Test
    public throwsExceptionsIfUndefined(): void {
        delete process.env.AWS_ACCOUNT_MOCK;
        assert.throws(() => new AwsEnvironmentMock());
    }
}
