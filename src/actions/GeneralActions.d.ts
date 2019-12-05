import { ActiveFilter } from "../state/ViewState";
/**
 * @package
 * @typedef {Object} SelectViewPayload
 * @property {string} viewName
 * @memberof Actions
 */
export interface SelectViewPayload {
    viewName: string;
}
/**
 * @package
 * @typedef ToggleSidebarPayload
 * @property {boolean} [open]
 * @memberof Actions
 */
export interface ToggleSidebarPayload {
    open?: boolean;
}
/**
 * @package
 * @typedef SetComponentStatePayload
 * @property {string} name
 * @property {any} state
 * @memberof Actions
 */
export interface SetComponentStatePayload {
    name: string;
    state: any;
}
/**
 * @package
 * @typedef ApplyListFiltersPayload
 * @property {string} key
 * @property {TeamsView.ActiveFilter[]} filters
 * @memberof Actions
 */
export interface ApplyListFiltersPayload {
    key: string;
    filters: Array<ActiveFilter>;
}
export declare class GeneralActions {
    static registerActions(): void;
    private static navigateToView;
    private static showDirectory;
    private static hideDirectory;
    private static toggleSidebar;
    private static toggleOutboundDialer;
    private static setComponentState;
    private static applyListFilters;
    private static removeListFilters;
}
