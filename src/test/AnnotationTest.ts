import {Test, TestClass} from "@raccoons-co/cleanway";
import {Immutable} from "@raccoons-co/ethics";
import {assert} from "chai";
import ClassWithAnnotationMock from "./given/ClassWithAnnotationMock";

@TestClass
@Immutable
export default class AnnotationTest {

    private readonly mock = new ClassWithAnnotationMock();

    @Test
    public annotationZeroArgument(): void {
        assert.equal(this.mock.sample(), "sample Sample value");
    }

    @Test
    public annotationOneArgument(): void {
        assert.equal(this.mock.anotherSample(), "anotherSample is Nice Another sample value");
    }
}
