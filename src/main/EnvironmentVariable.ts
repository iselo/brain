/*
 *  Copyright 2023, Raccoons. Developing simple way to change.
 *
 *  @license MIT
 */

import {Strict} from "@raccoons-co/ethics";
import {Method} from "@raccoons-co/genera";
import ClassFieldDecorator from "./ClassFieldDecorator";
import EnvironmentVariableDecoratorFactory from "./EnvironmentVariableDecoratorFactory";

/**
 * The user environment variable.
 */
export default class EnvironmentVariable {

    /**
     * Returns environment variable decorator factory instance.
     *
     * @param name - the name of the environment variable
     * @returns object - the decorator factory instance
     */
    public static of(name: string): EnvironmentVariableDecoratorFactory {
        return new class implements EnvironmentVariableDecoratorFactory {

            /** {@inheritDoc} */
            public orElseInitial(): Method {
                return new ClassFieldDecorator().decorator(
                    (initialValue: string) => process.env[name] ?? initialValue
                );
            }

            /** {@inheritDoc} */
            public orElseThrow(): Method {
                return new ClassFieldDecorator().decorator(
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    (initialValue: string) => Strict.notNull(process.env[name], `${name} is undefined`)
                );
            }
        };
    }
}
