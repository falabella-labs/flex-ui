import { Conference } from "../state/ConferencesState";
/**
 * Status of the Task
 * @typedef {"reserved" | "assigned" | "wrapping" | "completed" | "canceled"} TaskTaskStatus
 */
export declare type TaskTaskStatus = "reserved" | "assigned" | "wrapping" | "completed" | "canceled";
/**
 * Status of the Reservation
 * @typedef {"pending" | "accepted" | "wrapping" | "completed" | "canceled"} TaskReservationStatus
 */
export declare type TaskReservationStatus = "pending" | "accepted" | "wrapping" | "completed" | "canceled";
/**
 * @class TaskTransfer
 * @classdesc Task Transfer
 * @hideconstructor
 * @property {"COLD" | "WARM"} mode transfer mode
 * @property {string} sid - The sid of this Transfer
 * @property {"INITIATED" | "FAILED" | "COMPLETE" | "CANCELED"} status transfer status
 * @property {string} to - The sid of the Worker or TaskQueue this Transfer is intended for
 * @property {"QUEUE" | "WORKER"} type - The transfer type
 * @property {string} workerSid - The sid of the initiating Worker
 * @property {IWorker} [worker] - The instance of the initiating Worker
 * @property {IQueue} [queue] - Target queue instance
 * @category Core
 * @private
 */
export declare class TaskTransfer {
    mode: string;
    type: string;
    workerSid: string;
    to: string;
    sid: string;
    source: any;
    constructor(source: any);
    readonly worker: IWorker<any>;
    readonly status: string;
    readonly queue: IQueue<any>;
    /**
     * To deprecate
     * @private
     */
    cancel(): any;
}
/**
 * Task interface for actionable Reservations from TaskRouter SDK
 * @typedef ITask
 * @property {Object} sourceObject source object backing the instance (any)
 * @property {Object} addOns - the addons attached to the Task
 * @property {int} age - the age of the Task in seconds
 * @property {Object} attributes - the attributes of the Task
 * @property {Date} dateCreated - the date the Task was created
 * @property {Date} dateUpdated - the date the Task was last updated
 * @property {int} priority - the priority of the Task
 * @property {string} queueName - the friendly name of the TaskQueue the Task is currently in
 * @property {string} queueSid - the sid of the TaskQueue the Task is currently in
 * @property {string} reason - the reason the Task was completed or canceled, if applicable
 * @property {string} sid - the sid of the Reservation
 * @property {TaskReservationStatus} status - the status of the Reservation
 * @property {string} taskSid - the sid of the Task
 * @property {TaskTaskStatus} taskStatus - the status of the Task
 * @property {string} taskChannelSid - the sid of the Task Channel associated to the Task in MultiTask mode
 * @property {string} taskChannelUniqueName - the unique name of the Task Channel associated to the Task in MultiTask mode
 * @property {int} timeout - the number of seconds the Task is allowed to live
 * @property {string} workflowName - the name of the Workflow responsible for routing the Task
 * @property {string} workflowSid - the sid of the Workflow responsible for routing the Task
 * @property {TaskTransfer} incomingTransferObject - transfer object if Task was transferred to the current user
 * @property {TaskTransfer} outgoingTransferObject - transfer object if is being transferred to another user by current user
 * @property {string} channelType - channel type - either `channelType` property defined in the attributes of Task or `taskChannelUniqueName` property
 * @property {string} defaultFrom - default initiator of a Task. Either `name` or `from` property defined in the attributes. If not specified then 'Anonymous' is returned
 */
export interface ITask {
    source: any;
    sourceObject: any;
    addOns: object;
    age: number;
    attributes: any;
    dateCreated: Date;
    dateUpdated: Date;
    priority: number;
    queueName: string;
    queueSid: string;
    reason: string;
    sid: string;
    status: TaskReservationStatus;
    taskSid: string;
    taskStatus: TaskTaskStatus;
    taskChannelSid: string;
    taskChannelUniqueName: string;
    timeout: number;
    workflowName: string;
    workflowSid: string;
    workerSid: string;
    incomingTransferObject: TaskTransfer;
    outgoingTransferObject: TaskTransfer;
    defaultFrom: string;
    channelType: string;
    conference: Conference;
    complete: () => Promise<any>;
    transfer: (to: string, options: any) => Promise<any>;
    hold: () => Promise<any>;
    unhold: () => Promise<any>;
    holdParticipant: (targetSid: string) => Promise<any>;
    unholdParticipant: (targetSid: string) => Promise<any>;
    cancelTransfer: () => Promise<any>;
    kick: (targetSid: string) => Promise<any>;
    setAttributes: (attributes: object) => Promise<any>;
    wrapUp: () => Promise<any>;
}
/**
 * Worker skills
 * @typedef WorkerSkillsType
 * @property {Array<string>} [skills] skills for the user
 * @property {Object} [levels] skill levels for the user. Key of the level is skill `name`
 * @property {number} [levels.name] level of a particular skill
 */
export interface WorkerSkillsType {
    skills?: Array<string>;
    levels?: {
        [name: string]: number;
    };
}
/**
 * Worker attributes
 * @typedef {Object} WorkerAttributes
 * @property {WorkerSkillsType} [routing] skills used for routing
 * @property {WorkerSkillsType} [disabled_skills] all other skills that are currently not active
 */
export interface WorkerAttributes {
    routing?: WorkerSkillsType;
    disabled_skills?: WorkerSkillsType;
    [name: string]: any;
}
/**
 * Worker
 * @typedef IWorker
 * @property {string} sid SID of the user
 * @property {string} name user name
 * @property {string} fullName full name of the user. Either `full_name` from attributes of the user or `name`
 * @property {string} activityName name of the activity set for the user
 * @property {WorkerAttributes} attributes attributes of the worker
 * @property {Date} dateUpdated date when user was updated
 * @property {boolean} isAvailable whether activity set for the user is an available activity
 * @property {string} activityDuration for how long user has been in the current activity state
 */
export interface IWorker<SOURCE_TYPE = any> {
    source: SOURCE_TYPE;
    sid: string;
    name: string;
    fullName: string;
    activityName: string;
    attributes: WorkerAttributes;
    dateUpdated: Date;
    isAvailable: boolean;
    activityDuration: string;
}
/**
 * Queue
 * @typedef IQueue
 * @property {Object} source source object backing the queue
 * @property {Date} dateUpdated date when queue was updated
 * @property {string} sid SID of queue
 * @property {string} name name of the queue
 * @property {string} workspaceSid workspace SID of the queue
 */
export interface IQueue<SOURCE_TYPE = any> {
    source: SOURCE_TYPE;
    dateUpdated: Date;
    sid: string;
    name: string;
    workspaceSid: string;
}
