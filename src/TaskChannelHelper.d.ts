import * as React from "react";
import { ITask } from "./models";
import { TaskStatusBasedType } from "./TaskChannelDefinition";
/**
 * @classdesc Helper for task channel definitions
 * @category Framework
 */
export declare class TaskChannelHelper {
    /**
     * Gets template code from task status based template holder
     *
     * @static
     * @param {ITask} task task
     * @param {TaskChannelDefinition.TaskStatusBasedType<string>} templateHolder task status based template
     * @param {React.ComponentType} componentType component that is calling the method
     * @returns {string} template code
     * @throws {Error} if templateHolder argument is not provided
     */
    static getTemplateForStatus(task: ITask, templateHolder: TaskStatusBasedType<string>, componentType: React.ComponentType): string;
    /**
     * Gets icon from task status based icon holder
     *
     * @static
     * @param {ITask} task task
     * @param {(TaskChannelDefinition.TaskStatusBasedType<string | React.ReactNode>)} iconHolder task status based icon
     * @param {React.ComponentType} componentType component that is calling the method
     * @returns {(string | React.ReactNode)} icon code as string or ReactNode to be rendered as icon
     * @throws {Error} if iconHolder argument is not provided
     */
    static getIcon(task: ITask, iconHolder: TaskStatusBasedType<string | React.ReactNode>, componentType: React.ComponentType): string | React.ReactNode;
    /**
     * Gets color from task status based color holder
     *
     * @static
     * @param {ITask} task task
     * @param {TaskChannelDefinition.TaskStatusBasedType<string>} colorHolder task status based template
     * @param {React.ComponentType} componentType component that is calling the method
     * @returns {string} color code
     * @throws {Error} if colorHolder argument is not provided
     */
    static getColor(task: ITask, colorHolder: TaskStatusBasedType<string>, componentType: React.ComponentType): string;
}
