/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import {Any, Method} from "@raccoons-co/genera";
import {Strict} from "@raccoons-co/ethics";
import Annotation from "./Annotation";

export default class ClassFieldDecorator implements Annotation {

    /** Returns class field decorator of given initializer method. */
    decorator(initializer: Method): Method {
        return function newFieldInitializer(value: Any, context: ClassFieldDecoratorContext) {
            Strict.notNull(context);
            Strict.checkArgument(context.kind === "field");
            return initializer;
        };
    }
}
