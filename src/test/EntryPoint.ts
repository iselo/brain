import {CleanWayBuilder} from "@raccoons-co/cleanway";
import TypesTest from "./TypesTest";
import AnnotationTest from "./AnnotationTest";
import EnvironmentVariableTest from "./EnvironmentVariableTest";

CleanWayBuilder.instance()
    .use(TypesTest)
    .use(AnnotationTest)
    .use(EnvironmentVariableTest)
    .build();
