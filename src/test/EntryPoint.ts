import {CleanWayBuilder} from "@raccoons-co/cleanway";
import TypesTest from "./TypesTest";
import AnnotationTest from "./AnnotationTest";

CleanWayBuilder.instance()
    .use(TypesTest)
    .use(AnnotationTest)
    .build();
