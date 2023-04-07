import Method from "./Method";
import Any from "./Any";

export default interface Annotation {
    decorator(...args: Any[]): Method;
}
