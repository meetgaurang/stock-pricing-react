import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { DateWiseStocks, StockType } from '../store/types';

export function LogItem(logItem: DateWiseStocks) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <span style={{fontWeight: 600}}>Updates for {logItem.date}</span>
                    </ListGroup.Item>
                    {logItem.stocks && logItem.stocks.map((eachStock: StockType) => {
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