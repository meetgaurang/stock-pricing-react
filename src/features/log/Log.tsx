import { LogItem, LogItemData } from "./LogItem";

export function Log() {
    const logItems: LogItemData[] = [{
        time: "2018-01-01 09:00:00",
        stocks: [
            {
                stockName: 'LOL',
                stockPrice: '$123.00'
            }
        ]
    },
    {
        time: "2018-01-01 09:00:02",
        stocks: [
            {
                stockName: 'ROFL',
                stockPrice: '$23.00'
            }
        ]
    }];

    return (
        <>
        {
            logItems.map((eachLogItem: LogItemData) => (
                <LogItem time={eachLogItem.time} stocks={eachLogItem.stocks} />
            ))
        }
        </>
    );
}