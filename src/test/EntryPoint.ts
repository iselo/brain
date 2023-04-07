import {CleanWayBuilder} from "@raccoons-co/cleanway";
import TypesTest from "./TypesTest";
import AnnotationTest from "./AnnotationTest";

CleanWayBuilder.instance()
    .assign(new TypesTest())
    .assign(new AnnotationTest())
    .build();
