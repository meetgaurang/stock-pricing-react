import { AddStocksAction, AddStocksActionType } from "./actions";
import { DateWiseStocks, LogState } from "./types";

export const logsInitialState: DateWiseStocks[] = [];

export const logsReducer = (state = logsInitialState, action: AddStocksAction) => {
    switch (action.type) {
        case AddStocksActionType: {
            return state.concat(action.payload);
        }
        default: // need this for default case
            return state;
    }
}

