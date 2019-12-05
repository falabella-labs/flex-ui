import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { SkillByNameType, WorkerSkillsProps } from "./WorkerSkills";
declare enum NotificationTemplate {
    Error = "WorkerSkillsError",
    Saved = "WorkerSkillsSaved",
    Reverted = "WorkerSkillsReverted"
}
interface WorkerSkillsState {
    workerSid: string;
    skillsByName: SkillByNameType;
    skillsByNameOriginal: SkillByNameType;
    notificationTemplate?: NotificationTemplate;
}
export declare const displayName = "WorkerSkills";
export declare const contentStore: DynamicContentStore;
export declare class WorkerSkillsImpl extends React.PureComponent<WorkerSkillsProps, WorkerSkillsState> {
    state: WorkerSkillsState;
    static getDerivedStateFromProps(nextProps: WorkerSkillsProps, prevState: WorkerSkillsState): {
        workerSid: string;
        skillsByName: SkillByNameType;
        skillsByNameOriginal: SkillByNameType;
    };
    render(): JSX.Element;
    private getMergedAttributes;
    private handleSaveClick;
    private handleCancelClick;
    private static getSkillsFromWorker;
    private handleSkillUpdate;
    private handleSkillRemove;
}
export {};
