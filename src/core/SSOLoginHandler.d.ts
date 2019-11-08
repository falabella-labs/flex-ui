/// <reference types="node" />
import { EventEmitter } from "events";
import { SSOConfig } from "../state/AppConfig";
import { SSOTokenPayload } from "./SSOLoginHandler.definitions";
export { SSOConfig };
export declare const LOGIN_WINDOW_NAME = "twilioFlexLoginWindow";
export declare const LOGIN_SUCCESSFUL_MESSAGE = "TWILIO_FLEX_LOGIN_SUCCESSFUL";
/**
 * @private
 * Emits events;
 *
 * tokenUpdated - in case when token was successfully updated
 * tokenUpdateFailed - in case token update failed
 * tokenExpired - in case current token has expired and cannot be update
 */
export declare class SSOLoginHandler extends EventEmitter {
    static create(config?: SSOConfig): Promise<SSOLoginHandler>;
    /**
     * Tries to log in with provided information. Does not initialize token expiration checker.
     * @param config SSO configuration object
     */
    static tryLogin(config?: SSOConfig): Promise<boolean>;
    /**
     * Validates configuration object and throws in case of any error.
     * @throws ConfigError if sso or accountSid are missing
     *
     * @param config configuration object
     *
     */
    static tryValidateConfig(config: SSOConfig): void;
    private static tryLoginInNewWindow;
    private static openLoginWindow;
    private _config;
    private _checkTokenExpirationInterval;
    private constructor();
    getTokenInfo(): SSOTokenPayload;
    static getTokenInfo(): SSOTokenPayload;
    logout(): void;
    /**
     * SSO Login handling, behavior is the following:
     * 1. If query string contains valid JWE token
     * 1.1 If we are in the login popup window
     * 1.1.a If there is no window opener, then close the window and reject the promise
     * 1.1.b If there is window opener, then store token payload and post message to opener window
     *     and reject the promise
     * 1.2 If we are not in login window, then store the token payload
     * 2. If there is valid stored JWE token then use it
     * 3. If there is no stored JWE token, then:
     * 3.1 if 'loginPopup' option was passed in configuration, then open empty login window
     * 3.2. Get account sid. If set in sso.accountSid, then use that one.
     * Otherwise get Twilio Account sid from configuration service (not implemented yet)
     * 3.3. Make request to ID Federation service to fetch IDP URL for the account.
     * 3.3.a. sso.loginUrl can be used to override URL of the ID Federation /authenticate endpoint,
     * variable {accountSid} can be used to be replaced with account sid.
     * 3.3.b. sso.redirectUrl can be used to customize the URL
     * where browser will be redirected back after login. Defaults to window.location.href.
     * 3.3.c. sso.products can be used to customize products parameter for ID Federation.
     * Defaults to ["flex"]
     * 3.4 Fetch public configuration
     * 3.5.1 If public or local configuration had 'loginPopup' set, then open popup window for login
     * 3.5.2 If public configuration does not have 'loginPopup' set, then current
     *     browser window will be redirected to IDP url returned by ID Federation service
     */
    private initialize;
    private startLoginHandler;
    private static getTokenFromLocalStorage;
    private clearTokenFromLocalStorage;
    private getAccountSid;
    private static parseTokenPayloadFromQueryString;
    static hasValidToken(): boolean;
    private static storeTokenPayload;
    private static isValidTokenPayload;
    private static isTokenExpired;
    private static isInLoginWindow;
    private fetchNewToken;
    private checkTokenExpired;
    private handleCheckTokenExpirationInterval;
    private _updatingToken;
    private handleTokenUpdate;
    private handleTokenExpired;
}
