import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Any, Class, Method} from "../../main";

@Immutable
class AnnotationWithArgMock implements Annotation {

    decorator(value: string): Method {
        return function replacementMethod(originalMethod: Method, context: ClassMethodDecoratorContext): Method {
            return function methodMock(this: Class, ...args: Any[]): Any {
                return String(context.name) + " is " + value + " " + originalMethod.call(this, ...args);
            };
        };
    }
}

export default new AnnotationWithArgMock().decorator;
