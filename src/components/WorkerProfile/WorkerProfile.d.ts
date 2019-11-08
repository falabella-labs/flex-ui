import * as React from "react";
import { IWorker } from "../../models";
/**
 * Worker Profile Detail.
 * @typedef WorkerProfile.WorkerProfileDetail
 * @property {string} name - Detail name.
 * @property {string} content - Detail content.
 */
export interface WorkerProfileDetail {
    name: string;
    content: string;
}
/**
 * Properties of WorkerProfile
 * @typedef WorkerProfile.WorkerProfileProps
 * @property {IWorker} worker - Worker
 * @property {DynamicComponentChildren<WorkerProfile.WorkerProfileChildrenProps>} [children] - children
 */
export interface WorkerProfileProps {
    worker: IWorker;
    details?: Array<WorkerProfileDetail>;
}
/**
 * Properties of Worker Profile.
 * @typedef {WorkerProfile.WorkerProfileProps} WorkerProfile.WorkerProfileChildrenProps
 */
export interface WorkerProfileChildrenProps extends WorkerProfileProps {
}
/**
 * @classdesc This is a container for WorkerProfile that shows the agent profile.
 * @component
 * @hideconstructor
 * @param {WorkerProfile.WorkerProfileProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class WorkerProfile extends React.PureComponent<WorkerProfileProps> {
    static readonly displayName = "WorkerCanvasProfile";
    static readonly friendlyName = "WorkerCanvasProfile";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<WorkerProfile.WorkerProfileChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {WorkerProfile.WorkerProfileProps}
     * @readonly
     */
    static readonly defaultProps: Partial<WorkerProfileProps>;
    render(): JSX.Element;
}
