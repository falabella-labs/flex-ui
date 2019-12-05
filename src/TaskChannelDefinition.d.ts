import * as React from "react";
import { ContentFragmentProps, RemoveComponentCallOptions, Notification, NotificationEventListener } from "@twilio/frame-ui";
import { ITask } from "./models";
import * as FlexComponents from "./components";
import { AppState } from "./state/AppState";
declare type FlexComponents = typeof FlexComponents;
/**
 * Task channel capabilities
 *
 * @enum {"Info" | "Call" | "Chat" | "Video" | "Wrapup"} TaskChannelCapability
 * @property {"Info"} "Info" - whether channel has info panel
 * @property {"Call"} "Call" - whether channel has call canvas capabilities
 * @property {"Chat"} "Chat" - whether channel has chat canvas capabilities
 * @property {"Video"} "Video" - whether channel has video calling capabilities
 * @property {"Wrapup"} "Wrapup" - whether channel needs to go to Wrapup state before can be completed
 * @memberof TaskChannelDefinition
 */
export declare enum TaskChannelCapability {
    Info = "Info",
    Call = "Call",
    Chat = "Chat",
    Video = "Video",
    Wrapup = "Wrapup"
}
/**
 * Callback to provide values for Flex. Called from various areas of Flex.
 *
 * @callback TaskCallbackType
 * @param {ITask} task task
 * @param {React.ComponentType} componentType caller component type. One of Flex React components.
 * @param {Array<Any>} [args] optional arguments
 * @returns {T} value to be used
 * @memberof TaskChannelDefinition
 */
export declare type TaskCallbackType<T> = (task: ITask, componentType: React.ComponentType, ...args: Array<any>) => T;
/**
 * @enum {"Accepted" | "Wrapping" | "Completed" | "Canceled" | "Pending" | "Rescinded"} ReservationStatuses
 * @property {"Wrapping"} Wrapping - wrapping state
 * @property {"Completed"} Completed - completed state
 * @property {"Canceled"} Canceled - canceled state
 * @property {"Pending"} Pending - pending state
 * @property {"Accepted"} Accepted - accepted state
 * @property {"Rescinded"} Rescinded - rescinded state
 * @memberof TaskChannelDefinition
 */
export declare enum ReservationStatuses {
    Wrapping = "Wrapping",
    Completed = "Completed",
    Canceled = "Canceled",
    Pending = "Pending",
    Accepted = "Accepted",
    Rescinded = "Rescinded",
    Reserved = "Reserved",
    Assigned = "Assigned"
}
/**
 * @typedef {Object<T>} TaskStatusBasedTypeBase
 * @memberof TaskChannelDefinition
 */
export declare type TaskStatusBasedTypeBase<T> = {
    [key in ReservationStatuses]?: T;
};
/**
 * Valid types to use to define value for a task in given status
 * @typedef {T | TaskChannelDefinition.TaskCallbackType | TaskChannelDefinition.TaskStatusBasedTypeBase} TaskStatusBasedType
 * @memberof TaskChannelDefinition
 */
export declare type TaskStatusBasedType<T = string> = T | TaskCallbackType<T> | TaskStatusBasedTypeBase<T>;
/**
 * @callback TaskChannelApplicableCb
 * @param {ITask} task task to evaluate applicability for
 * @returns {boolean} true if task channel is applicable for given task
 * @memberof TaskChannelDefinition
 */
export declare type TaskChannelApplicableCb = (task: ITask) => boolean;
/**
 * @typedef {Object} TaskChannelComponentRegistration
 * @property {string} name of a Flex component. Component must have static "Content" property.
 * @property {React.ReactChild} component component to register
 * @property {ContentFragmentProps} options properties for component registration
 * @memberof TaskChannelDefinition
 */
export declare type TaskChannelComponentRegistration = {
    target: keyof FlexComponents;
    component: React.ReactChild;
    options?: ContentFragmentProps;
};
/**
 * @typedef {Object} TaskChannelComponentRemoveRequest
 * @property {string} name of a Flex component. Component must have static "Content" property.
 * @property {string} key key of a component to remove
 * @property {ContentFragmentProps} options properties for component removal.
 * @memberof TaskChannelDefinition
 */
