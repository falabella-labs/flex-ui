/// <reference types="react" />
import { TaskChannelDefinition, TaskChannelApplicableCb } from "../TaskChannelDefinition";
export declare const Chat: TaskChannelDefinition;
export declare const ChatMessenger: TaskChannelDefinition;
export declare const ChatLine: TaskChannelDefinition;
export declare const ChatWhatsApp: TaskChannelDefinition;
export declare const ChatSms: TaskChannelDefinition;
export declare function createChatTaskChannel(name: string, isApplicable: TaskChannelApplicableCb, icon?: string | React.ReactNode, iconActive?: string | React.ReactNode, color?: string, reservedTemplate?: string, charLimit?: number, // 32kB
taskHeaderAcceptedTemplate?: string, taskLineChatAssignedTemplate?: string, notificationTitleTemplate?: string, browserNotificationTitleTemplate?: string, browserNotificationBodyTemplate?: string): TaskChannelDefinition;
