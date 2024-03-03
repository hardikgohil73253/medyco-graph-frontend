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
    PATIENT_RECORD_SUCCESS,
    PATIENT_RECORD_FAIL,
    PATIENT_RECORD_RESET,

 } from '../constants/constants';

 export const patitentReducer = (state={patient:{}}, action) => {
    switch(action.type)
    {
        case PATIENT_DATA_REQUEST:
            return {...state,loading:true,}

        case PATIENT_DATA_SUCCESS:
            return {loading:false, patient:action.payload}
    
        case PATIENT_DATA_FAIL:
            return {loading:false, error:action.payload}

        case PATIENT_DATA_RESET:
                return {patient:{}}
    
        default:
            return state
    }
 }

 export const patitentFamilyReducer = (state={family:{}}, action) => {
    switch(action.type)
    {
        case PATIENT_FAMILY_REQUEST:
            return {...state,loading:true,}

        case PATIENT_FAMILY_SUCCESS:
            return {loading:false, family:action.payload}
    
        case PATIENT_FAMILY_FAIL:
            return {loading:false, error:action.payload}

        case PATIENT_FAMILY_RESET:
                return {family:{}}
    
        default:
            return state
    }
 }

 export const patitentRecordReducer = (state={records:[]}, action) => {
    switch(action.type)
    {
        case PATIENT_RECORD_REQUEST:
            return {...state,loading:true,}

        case PATIENT_RECORD_SUCCESS:
            return {loading:false, records:action.payload}
    
        case PATIENT_RECORD_FAIL:
            return {loading:false, error:action.payload}

        case PATIENT_RECORD_RESET:
                return {records:[]}
    
        default:
            return state
    }
 }