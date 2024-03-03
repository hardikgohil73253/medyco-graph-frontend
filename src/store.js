import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, } from './reducers/userReducers'
import { patitentFamilyReducer, patitentRecordReducer, patitentReducer } from './reducers/patientReducers'


const reducer = combineReducers({
    userLogin: userLoginReducer ,
    patientData: patitentReducer,
    patientFamily: patitentFamilyReducer,
    patientRecord: patitentRecordReducer,
})



const userInfoFromStorage = localStorage.getItem('userInfo') ?
                            JSON.parse(localStorage.getItem('userInfo')) :
                            null

    


const initialState = {
    userLogin:{userInfo:userInfoFromStorage}
}

const middleWare = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store;