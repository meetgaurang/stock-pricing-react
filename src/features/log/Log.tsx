import { LogItem, LogItemData } from "./LogItem";

export function Log() {
    const logItems: LogItemData[] = [{
        time: "2018-01-01 09:00:00",
        stocks: [
            {
                stockName: 'APPLE',
                stockPrice: '$123.00'
            },
            {
                stockName: 'GOOGLE',
                stockPrice: '$85.00'
            }
        ]
    },
    {
        time: "2018-01-01 09:00:02",
        stocks: [
            {
                stockName: 'ORACLE',
                stockPrice: '$123.00'
            },
            {
                stockName: 'AMAZON',
                stockPrice: '$85.00'
            }
        ]
    }];

    return (
        <>
            <h2>Log</h2>
            {
                logItems.map((eachLogItem: LogItemData) => (
                    <LogItem time={eachLogItem.time} stocks={eachLogItem.stocks} />
                ))
            }
        </>
    );
}