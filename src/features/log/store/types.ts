export interface StockType {
    code: string;
    price: number;
}
export interface DateWiseStocks {
    date: string;
    stocks: StockType[];
}
export interface StockSummary {
    stockCode: string;
    startingPrice: number;
    lowestPrice: number;
    highestPrice: number;
    currentPrice: number;
}
export interface LogState {
    stockLogs: DateWiseStocks[];
    stockSummaries: StockSummary[];
}
