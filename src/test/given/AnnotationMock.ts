import {Immutable} from "@raccoons-co/ethics";
import {Annotation, Any, Class, Method} from "../../main";

@Immutable
class AnnotationMock implements Annotation {

    decorator(): Method {
        return this.replacementMethod;
    }

    private replacementMethod(originalMethod: Method, context: ClassMethodDecoratorContext): Method {
        return function methodMock(this: Class, ...args: Any[]): Any {
            return String(context.name) + " " + originalMethod.call(this, ...args);
        };
    }
}

export default new AnnotationMock().decorator();
