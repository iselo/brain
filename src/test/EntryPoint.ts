import {CleanWayBuilder} from "@raccoons-co/cleanway";
import TypesTest from "./TypesTest";

CleanWayBuilder.instance()
    .assign(new TypesTest())
    .build();
