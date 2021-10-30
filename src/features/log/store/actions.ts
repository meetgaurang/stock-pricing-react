import { DateWiseStocks } from "./types";

export interface AddStocksAction {
    type: string;
    payload: DateWiseStocks[];
}

export const AddStocksActionType = 'add-stocks';

export function addStocksActionCreator(payload: DateWiseStocks[]): AddStocksAction {
    return {
        type: AddStocksActionType,
        payload
    }
}