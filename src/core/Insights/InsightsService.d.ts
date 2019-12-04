import IdentityClient from "@twilio/flex-insights-identity-client-js";
import { SDK as GoodDataSDK } from "@gooddata/gooddata-js";
export declare class InsightsService {
    static instance: InsightsService;
    private manager;
    private axios;
    identityClient: IdentityClient;
    sdk: GoodDataSDK;
    constructor();
    static init(): Promise<void>;
    static getInstance(): InsightsService;
    private onLoggedInChanged;
    private initializeClient;
    private loginFlex;
    loginGoodData(): Promise<void>;
}
