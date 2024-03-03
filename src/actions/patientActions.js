import { 
    PATIENT_DATA_REQUEST,
    PATIENT_DATA_SUCCESS,
    PATIENT_DATA_FAIL,
    PATIENT_DATA_RESET,

    PATIENT_FAMILY_REQUEST,
    PATIENT_FAMILY_SUCCESS,
    PATIENT_FAMILY_RESET,
    PATIENT_FAMILY_FAIL,
    
    PATIENT_RECORD_REQUEST,
    PATIENT_RECORD_RESET,
    PATIENT_RECORD_SUCCESS,
    PATIENT_RECORD_FAIL

 } from '../constants/constants';

 import axios from 'axios'


 export const getPatientData = (email) => async (dispatch, getState) => {

    try {
        dispatch({type:PATIENT_DATA_REQUEST});

        const {
            userLogin: {userInfo},
        } = getState()

        console.log(userInfo)
        const config = {
            headers:{
            'Content-type':"application/json",
            'x-auth-token' : `${userInfo.data.token}`,
            }
        }
        const {data} = await axios.get(`/api/doctor/${email}`, 
                        config 
                    )
        console.log(data)

        dispatch({type:PATIENT_DATA_SUCCESS, payload:data})

    } catch (error) {
        console.log(error.response)
        dispatch({
            type: PATIENT_DATA_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }

}

export const getPatientFamilyData = (email) => async (dispatch, getState) => {

    try {
        dispatch({type:PATIENT_FAMILY_REQUEST});

        const {
            userLogin: {userInfo},
        } = getState()

        console.log(userInfo)
        const config = {
            headers:{
            'Content-type':"application/json",
            'x-auth-token' : `${userInfo.data.token}`,
            }
        }
        const {data} = await axios.get(`/api/doctor/family/${email}`, 
                        config 
                    )
        console.log(data)

        dispatch({type:PATIENT_FAMILY_SUCCESS, payload:data})

    } catch (error) {
        console.log(error.response)
        dispatch({
            type: PATIENT_FAMILY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }

}

export const getPatientRecordData = (email) => async (dispatch, getState) => {

    try {
        dispatch({type:PATIENT_RECORD_REQUEST});

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers:{
            'Content-type':"application/json",
            'x-auth-token' : `${userInfo.data.token}`,
            }
        }
        const {data} = await axios.get(`/api/doctor/records/${email}`, 
                        config 
                    )

        dispatch({type:PATIENT_RECORD_SUCCESS, payload:data})

    } catch (error) {
        console.log(error.response)
        dispatch({
            type: PATIENT_RECORD_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }

}