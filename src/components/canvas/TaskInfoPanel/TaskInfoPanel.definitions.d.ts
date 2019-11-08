import { CSSProps, DynamicContentStore } from "@twilio/frame-ui";
import { TaskCanvasChildrenProps } from "../TaskCanvas/TaskCanvas.definitions";
import { ThemeProps } from "../../theme";
/**
 * Properties of taks info panel theme
 * @typedef TaskInfoPanel.TaskInfoPanelThemeProps
 * @property {CSSProps} Container - Styles task info panel container.
 */
export interface TaskInfoPanelThemeProps {
    Container: CSSProps;
}
/**
 * Properties of Task info panel.
 * @typedef {Partial<TaskCanvasChildrenProps>} TaskInfoPanel.TaskInfoPanelProps
 * @property {DynamicContentStore<TaskInfoPanel.TaskInfoPanelChildrenProps>} [content] - Represents dynamic content store.
 * @property {string} [templateCode] - Represents template code.
 * @extends Partial<TaskCanvasChildrenProps>, ThemeProps
 */
export interface TaskInfoPanelProps extends Partial<TaskCanvasChildrenProps>, ThemeProps {
    content: DynamicContentStore;
    templateCode?: string;
}
/**
 * Properties of children of task info panel.
 * @typedef {TaskInfoPanel.TaskInfoPanelProps} TaskInfoPanel.TaskInfoPanelChildrenProps
 * @property {DynamicContentStore<TaskInfoPanel.TaskInfoPanelChildrenProps>} [content] - Represents dynamic content store.
 */
export interface TaskInfoPanelChildrenProps extends TaskInfoPanelProps {
    content: DynamicContentStore;
}
