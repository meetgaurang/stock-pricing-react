export interface StockType {
    code: string;
    price: number;
}
export interface DateWiseStocks {
    date: string;
    stocks: StockType[];
}
export interface LogState {
    logs: DateWiseStocks[];
}