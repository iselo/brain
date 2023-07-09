import {Immutable} from "@raccoons-co/ethics";
import {Any, Class, Method} from "../../main";

@Immutable
export default class TypeMock {

    public any(value: Any): Any {
        return value;
    }

    public class(value: Class): object {
        return new value;
    }

    public method(value: Method): Method {
        return value;
    }
}
