import { LogEntry } from "../spies";
/**
 * @enum {"String"} PredefinedFormatters
 * Predefined formatters available for use in custom log managers:
 * @property {"String"} String - a formatter that converts provided log entries to a single string
 * @memberof Log
 */
export declare enum PredefinedFormatters {
    String = "String"
}
/**
 * @typedef {object} FormatterTypeOptions
 * @property {Log.PredefinedFormatters} type a type of a predefined formatter
 * @memberof Log
 */
declare type FormatterTypeOptions = {
    type: PredefinedFormatters;
};
/**
 * A formatter converts stored logs into data that can be consumed by transports.
 * @typedef {function} Formatter
 * @param {Array<Log.LogEntry>} data log entries that will be formatted
 * @returns {any}
 * @memberof Log
 */
export declare type Formatter<T> = (data: Array<LogEntry>) => T;
/**
 * Create a custom formatter
 * @callback CreateFormatter
 * @returns {Log.Formatter}
 * @memberof Log
 */
export declare type CreateFormatter = () => Formatter<any>;
/**
 * @typedef FormatterConfigurableOptions
 * @mixes Log.FormatterTypeOptions
 * @memberof Log
 */
declare type FormatterConfigurableOptions = FormatterTypeOptions;
/**
 * A way to define a formatter for a log manager
 * @typedef {Log.CreateFormatter | Log.FormatterConfigurableOptions} FormatterConfig
 * @memberof Log
 */
export declare type FormatterConfig = CreateFormatter | FormatterConfigurableOptions;
export declare const getFormatter: ({ type }: FormatterTypeOptions) => Formatter<any>;
export {};
