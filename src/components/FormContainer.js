import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function FormContainer({children}) {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={12} md={10}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
