import * as React from "react";
import { IWorker } from "../../models";
/**
 * Properties of Worker Canvas.
 * @typedef WorkerCanvas.WorkerCanvasProps
 * @property {IWorker} worker - Worker to display
 * @property {boolean} [showSkills=true] - Whether or not the skills section for the agent details should be shown.
 */
export interface WorkerCanvasProps {
    worker: IWorker;
    showSkills?: boolean;
}
/**
 * @class WorkerCanvas
 * @classdesc This is a container for WorkerCanvas that displays the agent details.
 * Can be themed with [theme.Supervisor.WorkerCanvas]
 * @component
 * @hideconstructor
 * @param {WorkerCanvas.WorkerCanvasProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class WorkerCanvas extends React.PureComponent<WorkerCanvasProps> {
    static readonly displayName = "WorkerCanvas";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<WorkerCanvas.WorkerCanvasProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {WorkerCanvas.WorkerCanvasProps}
     * @readonly
     */
    static readonly defaultProps: Partial<WorkerCanvasProps>;
    render(): JSX.Element;
}
