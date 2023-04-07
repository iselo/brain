/* eslint-disable */
import {Immutable} from "@raccoons-co/ethics"
import {Annotation, Any, Class, Method} from "../../main";

@Immutable
class AnnotationWithArgsMock implements Annotation {

    decorator(value: string): Method {
        return function replacementMethod(originalMethod: Method,
                                          context: ClassMethodDecoratorContext): Method {
            return function methodMock(this: Class, ...args: Any[]): Any {
                return value;
            }
        }
    }
}

export default new AnnotationWithArgsMock().decorator;
