import { Spy, SpyConfig, PredefinedSpies, LogEntry, NotifyCallback } from "./spies";
import { Formatter, PredefinedFormatters, FormatterConfig } from "./formatters";
import { Storage, PredefinedStorages, StorageConfig } from "./storages";
import { Transport, PredefinedTransports, TransportConfig } from "./transports";
/**
 * @category Log Manager
 * @interface Log.LogManagerConfig
 * @property {string} [identifier] a unique name of the log manager that prevents collected data from overlapping with other log managers
 * @property {Array<Log.SpyConfig>} spies an array of configurations for predefined spies or factories for custom spies
 * @property {Log.StorageConfig} storage a configuration for predefined storage or a factory for custom storage
 * @property {Log.FormatterConfig} formatter a configuration for predefined formatter or a factory for custom formatter
 * @property {Log.TransportConfig} transport a configuration for predefined transport or a factory for custom transport
 * @private
 */
export interface LogManagerConfig {
    identifier?: string;
    spies: Array<SpyConfig>;
    storage?: StorageConfig;
    transport?: TransportConfig;
    formatter?: FormatterConfig;
}
/**
 * Log manager is dedicated to collect logs across Flex ecosystem by abstracting the process
 * of gathering data into multiple stages, that can be customized to match specific use cases.
 * Log manager has following modules:
 * <br>&nbsp;&nbsp;• {@link Log.Spy Spies}
 * <br>&nbsp;&nbsp;• {@link Log.Storage Storage} – optional, the data will be passed straight to a formatter and then to a transport if a storage is falsy. By default is set to {@link Log.PredefinedStorages PredefinedStorages.LocalStorage}.
 * <br>&nbsp;&nbsp;• {@link Log.Formatter Formatter} - by default is set to {@link Log.PredefinedFormatters PredefinedFormatters.String}.
 * <br>&nbsp;&nbsp;• {@link Log.Transport Transport} - by default is set to {@link Log.PredefinedTransports PredefinedTransports.File}.
 * @category Log Manager
 * @class Log.LogManager
 * @hideconstructor
 * @private
 * @example <caption>Dublicate window.console calls to Rollbar (implying Rollbar is installed according to https://docs.rollbar.com/docs/browser-js) </caption>
 * const myLogManager = new Flex.Log.LogManager({
 *     spies: [
 *         // Proxy `window.console` to collect data regarding invoking it's methods
 *         {
 *             type: Flex.Log.PredefinedSpies.ClassProxy,
 *             target: window.console,
 *             targetAlias: "Proxied window.console",
 *             methods: ["trace", "info", "log", "debug", "warn", "error"],
 *             onStart: (proxy) => {
 *                 window.console = proxy;
 *             }
 *         }
 *     ],
 *     storage: () => null, // Don't keep logs in the storage and pass them forward immediately
 *     formatter: () => (entries) => entries[0], // Extract the single log entry and pass it to transport
 *     transport: () => ({ // Pass the collected intel to Rollbar, respecting the invoked method
 *         flush: function(entry) {
 *             const collectedData = entry && entry.subject && entry.args;
 *
 *             if (!collectedData) {
 *                 return;
 *             }
 *
 *             const args = entry.args.join();
 *             const isRollbarMethod = typeof Rollbar[entry.subject] === "function";
 *
 *             if (isRollbarMethod) {
 *                 Rollbar[entry.subject](args);
 *             } else {
 *                 Rollbar.log(args);
 *             }
 *         }
 *     })
 * });
 *
 * myLogManager.prepare().then(myLogManager.start);
 */
declare class LogManager {
    static persistKey: string;
    static defaults: LogManagerConfig;
    private spies;
    private storage?;
    private transport;
    private formatter;
    private config;
    constructor(options: LogManagerConfig);
    /**
     * Start a log manager and all of it's modules. Invoke spies `start` methods.
     * Only takes effect if `prepare` method's promise has resolved.
     * @name start
     * @function
     * @returns {void}
     * @instance
     * @memberof Log.LogManager
     */
    start(): void;
    /**
     * Stop a log manager and all of it's modules. Invokes `stop` method of all spies.
     * Clear the prepare state of a log manager, so it will have to be prepared for a next call of `start` method.
     * @name stop
     * @function
     * @returns {void}
     * @instance
     * @memberof Log.LogManager
     */
    stop(): void;
    /**
     * Retrieve the collected data.
     * @name flush
     * @function
     * @returns {void}
     * @instance
     * @memberof Log.LogManager
     */
    flush(data?: Array<LogEntry>): any;
    /**
     * Indicate whenever a log manager is ready to be started or not
     * @name isReady
     * @function
     * @returns {boolean}
     * @instance
     * @memberof Log.LogManager
     */
    isReady(): any;
    /**
     * Indicate whenever a log manager is started and is gathering logs
     * @name isLogging
     * @function
     * @returns {boolean}
     * @instance
     * @memberof Log.LogManager
     */
    isLogging(): boolean;
    /**
     * Run necessary preparations so that a log manager can be started
     * @name prepare
     * @function
     * @returns {Promise}
     * @instance
     * @memberof Log.LogManager
     */
    prepare(): Promise<unknown>;
    private setState;
    private getState;
}
export { LogManager, NotifyCallback, Spy, Storage, Formatter, Transport, PredefinedSpies, PredefinedStorages, PredefinedFormatters, PredefinedTransports };
