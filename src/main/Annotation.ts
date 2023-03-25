import Method from "./Method";

export default interface Annotation {
    decorator(): Method;
}
