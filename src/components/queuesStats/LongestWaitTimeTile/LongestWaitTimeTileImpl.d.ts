import * as React from "react";
export interface LongestWaitTimeTileStateProps {
    waitFrom: string | null;
    queueName: string;
}
export declare class LongestWaitTimeTileImpl extends React.PureComponent<LongestWaitTimeTileStateProps> {
    render(): JSX.Element;
}
