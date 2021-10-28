import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <span style={{fontWeight: 600}}>Updates for {logItem.time}</span>
                    </ListGroup.Item>
                    {logItem.stocks.map((eachStock: StockData) => {
                        return (
                            <ListGroup.Item>
                                {eachStock.stockName}: {eachStock.stockPrice}
                            </ListGroup.Item>
                        );    
                    })}
                </ListGroup>
            </Card>
        </>
    );
}