export declare type TaskChannelComponentRemoveRequest = {
    target: keyof FlexComponents;
    key: React.Key;
    options?: RemoveComponentCallOptions;
};
export declare type TaskSoundData = {
    url: string;
    repeatable: boolean;
};
/**
 * @typedef {TaskChannelDefinition.TaskStatusBasedTypeBase} TaskSounds
 * @memberof TaskChannelDefinition
 */
export declare type TaskSounds = TaskStatusBasedTypeBase<TaskSoundData>;
/**
 * Notification override
 * @typedef { Partial<Notification> | NotificationEventListener | null } NotificationOverride
 */
export declare type NotificationOverride = Partial<Notification> | NotificationEventListener | null;
/**
 * Notification overrides matched to notification ids.
 * @typedef TaskChannelNotificationOverrides
 * @property {NotificationOverride} [NotificationId] overrides for NotificationId
 */
export declare type NotificationOverrides = {
    [notificationId: string]: NotificationOverride;
};
/**
 * @typedef TaskChannelNotificationOptions
 * @property {NotificationOverride} override
 */
export declare type TaskChannelNotificationOptions = {
    override: NotificationOverrides;
};
/**
 * Interface to define a task channel for Flex
 *
 * @class TaskChannelDefinition
 * @property {string} name name of the task channel definition
 * @property {TaskChannelDefinition.TaskChannelApplicableCb} isApplicable Callback to determine whether this task channel is applicable for a given task.
 * @property {Set<TaskChannelDefinition.TaskChannelCapability>} capabilities capabilities of task channel
 * @property {number} charLimit message character limit for task channel with chat capabilities
 * @property {object} [colors] colors to be used
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [colors.main] main color code as string to use in TaskList, TaskCard, Canvases
 * @property {TaskChannelDefinition.TaskSounds} [sounds] sounds to be used for specific tasks
 * @property {object} [icons] icons to render for the task channel
 * @property {TaskChannelDefinition.TaskStatusBasedType<string|React.ReactNode>} [icons.list] list icon to be used in TaskList and TaskCardList
 * @property {TaskChannelDefinition.TaskStatusBasedType<string|React.ReactNode>} [icons.main] icon to be used in Tab headers if tab is not selected
 * @property {TaskChannelDefinition.TaskStatusBasedType<string|React.ReactNode>} [icons.active] icon to be used in Tab headers if tab is selected and in Task Canvases as the main icon
 * @property {object} [templates] template strings for components
 * @property {object} [templates.IncomingTaskCanvas] templates for IncomingTaskCanvas
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.IncomingTaskCanvas.firstLine] first line
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.IncomingTaskCanvas.secondLine] second line
 * @property {object} [templates.CallCanvas] templates for CallCanvas
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.CallCanvas.firstLine] first line
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.CallCanvas.secondLine] second line
 * @property {object} [templates.TaskListItem] templates for TaskListItem
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.TaskListItem.firstLine] first line
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.TaskListItem.secondLine] second line
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.TaskListItem.extraInfo] extra info to be shown
 * @property {object} [templates.TaskCanvasHeader] templates for TaskCanvasHeader
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.TaskCanvasHeader.title] title
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.TaskCanvasHeader.endButton] end button text
 * @property {object} [templates.TaskCard] templates for TaskCard
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.TaskCard.firstLine] first line
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.TaskCard.secondLine] second line
 * @property {object} [templates.TaskInfoPanel] templates for TaskInfoPanel
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.TaskInfoPanel.content] content of the panel
 * @property {object} [templates.Supervisor] templates for components for supervisors
 * @property {object} [templates.Supervisor.TaskCanvasHeader] templates for Supervisor.TaskCanvasHeader
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.Supervisor.TaskCanvasHeader.title] title
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.Supervisor.TaskCanvasHeader.endButton] end button text
 * @property {object} [templates.Supervisor.TaskInfoPanel] templates for Supervisor.TaskInfoPanel
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.Supervisor.TaskInfoPanel.content] content of the panel
 * @property {object} [templates.Supervisor.TaskOverviewCanvas] templates for Supervisor.TaskOverviewCanvas
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.Supervisor.TaskOverviewCanvas.firstLine] first line
 * @property {TaskChannelDefinition.TaskStatusBasedType<string>} [templates.Supervisor.TaskOverviewCanvas.secondLine] second line
 * @property {Array<TaskChannelDefinition.TaskChannelComponentRegistration>} [addedComponents] components to be added for task channel
 * @property {Array<TaskChannelDefinition.TaskChannelComponentRegistration>} [replacedComponents] components to be replaced for task channel
 * @property {Array<TaskChannelDefinition.TaskChannelComponentRemoveRequest>} [removedComponents] component removal request for task channel
 * @property {Object} componentProps Object of task-channel specific components props
 * @property {TaskChannelNotificationOptions} [notifications] Notification properties
 * @category Framework / Channels
 */
