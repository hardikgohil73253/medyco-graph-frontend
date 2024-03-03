import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';

function PatientCard({patient}) {

    return (
        <Card className="my-3 p-3" style={{"border": "none"}}>

            <ListGroup>
            <Card.Body>

                <ListGroup.Item>
                <Link to={`/records/${patient.email}`}>
                    <Card.Title as="div">
                        <strong>{patient.user.first_name} {patient.user.last_name}</strong>
                    </Card.Title>
                </Link>
                </ListGroup.Item>

                { patient.patientMedical && (
                <>
                <ListGroup.Item>
                <Card.Text as="div">
                    <div className="my-3">
                       Diabetes: {patient.patientMedical.hasDiabetes ? <Icon.Check color="lightgreen" size={30}/> :<Icon.X size={30} color="red"/>}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                       Heart Disease: {patient.patientMedical.hasHeartDisease ? <Icon.Check color="lightgreen" size={30}/> :<Icon.X size={30} color="red"/>}
                    </div>
                </Card.Text>


                <Card.Text as="div">
                    <div className="my-3">
                       Blood Pressure Problem: {patient.patientMedical.hasBloodPressureProblem ? <Icon.Check color="lightgreen" size={30}/> :<Icon.X size={30} color="red"/>}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                        Arthritis: {patient.patientMedical.hasArthritis ? <Icon.Check color="lightgreen" size={30}/> :<Icon.X size={30} color="red"/>}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                        Arthritis: {patient.patientMedical.hasArthritis ? <Icon.Check color="lightgreen" size={30}/> :<Icon.X size={30} color="red"/>}
                    </div>
                </Card.Text>
                </ListGroup.Item>

                <ListGroup.Item>
                <Card.Text as="div">
                    <div className="my-3">
                        Height: {patient.patientMedical.height} ft
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                        Weight: {patient.patientMedical.weight} kg
                    </div>
                </Card.Text>
                </ListGroup.Item>
                </>)}

                <ListGroup.Item>
                    <Link to={`/records/${patient.user.email}`}>
                        Check Records
                    </Link>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Link to={`/family/${patient.user.email}`}>
                        Check Family Information
                    </Link>
                </ListGroup.Item>
        
            </Card.Body>
            </ListGroup>
        </Card>
    )
}

export default PatientCard
