import {Immutable} from "@raccoons-co/ethics";
import AnnotationMock from "./AnnotationMock";
import AnnotationWithArgsMock from "./AnnotationWithArgMock";

@Immutable
export default class ClassWithAnnotationMock {

    @AnnotationMock
    public sample(): string {
        return "Sample value";
    }

    @AnnotationWithArgsMock("Nice")
    public  anotherSample(): string {
        return "Another sample value";
    }
}
