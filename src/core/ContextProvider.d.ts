import * as React from "react";
import { Manager } from "./Manager";
/**
 * Flex context interface
 * @typedef {Object} FlexContextType
 * @property {Manager} manager - an instance of Flex Manager class
 * @property {boolean} [legacy] - force compatibility mode in case of differing react-redux versions
 * @memberof ContextProvider
 */
export interface FlexContextType {
    manager: Manager;
    legacy?: boolean;
}
/**
 * Context Provider props interface
 * @typedef {ContextProvider.FlexContextType} ContextProviderProps
 * @memberof ContextProvider
 */
export interface ContextProviderProps extends FlexContextType {
}
/**
 * Flex Context
 *
 * @class FlexContext
 * @param {ContextProvider.FlexContextType} props - props
 * @category Framework
 * @component
 * @private
 */
export declare const FlexContext: React.Context<FlexContextType>;
/**
 * @classdesc Flex Context Provider component
 * @hideconstructor
 * @param {ContextProvider.ContextProviderProps} props properties to be passed to configure this component.
 * @category Framework / Context
 * @example
 * import { ContextProvider, RootContainer, Manager } from "@twilio/flex-ui";
 * Manager.create(configuration).then(manager => {
 *   ReactDOM.render(
 *     <ContextProvider manager={manager}>
 *       <RootContainer />
 *     </ContextProvider>,
 *     document.getElementById("container")
 *   );
 * });
 */
export declare class ContextProvider extends React.PureComponent<ContextProviderProps> {
    componentWillMount(): void;
    render(): JSX.Element;
}
