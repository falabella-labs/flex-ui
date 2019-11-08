import { Transport } from "./Transport";
export { Transport };
/**
 * @enum {"File"} PredefinedTransports
 * @desc Predefined transports available for use in custom log managers
 * @property {"File"} File - generates and download a text file
 * @memberof Log
 */
export declare enum PredefinedTransports {
    File = "File"
}
/**
 * @typedef {object} TransportTypeOptions
 * @property {Log.PredefinedTransports} type a type of a predefined transport
 * @memberof Log
 */
declare type TransportTypeOptions = {
    type: PredefinedTransports;
};
/**
 * Create a custom transport
 * @callback CreateTransport
 * @returns {Log.Transport}
 * @memberof Log
 */
declare type CreateTransport = () => Transport;
/**
 * Options for predefined transports
 * @typedef {object} TransportConfigurableOptions
 * @mixes Log.TransportTypeOptions
 * @memberof Log
 */
declare type TransportConfigurableOptions = TransportTypeOptions;
/**
 * A way to define a transport for a log manager
 * @typedef {Log.CreateTransport | Log.TransportConfigurableOptions} TransportConfig
 * @memberof Log
 */
export declare type TransportConfig = CreateTransport | TransportConfigurableOptions;
export declare const getTransport: ({ type }: TransportTypeOptions) => Transport;
