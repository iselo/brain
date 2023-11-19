/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import {Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import ClassFieldDecorator from "./ClassFieldDecorator";

/**
 * The user environment variable.
 *
 * @param key - the name of the environment variable
 * @returns object - the decorator factory instance
 */
export default function EnvironmentVariable(key: string) {
    return new class DecoratorFactory {

        /** Returns decorator that replaces initial field value with value of user environment variable if defined. */
        public orInitial(): Method {
            return new ClassFieldDecorator().decorator(
                (initialValue: string) => process.env[key] ?? initialValue
            );
        }

        /**
         * Returns decorator that replaces initial field value with value of defined user environment variable
         * otherwise throws `NullPointerException`.
         */
        public orElseThrow(): Method {
            return new ClassFieldDecorator().decorator(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (initialValue: string) => Strict.notNull(process.env[key], `${key} is undefined`)
            );
        }
    };
}
