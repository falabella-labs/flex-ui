import { PropsWithTheme } from "../../theme";
import * as React from "react";
import { TaskContextProps } from "../../context/TaskContext";
export declare class HangupCallTaskButton extends React.Component<PropsWithTheme<TaskContextProps>> {
    onClick: (e: React.SyntheticEvent<any, Event>) => void;
    render(): JSX.Element;
}