export interface TaskChannelDefinition {
    _registrationCallbacks?: Array<Function>;
    name: string;
    colors?: {
        main?: TaskStatusBasedType<string>;
    };
    sounds?: TaskSounds;
    isApplicable: TaskChannelApplicableCb;
    icons?: {
        list?: TaskStatusBasedType<string | React.ReactNode>;
        main?: TaskStatusBasedType<string | React.ReactNode>;
        active?: TaskStatusBasedType<string | React.ReactNode>;
    };
    templates?: {
        IncomingTaskCanvas?: {
            titleLine?: TaskStatusBasedType<string>;
            firstLine?: TaskStatusBasedType<string>;
            secondLine?: TaskStatusBasedType<string>;
        };
        ConnectingOutboundCallCanvas?: {
            titleLine?: TaskStatusBasedType<string>;
            firstLine?: TaskStatusBasedType<string>;
            secondLine?: TaskStatusBasedType<string>;
        };
        CallCanvas?: {
            titleLine?: TaskStatusBasedType<string>;
            firstLine?: TaskStatusBasedType<string>;
            secondLine?: TaskStatusBasedType<string>;
        };
        TaskListItem?: {
            firstLine?: TaskStatusBasedType<string>;
            secondLine?: TaskStatusBasedType<string>;
            extraInfo?: TaskStatusBasedType<string>;
        };
        TaskCanvasHeader?: {
            title?: TaskStatusBasedType<string>;
            secondLine?: TaskStatusBasedType<string>;
            endButton?: TaskStatusBasedType<string>;
        };
        TaskCard?: {
            firstLine?: TaskStatusBasedType<string>;
            secondLine?: TaskStatusBasedType<string>;
        };
        TaskInfoPanel?: {
            content: TaskStatusBasedType<string>;
        };
        TaskCanvasTabs?: {
            contentTabHeader?: TaskStatusBasedType<string>;
        };
        Supervisor?: {
            TaskCanvasHeader?: {
                title?: TaskStatusBasedType<string>;
                secondLine?: TaskStatusBasedType<string>;
                endButton?: TaskStatusBasedType<string>;
            };
            TaskInfoPanel?: {
                content: TaskStatusBasedType<string>;
            };
            TaskOverviewCanvas: {
                firstLine?: TaskStatusBasedType<string>;
                secondLine?: TaskStatusBasedType<string>;
            };
        };
    };
    capabilities: Set<TaskChannelCapability>;
    charLimit: number;
    componentProps: {
        [componentName: string]: {
            [propName: string]: any;
        };
        TaskListItem?: {
            Badge?: {
                children: number | ((state: AppState, props: {}) => number);
            };
        };
    };
    addedComponents?: Array<TaskChannelComponentRegistration>;
    replacedComponents?: Array<TaskChannelComponentRegistration>;
    removedComponents?: Array<TaskChannelComponentRemoveRequest>;
    notifications: TaskChannelNotificationOptions;
}
export {};
