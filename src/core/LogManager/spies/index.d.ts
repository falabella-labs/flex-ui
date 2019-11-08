import { Spy, NotifyCallback, OnStartCallback } from "./Spy";
import { ClassProxySpyOptions, ClassProxySpyConstructorOptions } from "./ClassProxySpy";
import { EventEmitterSpyOptions, EventEmitterSpyConstructorOptions } from "./EventEmitterSpy";
import { DOMEventsSpyOptions, DOMEventsSpyConstructorOptions } from "./DOMEventsSpy";
import { LoglevelSpyOptions, LoglevelSpyConstructorOptions } from "./LoglevelSpy";
export { Spy, NotifyCallback, OnStartCallback };
/**
 * An entity to spy on
 * @typedef {any} Target
 * @memberof Log
 */
export declare type Target = any;
/**
 * Data unit representing an atomic information collected by a spy
 * @typedef {object} LogEntry
 * @property {Target} [target] an entity that is spied on
 * @property {string} [targetAlias] verbose name for target
 * @property {string} [subject] a name of a method, a property or a topic that the collected data relates to
 * @property {Array<any>} [args] arguments passed to a subject (whenever it's function)
 * @property {any} [result] result of calling a subject (whenever it's function)
 * @property {number} [timestamp] the time at which the log entry is recorded
 * @memberof Log
 */
export declare type LogEntry = {
    target?: Target;
    targetAlias?: string;
    subject?: string;
    args?: Array<any>;
    result?: any;
    timestamp: number;
};
/**
 * @enum {"ClassProxy" | "EventEmitter" | "DOMEvents" | "Loglevel"} PredefinedSpies
 * Predefined spies available for use in custom log managers:
 * @property {"ClassProxy"} ClassProxy - creates a proxy for the given target and tracks calls of it's methods
 * @property {"EventEmitter"} EventEmitter - sets an event listeners to a given target
 * @property {"DOMEvents"} DOMEvents - sets an event listeners to the window object
 * @property {"Loglevel"} Loglevel - decorates a loglevel instance in-place, tracking calls of it's methods
 * @memberof Log
 */
export declare enum PredefinedSpies {
    ClassProxy = "ClassProxy",
    EventEmitter = "EventEmitter",
    DOMEvents = "DOMEvents",
    Loglevel = "Loglevel"
}
/**
 * @typedef {object} SpyTypeOptions
 * @property {Log.PredefinedSpies} type a type of a predefined spy
 * @memberof Log
 */
declare type SpyTypeOptions = {
    type: PredefinedSpies;
};
/**
 * Options for predefined spies
 * @typedef {object} SpyConfigurableOptions
 * @mixes Log.SpyTypeOptions
 * @mixes Log.ClassProxySpyOptions
 * @mixes Log.DOMEventsSpyOptions
 * @mixes Log.EventEmitterSpyOptions
 * @mixes Log.LoglevelSpyOptions
 * @memberof Log
 * @example <caption>Use ClassProxy spy to track console calls</caption>
 * const myLogManager = new Flex.Log.LogManager({
 *   spies: [{
 *     type: Flex.Log.PredefinedSpies.ClassProxy,
 *     target: window.console,
 *     targetAlias: "window.console",
 *     methods: ["trace", "info", "debug", "log", "warn", "error"],
 *     onStart: (proxy) => {
 *       window.console = proxy;
 *     }
 *   }]
 * })
 */
declare type SpyConfigurableOptions = SpyTypeOptions & (ClassProxySpyOptions | EventEmitterSpyOptions | DOMEventsSpyOptions | LoglevelSpyOptions);
declare type ConstructorsOptions = ClassProxySpyConstructorOptions | EventEmitterSpyConstructorOptions | DOMEventsSpyConstructorOptions | LoglevelSpyConstructorOptions;
/**
 * Create a custom spy
 * @callback CreateSpy
 * @param {object} arg methods dedicated to help implementing a custom spy
 * @param {Log.NotifyCallback} arg.trigger a callback to pass on the collected data
 * @returns {Spy}
 * @memberof Log
 * @example <caption>Create a custom spy to track console's log method invocations</caption>
 * class MyConsoleSpy extends Flex.Log.Spy {
 *   static originalConsoleLog = window.console.log;
 *
 *   start() {
 *        window.console.log = (...args) => {
 *           this.trigger({
 *               target: window.console,
 *               args: [...args],
 *               targetAlias: "window.console",
 *               subject: "log",
 *               timestamp: Date.now()
 *           });
 *           MyConsoleSpy.originalConsoleLog();
 *       };
 *   }
 *
 *   stop() {
 *       window.console.log = MyConsoleSpy.originalConsoleLog;
 *   }
 * }
 *
 * const myLogManager = new Flex.Log.LogManager({
 *   spies: [{
 *     ({ trigger }) => new MyConsoleSpy({ trigger })
 *   }]
 * })
 */
export declare type CreateSpy = (arg: {
    trigger?: NotifyCallback;
}) => Spy;
/**
 * A way to define a spy for a log manager
 * @typedef {Log.CreateSpy | Log.SpyConfigurableOptions} SpyConfig
 * @memberof Log
 */
export declare type SpyConfig = CreateSpy | SpyConfigurableOptions;
declare type getSpyParams = SpyTypeOptions & ConstructorsOptions;
export declare const getSpy: (options: getSpyParams) => Spy;
