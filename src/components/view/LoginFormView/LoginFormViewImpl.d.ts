import { ThemeProps } from "../../theme";
import * as React from "react";
import { Config } from "../../../state";
import { BrowserError, ValidationError } from "../../../core/Errors";
import * as ConfigHelper from "../../../ConfigHelper";
import { LoginFormViewProps } from "./LoginFormView";
declare enum LoginFormStage {
    Initial = "Initial",
    RuntimeLoginInput = "RuntimeLoginInput",
    AccountSidLoading = "AccountSidLoading",
    PublicConfigLoading = "PublicConfigLoading",
    LoggingIn = "LoggingIn",
    LoginForm = "LoginForm",
    Final = "Final"
}
interface LoginFormViewState {
    runtimeDomain: string;
    smState: LoginFormStage;
    error?: ValidationError | BrowserError;
    determinedConfig?: Config;
    publicConfig: ConfigHelper.PublicConfiguration;
    containerWidth?: number;
}
export declare class LoginFormViewImpl extends React.PureComponent<LoginFormViewProps & ThemeProps, LoginFormViewState> {
    private sm;
    private _containerRef;
    private static useAdminLogin;
    constructor(props: LoginFormViewProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private handleAdminLoginClick;
    private handleWindowResize;
    private setContainerRef;
    private setSizeFromContainer;
    private getMergedConfig;
    private getAdminLoginConfigOverride;
    private setDomain;
    private handleFatalError;
    private handleSubmit;
    private tryLogin;
    private getErrorMessageTemplate;
    private getDetailedErrorMessageTemplate;
    private getLoginButtonTemplate;
    /**
     * Checks if the error exists and it admits the main action button.
     *
     * Some errors don't allow the user to "continue anyway", so we hide it completely instead of just disabling it.
     *
     * @private
     * @return boolean
     */
    private doesErrorAllowButton;
    private isLoginButtonDisabled;
    private getMessageTemplate;
    private isRuntimeDomainInputState;
    private isLoadingState;
    private isErrorState;
    private getRuntimeConfig;
    private transitionToInit;
    private transitionToFetchingAccountSid;
    private transitionToFetchingPublicConfig;
    private transitionToFinal;
    private transitionToLoggingIn;
}
export {};
