import { ITask } from "../models";
import { ConferenceParticipant } from "../state/ConferencesState";
/**
 * @package
 * @typedef WorkerActionPayload
 * @property {ITask} [task]
 * @property {string} [sid]
 * @memberof Actions
 */
export interface WorkerActionPayload {
    task?: ITask;
    sid?: string;
}
/**
 * @package
 * @typedef {Actions.WorkerActionPayload} TransferTaskPayload
 * @property {string} targetSid - sid of the worker or the queue to be transferred to
 * @property {any} [options] - transfer options (see Taskrouter docs for options)
 * @memberof Actions
 */
export interface TransferTaskPayload extends WorkerActionPayload {
    targetSid: string;
    options?: any;
}
/**
 * @package
 * @typedef {Actions.WorkerActionPayload} WorkerParticipantActionPayload
 * @property {string} [targetSid] - sid of the participant (either this or participant has to be provided)
 * @property {ConferenceParticipant} [participant] - participant object (either this or participant has to be provided)
 * @memberof Actions
 */
export interface WorkerParticipantActionPayload extends WorkerActionPayload {
    targetSid?: string;
    participant?: ConferenceParticipant;
}
/**
 * @package
 * @typedef WorkerSetActivityPayload
 * @property {boolean} [activityAvailable]
 * @property {string} [activityName]
 * @property {string} [activitySid]
 * @property {boolean} [options.rejectPendingReservations]
 * @memberof Actions
 */
export interface WorkerSetActivityPayload {
    activityAvailable?: boolean;
    activityName?: string;
    activitySid?: string;
    options?: {
        rejectPendingReservations?: boolean;
    };
}
/**
 * @package
 * @typedef WorkerSetWorkerActivityPayload
 * @param {string} [workerSid] - sid of the worker
 * @memberof WorkerActions
 */
export interface WorkerSetWorkerActivityPayload extends WorkerSetActivityPayload {
    workerSid?: string;
}
/**
 * @package
 * @typedef WorkerLogoutPayload
 * @property {boolean} [forceLogout] - supress an error in case offline activity cannot be set for the worker
 * @property {string} [activitySid] - sid of the custom offline activity
 * @memberof Actions
 */
export interface WorkerLogoutPayload {
    forceLogout?: boolean;
    activitySid?: string;
}
/**
 * @private
 */
export interface DeprecatedWorkerLogoutPayload extends WorkerLogoutPayload {
    activityName?: string;
}
/**
 * @package
 * @typedef WorkerAcceptTaskActionPayload
 * @property {any} conferenceOptions
 * @memberof Actions
 */
export interface WorkerAcceptTaskActionPayload extends WorkerActionPayload {
    conferenceOptions: any;
}
export interface ToggleDTMFDialpadPayload extends WorkerActionPayload {
    open?: boolean;
}
export interface DTMFDialpadDigitsPayload extends WorkerActionPayload {
    digits: string;
}
/**
 * @package
 * @interface Actions
 * @hideconstructor
 * @category Actions
 */
export declare class WorkerActions {
    static registerActions(): void;
    private static startOutboundCall;
    private static blockActionUntilReservationEvent;
    private static acceptTask;
    private static rejectTask;
    private static completeTask;
    private static wrapupTask;
    private static selectTask;
    private static setActivity;
    private static setWorkerActivity;
    private static transferTask;
    private static cancelTransfer;
    private static kickParticipant;
    private static holdParticipant;
    private static unholdParticipant;
    private static toggleDTMFDialpad;
    private static setDTMFDialpadDigits;
    private static updateWorkerActionPayload;
    private static updateWorkerParticipantActionPayload;
    private static updateAcceptTaskPayload;
    private static updateWorkerSetActivityPayload;
    private static updateWorkerSetWorkerActivityPayload;
    private static logout;
}
export declare const isValidTaskPayload: (task: ITask) => (payload: any) => boolean;
export declare const isValidWorkerActionPayload: (task: ITask) => (payload: any) => boolean;
export declare const isValidWorkerParticipantActionPayload: (task: ITask, targetSid: string) => (payload: WorkerParticipantActionPayload) => boolean;
