import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Container, Col, Row, Alert } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";

const Dates = () => {
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

        return (

            <Container>
                <h2>Date Picker</h2>
                <Row>
                    <Col>
                        <DatePicker selected={startDate1} onChange={date => setStartDate1(date)} />
                    </Col>
                    <Col>
                        <DatePicker selected={startDate2} onChange={date => setStartDate2(date)} />
                    </Col>
                </Row>
                <Alert>Difference in days: { startDate1 > startDate2 ?
                                                Math.round((startDate1 - startDate2) / (60 * 60 * 24 * 1000)) : 
                                                Math.round((startDate2 - startDate1) / (60 * 60 * 24 * 1000))
                                            }
                </Alert>
            </Container>
        );
}

export default Dates;