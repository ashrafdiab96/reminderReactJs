import React from 'react'
import { Col, Row } from 'react-bootstrap';

const DatesCount = ({ count }) => {
  return (
    <div>
        <Row className="justify-content-center my-2">
            <Col md={8}>
                لديك {count} مواعيد اليوم
            </Col>
        </Row>
    </div>
  )
}

export default DatesCount;
