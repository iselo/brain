/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import {Method} from "@raccoons-co/genera";

export default interface EnvironmentVariableDecoratorFactory {

    /**
     * Returns decorator that replaces initial field value with value of user environment variable if defined
     * otherwise keeps initialized value.
     */
    orElseInitial(): Method;

    /**
     * Returns decorator that replaces initial field value with value of user environment variable if defined
     * otherwise throws `NullPointerException`.
     */
    orElseThrow(): Method;
}
