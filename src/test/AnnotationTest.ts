import {Test} from "@raccoons-co/cleanway";
import {Immutable} from "@raccoons-co/ethics"
import {assert} from "chai";
import AnnotationWithArgsMock from "./given/AnnotationWithArgsMock";
import AnnotationMock from "./given/AnnotationMock";

@Immutable
export default class AnnotationTest {

    @Test
    @AnnotationMock
    public annotationZeroArgument(): string {
        assert.equal(new AnnotationTest().annotationZeroArgument(), "originalValue");
        return "originalValue";
    }

    @Test
    @AnnotationWithArgsMock("replacedValue")
    public annotationOneArgument(): string {
        assert.equal(new AnnotationTest().annotationZeroArgument(), "replacedValue");
        return "originalValue";
    }
}
