import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export type StockDataType = {
    code: string;
    price: string;
}
export type LogItemDataType = {
    time: string;
    stocks: StockDataType[]
}
export function LogItem(logItem: LogItemDataType) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <span style={{fontWeight: 600}}>Updates for {logItem.time}</span>
                    </ListGroup.Item>
                    {logItem.stocks && logItem.stocks.map((eachStock: StockDataType) => {
                        return (
                            <ListGroup.Item key={eachStock.code}>
                                {eachStock.code}: {eachStock.price}
                            </ListGroup.Item>
                        );    
                    })}
                </ListGroup>
            </Card>
        </>
    );
}