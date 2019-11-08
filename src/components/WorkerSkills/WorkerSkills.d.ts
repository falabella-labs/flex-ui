import * as React from "react";
import { IWorker } from "../../models";
import { SkillDefinition } from "../../state";
import { ThemeProps } from "../theme";
export interface Skill extends SkillDefinition {
    disabled?: boolean;
    level?: number;
}
/**
 * Properties of WorkerSkills.
 * @typedef WorkerSkills.WorkerSkillsProps
 * @property {ThemeProps} [theme.WorkerSkills] - theme
 * @property {IWorker} worker - Worker
 * @property {Array<AppConfig.SkillDefinition>} [availableSkills] - Available skills
 * @property {Function} [onClose] - Function executed when skill is closed
 * @property {DynamicComponentChildren<WorkerSkills.WorkerSkillsChildrenProps>} [children] - children
 */
export interface WorkerSkillsProps extends ThemeProps {
    worker: IWorker;
    availableSkills?: Array<SkillDefinition>;
    onClose?: Function;
}
/**
 * Properties of WorkerSkills.
 * @typedef {WorkerSkills.WorkerSkillsProps} WorkerSkills.WorkerSkillsChildrenProps
 */
export interface WorkerSkillsChildrenProps extends WorkerSkillsProps {
}
export declare type SkillByNameType = {
    [name: string]: Skill;
};
/**
 * @classdesc This is a container for WorkerSkills that displays the skills section for the agent details.
 * Can be themed with [theme.WorkerSkills]
 * @component
 * @hideconstructor
 * @param {WorkerSkills.WorkerSkillsProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class WorkerSkills extends React.PureComponent<WorkerSkillsProps> {
    static readonly displayName = "WorkerSkills";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<WorkerSkills.WorkerSkillsChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {WorkerSkills.WorkerSkillsProps}
     * @readonly
     */
    static readonly defaultProps: {};
    render(): JSX.Element;
}
