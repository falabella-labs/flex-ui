import { ActionPayload } from "@twilio/frame-ui";
import { UserInfo } from './core/Manager';
/**
 * @private
 */
export declare function tryInvokeAction(name: string, payload?: ActionPayload): Promise<any>;
/**
 * @private
 */
export declare function isAdmin(user: UserInfo): boolean;
/**
 * @private
 */
export declare function isSupervisor(user: UserInfo): boolean;
/**
 * @private
 */
export declare function templateStr(template: string, params: any): string;
