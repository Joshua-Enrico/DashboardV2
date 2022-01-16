const axios = require("axios")
import { LoginMutation } from "./mutations.js"
import { loginStart, loginSuccess, loginFailure } from "../redux/userRedux.js"


const  LoginRequest =  async (dispatch, router , user) =>{
    dispatch(loginStart())
    // router.push({
    //     pathname: '/home',
    //     query: { returnUrl: router.asPath }
    // });
    const res = await axios.post(process.env.API_URL, {
        query: LoginMutation(user.username, user.password)
    })
    .then((res) => {
        // if (res.data.data.login !== null) {
            dispatch(loginSuccess(res.data.data.login))
        //     router.push({
        //         pathname: '/home',
        //     });
        
        // } 
        
        if (res.data.errors) {
            dispatch(loginFailure())
        }
        return res

    })
    .catch((error) => {
        dispatch(loginFailure())
        return error
    });
    return res
}

const LoginRequest2 = async (username, password) =>{
    try {
        const res = await axios.post(Url, {
            query: LoginMutation(username, password)
        })

    } catch (error) {

    }
}

export { LoginRequest, LoginRequest2};