import { AddStocksAction, AddStocksActionType } from "./actions";
import { DateWiseStocks } from "./types";

export const logsInitialState: DateWiseStocks[] = [];

export const logsReducer = (state = logsInitialState, action: AddStocksAction) => {
    switch (action.type) {
        case AddStocksActionType: {
            return [action.payload].concat(state);
        }
        default:
            return state;
    }
}

