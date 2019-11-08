/**
 * SSO Token Payload
 *
 * @typedef {object} SSOTokenPayload
 * @property {string} identity identity
 * @property {Array<string>} roles roles
 * @property {string} token access token
 * @property {string} expiration token expiration date
 */
export interface SSOTokenPayload {
    expiration: string;
    identity: string;
    roles: Array<string>;
    token: string;
}
