import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

const DatesAction = ({ onDelete, onShow }) => {
  return (
    <div>
        <Row className="justify-content-center my-2">
            <Col md={8}>
                <div className="d-flex justify-content-between">
                    <Button className="btn-style p-2" onClick={onDelete}>مسح الكل</Button>
                    <Button className="btn-style p-2" onClick={onShow}>عرض البيانات</Button>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default DatesAction;
