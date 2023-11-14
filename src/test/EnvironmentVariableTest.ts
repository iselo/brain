import {Test, TestClass} from "@raccoons-co/cleanway";
import {assert} from "chai";
import {EnvironmentVariable} from "../main";

process.env.AWS_ACCOUNT_MOCK = "703521322927";

@TestClass
export default class EnvironmentVariableTest {

    @EnvironmentVariable("AWS_ACCOUNT_MOCK")
    private readonly userEnvironmentVariable: string = "";

    @Test
    public setsClassFieldValue(): void {
        assert.equal(this.userEnvironmentVariable, "703521322927");
    }
}
