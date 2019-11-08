import { SSOConfig } from "../state/AppConfig";
/**
 * Replace reserved params from query string
 * Example: http://localhost/?Token=foo&A=1&Identity=batman will changed to http://localhost/?A=1
 * @private
 */
export declare function sanitizeSSOParams(s: string): string;
export declare function getDefaultLoginWindowFeatures(): object;
export declare function stringifyLoginWindowFeatures(features: {
    [k: string]: any;
}): string;
export declare class IdpUrl {
    private static accountSid;
    private static idpUrl;
    private static error;
    private static fetchRedirectURL;
    static get(accountSid: string, config: SSOConfig): Promise<string>;
    static resetCache(): void;
    constructor();
}
