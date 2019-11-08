import { Config } from "../../state/AppConfig";
/**
 * Properties of RootContainer.
 * @typedef {Object} RootContainer.RootContainerChildrenProps
 * @property {string} [identity] - Identity of the current agent.
 * @property {SessionState.LoginState} [currentLoginState] - State of the login [UNKNOWN, LOGGING_IN, LOGGED_IN, LOGGED_OUT, ERROR].
 * @property {AppConfig.Config} config - Default configuration of flex.
 */
export interface RootContainerChildrenProps {
    identity?: string;
    currentLoginState?: string;
    config: Config;
}
