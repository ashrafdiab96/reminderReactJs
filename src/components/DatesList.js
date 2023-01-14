import React from 'react'
import { Col, Row } from 'react-bootstrap';

const DatesList = ({ dates }) => {
  return (
    <div>
        <Row className="justify-content-center">
            <Col md={8}>
                <div className="rectangle p-2">
                    {dates.length ? (dates.map((date) => {
                        return (
                            <div className="d-flex border-bottom mx-3 my-2" key={date.id}>
                                <img className="img-avatar" src="/img/avatar.png" alt="user" />
                                <div className="px-3">
                                    <p className="d-inline fs-5">{date.name}</p>
                                    <p className="fs-6">{date.date  }</p>
                                </div>
                            </div>
                        );
                    })) : <h2 className="p-5 text-center">لايوجد مواعيد اليوم</h2>}

                </div>
            </Col>
        </Row>
    </div>
  )
}

export default DatesList;
