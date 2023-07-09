import {Test, TestClass} from "@raccoons-co/cleanway";
import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import TypeMock from "./given/TypeMock";

@TestClass
@Immutable
export default class TypesTest {

    protected readonly mock = new TypeMock();

    @Test
    private canUseAnyType() {
        assert.isFunction(this.mock.any(TypesTest));
    }

    @Test
    private canUseClassType() {
        assert.instanceOf(this.mock.class(TypesTest), TypesTest);
    }

    @Test
    private canUseMethodType() {
        assert.isFunction(this.mock.method(this.mock.any));
    }
}
