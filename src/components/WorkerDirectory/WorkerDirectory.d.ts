import * as React from "react";
import { AppState } from "../../state";
import { ITask } from "../../models";
import { ThemeProps } from "../theme";
import { WorkerDirectoryTabs } from "./WorkerDirectoryTabs";
/**
 * @typedef WorkerDirectory.WorkerDirectoryProps
 * @property {ThemeProps} [theme.WorkerDirectory] - theme
 * @property {DynamicComponentChildren<WorkerDirectory.WorkerDirectoryChildrenProps>} [children] - children
 */
export interface WorkerDirectoryProps extends ThemeProps {
}
/**
 * Properties of WorkerDirectory
 * @typedef {WorkerDirectory.WorkerDirectoryProps} WorkerDirectory.WorkerDirectoryChildrenProps
 * @property {boolean} [isOpen] - Whether the worker directory is opened or not.
 * @property {ITask} [task] - Task to be transferred
 */
export interface WorkerDirectoryChildrenProps extends WorkerDirectoryProps {
    isOpen?: boolean;
    task?: ITask;
    isWarmTransferEnabled?: boolean;
}
/**
 * @classdesc This is a container for WorkersDirectory that displays the directory of workers.
 * Can be themed with [theme.WorkerDirectory]
 * @component
 * @hideconstructor
 * @param {WorkerDirectory.WorkerDirectoryProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class WorkerDirectory extends React.PureComponent<WorkerDirectoryProps> {
    static readonly friendlyName = "WorkerDirectory";
    static readonly displayName = "WorkerDirectory";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<WorkerDirectory.WorkerDirectoryChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    static Tabs: typeof WorkerDirectoryTabs;
    render(): JSX.Element;
}
export declare const mapStateToProps: (store: AppState) => Partial<WorkerDirectoryChildrenProps>;
