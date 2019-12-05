import { Store, Reducer, StoreCreator, StoreEnhancer } from "redux";
import { History } from "history";
import { AppState } from "./state/AppState";
/**
 * @category Core / State
* @namespace Store
*/
/**
 * @typedef {Object} FlexState
 * @property {AppState} flex Flex application state
 */
export interface FlexState {
    readonly flex: AppState;
}
export interface StoreSettings {
    history: History;
}
export declare function getDefaultStore(): EnhancedStore<any>;
/**
 * @typedef {ReduxStore} EnhancedStore
 * @property {Function} [addReducer] - Function used to add reducer to an already created store.
 * @memberof Store
 */
export interface EnhancedStore<S = any> extends Store<S> {
    addReducer?: (name: string, _reducer: Reducer<any>) => void;
}
/**
 * Store enhancer which allows the user to add any additional reducers after the store has been created.
 * @returns {Store.EnhancedStore} It returns enhanced store with an additional `addReducer` method.
 * @category Core / State
 * @method flexStoreEnhancer
 * @memberof Store
 */
export declare const flexStoreEnhancer: (originalCreateStore: StoreCreator) => (originalReducer: Reducer<any>, initialState: any, enhancer: StoreEnhancer<any>) => EnhancedStore<any>;
export declare function createDefaultStore(settings: StoreSettings): EnhancedStore<any>;
