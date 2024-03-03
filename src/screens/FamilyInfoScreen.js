import React, {useEffect, useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientData, getPatientFamilyData } from '../actions/patientActions';
import PatientCard from '../components/PatientCard';
import Loader from '../components/Loader';
import Message from '../components/Message';


function FamilyInfoScreen({match, history}) {

    const dispatch = useDispatch();


    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    const patientFamily = useSelector(state => state.patientFamily)
    const {error:errorPatientFamily, loading:loadingPatientFamily, family} = patientFamily

    useEffect(() => {
        if(!userInfo){
            history.push("/login")
        }
        dispatch(getPatientFamilyData(match.params.email));
    }, [dispatch, userInfo, history, match]);

   return (
       <>
       {
           loadingPatientFamily ? <Loader/> 
           : errorPatientFamily ? <Message variant="danger">{errorPatientFamily}</Message>
           : (
               <>
               <h1>Parent Information</h1>
               <Row>
                   {family.data && <Col><PatientCard patient={family.data.mother}/></Col>}
                   {family.data && <Col><PatientCard patient={family.data.father}/></Col>}
               </Row>
               {!family.data && <Message variant="danger">Parents Information is not available</Message>}

               <h1>Sibling Information</h1>
               <Row>
                   { family.data &&
                       family.data.sibling.map( s => (
                           <>
                            <Col md={4} lg={4} sm={12}><PatientCard patient={s}/></Col>
                           </>
                       ))
                   }
               </Row>
               {/* {!family.data && <Message variant="danger">Sibling Information is not available</Message>} */}
               </>
           )
       }
       </>
   )
}

export default FamilyInfoScreen;