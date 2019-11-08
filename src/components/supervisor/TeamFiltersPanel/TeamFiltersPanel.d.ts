import * as React from "react";
import { DynamicContentStore, FilterDefinition } from "@twilio/frame-ui";
import { TeamsViewChildrenProps } from "../../view/TeamsView/TeamsView";
export declare const displayName = "TeamFiltersPanel";
export declare const contentStore: DynamicContentStore;
export interface FilterData {
    [key: string]: any;
}
/**
 * Flex context interface
 * @typedef {Object} TeamFiltersPanelProps
 * @property {boolean} isHidden - defines whether the component should be displayed or not
 * @property {Function} handleCloseClick - callback triggered on SidePanel close button
 * @property {Function} handleApplyFilters - callback triggered when applyFilter gets triggered
 * @property {Function} handleResetFilters - callback triggered when reset Filter gets triggered
 * @property {{}} filters - list of filter or filterFactories function
 * @property {boolean} isLoadingWorkers - whether the workers are still being loaded
 * @memberOf Supervisor․TeamFiltersPanel
 */
export interface TeamFiltersPanelProps extends TeamsViewChildrenProps {
    handleCloseClick: () => void;
    handleApplyFilters: (data: FilterData) => void;
    handleResetFilters: (data: FilterData) => void;
    isHidden: boolean;
    filters: Array<FilterDefinition>;
    isLoadingWorkers: boolean;
}
/**
 * @alias Supervisor․TeamFiltersPanel
 * @classdesc SidePanel dedicated to filter WorkersDataTable in teams view
 * @component
 * @hideconstructor
 * @param {TeamFiltersPanel.TeamFiltersPanelProps} props properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TeamFiltersPanel extends React.PureComponent<TeamFiltersPanelProps> {
    static displayName: string;
    static Content: DynamicContentStore;
    render(): JSX.Element;
    /**
     * AppliedFilters on view state have a different and more complex structure than he ones required in FiltersList.
     * This method convert its structure to a compatible one.
     * @param appliedFiltersFromState
     */
    private getSimplifiedFiltersMap;
}
