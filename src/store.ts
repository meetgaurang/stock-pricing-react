import { combineReducers, createStore } from 'redux';
//import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//import logs from './features/log/store/index';
import { logsInitialState, logsReducer } from './features/log/store/reducer';

export interface AppStoreState {
  logs: typeof logsInitialState;
}
export const initialState: AppStoreState = {
  logs: logsInitialState
};

export const rootReducer = combineReducers({
  logs: logsReducer
});
export const store = createStore(
  rootReducer,
  initialState as any
);