import { ITask } from "./models";
/**
 * @enum {"AddToChatChannel" | "DeactivateChatChannel" | "LeaveChatChannel"} ChatOrchestration
 * @property {"AddToChatChannel"} AddToChatChannel
 * @property {"DeactivateChatChannel"} DeactivateChatChannel
 * @property {"LeaveChatChannel"} LeaveChatChannel
 * @memberof ChatOrchestrator
 */
export declare enum ChatOrchestration {
    AddToChatChannel = "AddToChatChannel",
    DeactivateChatChannel = "DeactivateChatChannel",
    LeaveChatChannel = "LeaveChatChannel"
}
/**
 * Callback that returns an array of orchestrations based on a task
 * @callback ChatOrchestrator.ChatOrchestrationsCallback
 * @param {ITask} task task
 * @returns {Array<ChatOrchestrator.ChatOrchestration>}
 */
export declare type ChatOrchestrationsCallback = (task: ITask) => Array<ChatOrchestration>;
/**
 * @typedef ChatOrchestrationsEvents
 * @property {Set<ChatOrchestrator.ChatOrchestration> | ChatOrchestrator.ChatOrchestrationsCallback} accepted orchestrations for reservation accepted events
 * @property {Set<ChatOrchestrator.ChatOrchestration> | ChatOrchestrator.ChatOrchestrationsCallback} wrapup orchestrations for reservation wrapup events
 * @property {Set<ChatOrchestrator.ChatOrchestration> | ChatOrchestrator.ChatOrchestrationsCallback} completed orchestrations for reservation completed events
 * @memberof ChatOrchestrator
 */
export interface ChatOrchestrationsEvents {
    accepted: Set<ChatOrchestration> | ChatOrchestrationsCallback;
    wrapup: Set<ChatOrchestration> | ChatOrchestrationsCallback;
    completed: Set<ChatOrchestration> | ChatOrchestrationsCallback;
    [k: string]: Set<ChatOrchestration> | ChatOrchestrationsCallback;
}
/**
 * Chat orchestration manager. Use to disable Flex UI chat orchestrations.
 * @class ChatOrchestrator
 * @hideconstructor
 * @category Framework
 */
export declare class ChatOrchestrationManager {
    private readonly events;
    private readonly mapEventToFunc;
    /**
     * Get orchestrations or orchestrations callback for a reservation event
     * @method getOrchestrations
     * @param {"accepted" | "wrapup" | "completed"} event to get orchestrations for
     * @returns {Array<ChatOrchestrator.ChatOrchestration> | ChatOrchestrator.ChatOrchestrationsCallback}
     * @memberof ChatOrchestrator
     * @example
     * import { ChatOrchestrator } from "@twilio/flex-ui";
     * ChatOrchestrator.getOrchestrations("accepted");
     */
    getOrchestrations(event: keyof ChatOrchestrationsEvents): Array<ChatOrchestration> | ChatOrchestrationsCallback;
    /**
     * Set orchestrations for a reservation event
     * @method setOrchestrations
     * @param {"accepted" | "wrapup" | "completed"} event to get orchestrations for
     * @param {Array<ChatOrchestrator.ChatOrchestration> | ChatOrchestrator.ChatOrchestrationsCallback } orchestrations to set for
     * @memberof ChatOrchestrator
     * @example
     * import { ChatOrchestrator } from "@twilio/flex-ui";
     * const orchestrationsCallback = (task) => {
     *   if (task.sid === "WT12345") {
     *      return [];
     *   }
     * };
     * ChatOrchestrator.setOrchestrations("accepted", orchestrationsCallback);
     */
    setOrchestrations(event: keyof ChatOrchestrationsEvents, orchestrations: Array<ChatOrchestration> | ChatOrchestrationsCallback): void;
    /**
     * Clears / disables all orchestrations for chat
     * @method clearAllOrchestrations
     * @memberof ChatOrchestrator
     * @example
     * import { ChatOrchestrator } from "@twilio/flex-ui";
     * ChatOrchestrator.clearAllOrchestrations();
     */
    clearAllOrchestrations(): void;
    /**
     * Orchestrates Task wrapup action
     * @method orchestrateWrapupTask
     * @param {ITask} task task to orchestrate
     * @returns {Promise<boolean>} promise with boolean indicating if orchestration happened
     * @memberof ChatOrchestrator
     * @example
     * import { ChatOrchestrator } from "@twilio/flex-ui";
     * ChatOrchestrator.orchestrateWrapupTask(taskObject);
     */
    orchestrateWrapupTask(task: ITask): Promise<boolean>;
    /**
     * Orchestrates Task complete action
     * @method orchestrateCompleteTask
     * @param {ITask} task task to orchestrate
     * @returns {Promise<boolean>} promise with boolean indicating if orchestration happened
     * @memberof ChatOrchestrator
     * @example
     * import { ChatOrchestrator } from "@twilio/flex-ui";
     * ChatOrchestrator.orchestrateCompleteTask(taskObject);
     */
    orchestrateCompleteTask(task: ITask): Promise<boolean>;
    /**
     * @private
     */
    handleReservationEvent(event: keyof ChatOrchestrationsEvents, task: ITask): Promise<boolean>;
    private addWorkerToChatChannelInternal;
    private deactivateChatChannelInternal;
    private leaveAgentFromChatInternal;
    private isChatOrchestrationsCallbackType;
    private getOrchestrationsSet;
    private validateOrchestrations;
}
/**
 * Singleton instance of ChatOrchestrator
 * @type {ChatOrchestrator}
 * @category Framework
 * @private
 */
export declare const ChatOrchestrator: ChatOrchestrationManager;
