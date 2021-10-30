import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { LogItem, StockDataType } from "./LogItem";
import { AppStoreState } from "../../store";
import { addStocksActionCreator } from "./store/actions";
import { DateWiseStocks } from "./store/types";

export type LogAPIResponseType = StockDataType[];

export function Log(props: any) {
    const [logItem, setLogItem] = useState<LogAPIResponseType>([]);
    const [pause, setPause] = useState<boolean>(false);
    const [isAPIError, setIsAPIError] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) {
                fetch("https://join.reckon.com/stock-pricing")
                    .then(response => response.json())
                    .then((response: LogAPIResponseType) => {
                        setLogItem(response);
                        props.addLogs({
                            date: getCurrentTime(),
                            stocks: response
                        });
                    })
                    .catch(error => {
                        setIsAPIError(true);
                    });
            }
        }, 2000);
        
        return () => {
            clearInterval(interval);
        };
    }, [setLogItem, pause]);

    const getCurrentTime = useCallback(() => {
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date+' '+time;
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Log</h2>
                </Col>
                <Col>
                    <Button variant="primary" onClick={() => setPause(!pause)}> 
                        { pause ? 'Resume' : 'Pause' }
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        // logItem.map((eachLogItem: LogItemDataType) => (
                        //     <LogItem time={eachLogItem.time} stocks={eachLogItem.stocks} />
                        // ))
                        <LogItem time={getCurrentTime()} stocks={logItem} />
                    }
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = (state: AppStoreState) => {
    return {
        logs: state.logs
    };
};

const mapDispatchProps = (dispatch: any) => {
    return {
        addLogs: (logs: DateWiseStocks[]) => dispatch(addStocksActionCreator(logs))
    };
}

export default connect(mapStateToProps, mapDispatchProps)(Log);
