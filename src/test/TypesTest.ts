import {Immutable, Test} from "@raccoons-co/cleanway";
import {assert} from "chai";
import {Annotation, Any, Class, Method} from "../main/index";

@Immutable
export default class TypesTest implements Annotation {

    decorator(): Method {
        return this.method;
    }

    @Test
    private canUseAnyType() {
        assert.isFunction(new TypesTest().any( TypesTest ));
    }

    @Test
    private canUseClassType() {
        assert.isFunction(new TypesTest().class( TypesTest ));
    }

    @Test
    private canUseMethodType() {
        assert.isFunction(new TypesTest().method( new TypesTest().any ));
    }

    public any(value: Any): Any {
        return value;
    }

    public class(value: Class): Class {
        return value;
    }

    public method(value: Method): Method {
        return value;
    }
}
