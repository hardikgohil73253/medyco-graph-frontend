import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
 } from '../constants/constants'
 import axios from 'axios'

export const login = (email, password) => async (dispatch) => {

    try {
        dispatch({type:USER_LOGIN_REQUEST});

        const config = {
            'Content-type':"application/json"
        }
        const {data} = await axios.post('/api/auth/login', 
                        {email:email, password:password},
                        config 
                    )
        console.log(data)

        dispatch({type:USER_LOGIN_SUCCESS, payload:data})

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        console.log(error.response)
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }

}

export const logOut = () => async (dispatch) => {
    try {
        localStorage.removeItem('userInfo')

        dispatch({type:USER_LOGOUT})
        // dispatch({type:USER_DETAILS_RESET})
        // dispatch({type:ORDER_LIST_MY_RESET})
        // dispatch({type:USER_LIST_RESET})
    } catch (error) {
        
    }
}
