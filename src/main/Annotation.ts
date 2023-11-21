/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import Any from "./Any";
import Method from "./Method";

export default interface Annotation {
    decorator(...args: Any[]): Method;
}
