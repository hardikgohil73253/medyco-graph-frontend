import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientRecordData } from '../actions/patientActions';
import PatientCard from '../components/PatientCard';
import Loader from '../components/Loader';
import Message from '../components/Message';
import RecordCard from '../components/RecordCard';


function RecordScreen({match, history}) {

    const dispatch = useDispatch();


    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    const patientRecord = useSelector(state => state.patientRecord)
    const {error:errorPatientRecord, loading:loadingPatientRecord, records} = patientRecord

    useEffect(() => {
        if(!userInfo){
            history.push("/login")
        }
        dispatch(getPatientRecordData(match.params.email));
    }, [dispatch, userInfo, history, match]);

   return (
       <>
       {
           loadingPatientRecord ? <Loader/> 
           : errorPatientRecord ? <Message variant="danger">{errorPatientRecord}</Message>
           : (
                <>
                    <Row>
                    {records.data &&
                        records.data.map(r => (
                            <>
                                <Col md={4} lg={4} sm={12}><RecordCard record={r}/></Col>
                            </>
                        ))
                    }
                    </Row>
                </>
           )
       }
       </>
   )
}

export default RecordScreen;