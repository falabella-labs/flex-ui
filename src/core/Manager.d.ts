import { Store } from "redux";
import * as AppConfig from "../state/AppConfig";
import { FlexEventEmitter } from "../FlexEvents";
import * as TwilioChat from "twilio-chat";
import { Worker } from "twilio-taskrouter";
import { FlexState, EnhancedStore } from "../Store";
import defaultConfiguration from "./ContactCenter.conf";
import { Strings } from "../localization";
import { SyncClient } from "twilio-sync";
import { PrivateServiceConfiguration } from "./PrivateAppConfigUtils";
export { defaultConfiguration };
/**
 * User Info
 *
 * @typedef {Object} UserInfo
 * @property {string} identity identity
 * @property {Array<string>} roles roles
 * @property {string} token access token
 * @property {Date} tokenExpirationDate token expiration date
 * @memberof Manager
 */
export interface UserInfo {
    identity: string;
    roles: Array<string>;
    token: string;
    tokenExpirationDate: Date;
}
/**
 * @class Manager
 * @classdesc Flex Manager. Main entry point to control Flex instance.
 * @hideconstructor
 * @category Core / Manager
 */
export declare class Manager {
    private _store?;
    private _strings;
    private _initialized;
    private _serviceConfiguration;
    private static _instance;
    /**
     * Gets the instance of Manager
     *
     * @static
     * @returns {Manager} instance
     */
    static getInstance(): Manager;
    constructor(config: AppConfig.Config, store: Store<FlexState>);
    private static validateConfig;
    /**
     * Creates an instance of Flex Manager
     *
     * @static
     * @param {Config} config Configuration
     * @param {Store<FlexState>} [store] Custom Redux store
     * @throws {FlexError}
     * @returns {Manager} New instance of manager
     * @example
     * import * as React from "react";
     * import * as ReactDOM from "react-dom";
     * import { Manager, ContextProvider, RootContainer } from "@twilio/flex-ui";
     * Manager.create(configuration)
     *  .then((manager) => {
     *      ReactDOM.render(
     *          <ContextProvider manager={manager}>
     *              <RootContainer />
     *          </ContextProvider>,
     *          document.getElementById("container")
     *      );
     *  })
     *  .catch((e) => {
     *      console.log("Failed to run Flex", e);
     *  });
     */
    static create(config: AppConfig.Config, store?: Store<FlexState>, _deprecated3rdParam?: any): Promise<Manager>;
    /**
     * Updates current configuration by merging provided configuration objects deeply with the current configuration.
     * @param {...Array<Config>} configs configuration objects to merge in
     * @instance
     * @example
     * import { Manager } from "@twilio/flex-ui";
     * Manager.getInstance().updateConfig({
     *  logLevel: "debug"
     * });
     */
    updateConfig(...configs: Array<AppConfig.Config>): void;
    /**
    * Current configuration
    * @type {Config}
    * @readonly
    * @instance
    */
    configuration: AppConfig.Config;
    /**
     * Service configuration
     * @type {Config.ServiceConfiguration}
     * @readonly
     * @instance
     */
    readonly serviceConfiguration: PrivateServiceConfiguration | AppConfig.ServiceConfiguration;
    /**
     * Instance of Flex Redux store
     * @see {@link https://redux.js.org/api/store}
     * @type {Store<FlexState>}
     * @readonly
     * @instance
     */
    readonly store: EnhancedStore<any>;
    /**
     * Flex event emitter. User to subscribe to Flex events.
     *
     * @readonly
     * @type {FlexEventEmitter}
     * @instance
     */
    readonly events: FlexEventEmitter;
    /**
    * Get or set strings / templates for Flex. Add or updates existing ones.
    * @type {Strings}
    * @instance
    */
    strings: Strings;
    /**
     * Current user information
     *
     * @readonly
     * @type {Manager.UserInfo}
     * @instance
     */
    readonly user: UserInfo;
    /**
     * Instance of Twilio Chat Client.
     * @see {@link https://media.twiliocdn.com/sdk/js/chat/v3.0/docs}
     * @instance
     * @readonly
     * @type {twilio-chat:Client}
     */
    readonly chatClient: TwilioChat.Client;
    /**
     * Returns an instance of Twilio.Device which is used to handle calls.
     * @see {@link https://www.twilio.com/docs/voice/client/javascript/device}
     * @readonly
     * @type {twilio-client:Device}
     * @instance
     */
    readonly voiceClient: any;
    /**
     * Returns an instance of Twilio TaskRouter Worker Client.
     * @see {@link https://twilio.github.io/twilio-taskrouter.js}
     * @readonly
     * @type {twilio-taskrouter:Worker}
     * @instance
     */
    readonly workerClient: Worker;
    /**
     * Returns an instance of Twilio Sync Client.
     * @see {@link https://media.twiliocdn.com/sdk/js/sync/v0.9/docs}
     * @readonly
     * @type {twilio-sync:Client}
     * @instance
     */
    readonly insightsClient: SyncClient;
    /**
     * @private
     */
    loadInitialData(): Promise<void>;
    /**
     * Fetches Flex configuration from the service.
     * @instance
     * @returns {(Promise<Config | undefined>)}
     */
    fetchConfiguration(): Promise<AppConfig.Config | undefined>;
    private validateServiceVersion;
    private configureReduxStore;
    private setStringsFromConfig;
}
