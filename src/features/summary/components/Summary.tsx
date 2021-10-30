import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { AppStoreState } from "../../../store";
import { StockSummary } from "../../log/store/types";

export interface SummaryProps {
    stockSummaries: StockSummary[]; 
}

export function Summary(props: SummaryProps) {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Summary</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Stock</th>
                                <th>Starting</th>
                                <th>Lowest</th>
                                <th>Highest</th>
                                <th>Current</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.stockSummaries && props.stockSummaries.map((summary: StockSummary) => (
                                    <tr>
                                        <td>{summary.stockCode}</td>
                                        <td>{summary.startingPrice}</td>
                                        <td>{summary.lowestPrice}</td>
                                        <td>{summary.highestPrice}</td>
                                        <td>{summary.currentPrice}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = (state: AppStoreState) => {
    return {
        stockSummaries: state.logs.stockSummaries
    };
};

export default connect(mapStateToProps)(Summary);
