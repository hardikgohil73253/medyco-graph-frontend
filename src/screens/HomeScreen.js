import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientData } from '../actions/patientActions';
import PatientCard from '../components/PatientCard';

function HomeScreen({history}) {
    const [email, setemail] = useState('')

    const dispatch = useDispatch();


    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    const patientData = useSelector(state => state.patientData)
    const {errorPatient, loadingPatient, patient} = patientData

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(getPatientData(email))
    }

    useEffect(() => {
        if(!userInfo){
            history.push("/login")
        }
    }, [dispatch, userInfo, history, patient])

    return (
        <>
        <FormContainer>
            <h1>
                Enter Patient Email Address
            </h1>

            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder="Enter patient's email"
                        value={email}
                        onChange={(e)=> setemail(e.target.value)}
                    />
                </Form.Group>

                <Button type='submit' variant='primary' className="mt-3">Search</Button>
            </Form>
        </FormContainer>

        { patient.data && <div className="mt-6">
            <Row>
                <Col/>
                <Col sm={9} md={6} lg={6}><PatientCard  patient={patient.data}/></Col>
                <Col/>
            </Row>
        </div> }
        </>
    )
}

export default HomeScreen;