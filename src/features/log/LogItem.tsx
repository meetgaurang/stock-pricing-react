import React from 'react';

export type StockData = {
    stockName: string;
    stockPrice: string;
}
export type LogItemData = {
    time: string;
    stocks: StockData[]
}
export function LogItem(logItem: LogItemData) {
    return (
        <>
            <div>Updates for {logItem.time}</div>
            {logItem.stocks.map((eachStock: StockData) => {
                return (
                    <>
                        <div>{eachStock.stockName}</div>
                        <div>{eachStock.stockPrice}</div>
                    </>
                );    
            })}
        </>
    );
}