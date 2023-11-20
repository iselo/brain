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
export default function environmentVariable(key: string): EnvironmentVariableDecoratorFactory {
    return new class EnvironmentVariable implements EnvironmentVariableDecoratorFactory {

        /** {@inheritDoc} */
        public orInitial(): Method {
            return new ClassFieldDecorator().decorator(
                (initialValue: string) => process.env[key] ?? initialValue
            );
        }

        /** {@inheritDoc} */
        public orElseThrow(): Method {
            return new ClassFieldDecorator().decorator(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (initialValue: string) => Strict.notNull(process.env[key], `${key} is undefined`)
            );
        }
    };
}

interface EnvironmentVariableDecoratorFactory {

    /**
     * Returns decorator that replaces initial field value with value of user environment variable if defined
     * otherwise keeps initialized value.
     */
    orInitial(): Method;

    /**
     * Returns decorator that replaces initial field value with value of user environment variable if defined
     * otherwise throws `NullPointerException`.
     */
    orElseThrow(): Method;
}
