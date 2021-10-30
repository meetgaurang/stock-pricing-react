import { AddStocksAction, AddStocksActionType } from "./actions";
import { LogState, StockSummary } from "./types";

export const logsInitialState: LogState = {
    stockLogs: [],
    stockSummaries: []
};

export const logsReducer = (state = logsInitialState, action: AddStocksAction) => {
    switch (action.type) {
        case AddStocksActionType: {
            // Update stock logs
            const updatedLogs = [action.payload].concat(state.stockLogs);
            // Update stock summaries
            let updatedSummaries: StockSummary[] = [...state.stockSummaries];
            for(let i = 0; i < action.payload.stocks.length; i++) {
                const stockToBeAdded = action.payload.stocks[i];
                // Check if stock exists in existing summary list
                const indexFound = updatedSummaries.findIndex((existingSummary: StockSummary) => (
                    existingSummary.stockCode === stockToBeAdded.code
                ));
                if (indexFound === -1) {
                    updatedSummaries.push({
                        stockCode: stockToBeAdded.code,
                        highestPrice: stockToBeAdded.price,
                        lowestPrice: stockToBeAdded.price,
                        currentPrice: stockToBeAdded.price,
                        startingPrice: stockToBeAdded.price
                    } as StockSummary);
                } else {
                    const existingSummary = updatedSummaries[indexFound];
                    const newSummary: StockSummary = {
                        stockCode: stockToBeAdded.code,
                        startingPrice: existingSummary.startingPrice,
                        currentPrice: stockToBeAdded.price,
                        highestPrice: stockToBeAdded.price > existingSummary.highestPrice ? stockToBeAdded.price : existingSummary.highestPrice,
                        lowestPrice: stockToBeAdded.price < existingSummary.lowestPrice ? stockToBeAdded.price : existingSummary.lowestPrice
                    };
                    updatedSummaries = [
                        ...updatedSummaries.slice(0, indexFound),
                        newSummary,
                        ...updatedSummaries.slice(indexFound + 1)
                    ];
                }
            }
            return {
                stockLogs: updatedLogs,
                stockSummaries: updatedSummaries
            } as LogState;
        }
        default:
            return state;
    }
}

