/// <reference types="react" />
import { TaskContextProps } from "../../context/TaskContext";
import { TaskCanvasChildrenProps } from "../TaskCanvas/TaskCanvas.definitions";
import { ITask } from "../../../models/CommonModels";
import { DynamicContentStore, CSSProps, ButtonThemeProps } from "@twilio/frame-ui";
/**
 * Properties of task canvas header theme.
 * @typedef TaskCanvasHeader.TaskCanvasHeaderThemeProps
 * @property {CSSProps} Container - Styles task canvas header container.
 * @property {Button.ButtonThemeProps} EndTaskButton - Styles end task button.
 * @property {Button.ButtonThemeProps} WrapupTaskButton - Styles wrap up task button.
 */
export interface TaskCanvasHeaderThemeProps {
    Container: CSSProps;
    EndTaskButton: ButtonThemeProps;
    WrapupTaskButton: ButtonThemeProps;
}
/**
 * Properties of Task Canvas Header.
 * @typedef {Partial<TaskCanvasChildrenProps>} TaskCanvasHeader.TaskCanvasHeaderProps
 * @property {React.ComponentType<{ task: ITask }>} [ActionsComponent] - Represents the actions component.
 * @property {DynamicContentStore} [content] - Represents dynamic content store.
 * @property {string | React.ReactNode} [icon] - Represents the icon.
 * @property {string} [titleTemplateCode] - Represents title template code.
 * @property {{}} [titleTemplateContext] - Represents context for title templete.
 * @property {string} [secondLineTemplateCode] - Represents second line template code.
 * @property {{}} [secondLineTemplateContext] - Represents context for second line templete.
 */
export interface TaskCanvasHeaderProps extends Partial<TaskCanvasChildrenProps> {
    ActionsComponent?: React.ComponentType<{
        task: ITask;
    }>;
    content: DynamicContentStore;
    icon?: string | React.ReactNode;
    titleTemplateCode?: string;
    titleTemplateContext?: any;
    secondLineTemplateCode?: string;
    secondLineTemplateContext?: any;
    titleTemplate: string;
    secondLineTemplate: string;
}
/**
 * Properties of children in task canvas header.
 * @typedef {TaskCanvasHeader.TaskCanvasHeaderProps} TaskCanvasHeader.TaskCanvasHeaderChildrenProps
 * @property {TaskCanvasHeader.TaskCanvasHeaderThemeProps} [theme.TaskCanvasHeader] - theme.
 * @property {DynamicContentStore} [content] - Represents dynamic content store.
 */
export interface TaskCanvasHeaderChildrenProps extends TaskCanvasHeaderProps, TaskContextProps {
}
