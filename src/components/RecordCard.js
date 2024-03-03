import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';

function RecordCard({record}) {

    return (
        <Card className="my-3 p-3" style={{"border": "none"}}>

            <ListGroup>
            <Card.Body>
                <ListGroup.Item>
                    <Card.Title as="div">
                        <h3><strong>{record.title} </strong></h3>
                        <p>{record.notes} </p>
                        <p>{record.Date.substring(0,10)}</p>
                    </Card.Title>
                </ListGroup.Item>

                <ListGroup.Item>
                <Card.Text as="div">
                    <div className="my-3">
                       Hemoglobin: {record.hemoglobin}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                    Sugar Level: {record.sugarLevel}
                    </div>
                </Card.Text>


                <Card.Text as="div">
                    <div className="my-3">
                       Low Blood Pressure: {record.lBloodPressure}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                       High Blood Pressure: {record.hBloodPressure}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                       Red Blood Count: {record.rbcCount}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                       White Blood Count: {record.wbcCount}
                    </div>
                </Card.Text>
                </ListGroup.Item>
            </Card.Body>
            </ListGroup>
        </Card>
    )
}

export default RecordCard
