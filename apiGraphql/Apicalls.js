const axios = require("axios")
import { LoginMutation, MailingResetLink } from "./mutations.js"
import { loginStart, loginSuccess, loginFailure, requesting } from "../redux/userRedux.js"
import { ResetPassword, ValResetQry } from "./querys.js"
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");

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
            return { isSuccess: false, message: res.data.errors[0].message }
        }
        return { isSuccess: true, message: res.data.data.login }

    })
    .catch((error) => {
        dispatch(loginFailure())
        return { ServerError: true, message: "Server Error Try Again Later", error: error }
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


const VerifyResetRqst = async (token) =>{

    const res = await axios.post(process.env.API_URL, {
        query: ValResetQry(token)
    })
    .then((res) => {
        return res
    })
    .catch((error) => {
        return error
    });
    
    return res.data

}


const ResetPwd = async (id, newPassword, replyPassword, dispatch) =>{
    dispatch(requesting())

    const res = await axios.post(process.env.API_URL, {
        query: ResetPassword(id, newPassword, replyPassword)
    }).then((res) => {
        if (res.data.errors !== undefined) {
            return { isSuccess: false, message: res.data.errors.message[0].message}
        } else {
            return { isSuccess: true, message: res.data.data.resetPassword }
        }
    }).catch((error) => {
        return { ServerError: true, message: "Server Error Try Again Later", error: error }
    });
    
    return res
}

const EmailConfirmation = async (email, dispatch) =>{
    dispatch(requesting())

    const res = await axios.post(process.env.API_URL, {
        query: MailingResetLink(email)
    }).then((res) => {

        if (res.data.errors !== undefined) {
            return { isSuccess: false, message: res.data.errors[0].message }
        } else {
            return { isSuccess: true, message: res.data.data.recoverPassword }
        }
    }).catch((error) => {

        return { ServerError: true, message: "Server Error Try Again Later", error: error }

    })

    return res

}

export { LoginRequest, LoginRequest2, VerifyResetRqst, ResetPwd, EmailConfirmation};