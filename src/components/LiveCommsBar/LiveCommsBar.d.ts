import * as React from "react";
import { AppState } from "../../state";
import { CallMonitoringStatus } from "../../state/SupervisorState";
import { ITask, IWorker } from "../../models";
/**
 * Properties of LiveCommsBar.
 * @typedef {Object} LiveCommsBar.LiveCommsBarChildrenProps
 * @property {ITask} [monitoredTask] - Monitored task.
 * @property {Array<IWorker>} [monitoredWorkers] - Array of monitored workers.
 * @property {SupervisorState.CallMonitoringStatus} [monitoringState] - Call monitoring status.
 * @property {ITask} [currentCallTask] - Current call task.
 * @property {boolean} [currentCallOnHold] - Whether the current call is on hold or not.
 * @property {string} [selectedView] - Represents the current active view.
 */
export interface LiveCommsBarChildrenProps {
    monitoredTask?: ITask;
    monitoredWorkers?: Array<IWorker>;
    monitoringState?: CallMonitoringStatus;
    currentCallTask?: ITask;
    currentCallOnHold?: boolean;
    selectedView?: string;
}
export declare const mapTaskStateToProps: (store: AppState) => LiveCommsBarChildrenProps;
/**
 * @classdesc This is a container for LiveCommsBar that displays an ongoing call bar for views different from Agent Desktop
 * @component
 * @hideconstructor
 * @category Components / Programmable
 */
export declare class LiveCommsBar extends React.PureComponent {
    static readonly friendlyName = "LiveCommsBar";
    static readonly displayName = "LiveCommsBar";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<LiveCommsBar.LiveCommsBarChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
