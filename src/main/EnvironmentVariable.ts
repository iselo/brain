/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import {Strict} from "@raccoons-co/ethics";
import {Annotation, Any, Method} from "@raccoons-co/genera";

/**
 * The user environment variable.
 */
class EnvironmentVariable implements Annotation {

    /**
     * Returns the class field decorator that replaces initial field value
     * with value of user environment variable.
     *
     * @param key - the name of the environment variable
     * @returns function - the class field decorator
     */
    decorator(key: string): Method {
        Strict.notNull(key);
        return function newFieldValue(value: Any, context: ClassFieldDecoratorContext) {
            Strict.notNull(context);
            Strict.checkArgument(context.kind === "field");
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            return (initialValue: string) => Strict.notNull(process.env[key], `${key} is undefined`);
        };
    }
}

export default new EnvironmentVariable().decorator;
