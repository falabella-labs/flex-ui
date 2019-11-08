import { PropsWithTheme } from "../../theme";
import * as React from "react";
import { TaskContextProps } from "../../context/TaskContext";
export declare class RejectTaskButton extends React.PureComponent<PropsWithTheme<TaskContextProps>> {
    onClick: (e: React.SyntheticEvent<any, Event>) => void;
    render(): JSX.Element;
}
