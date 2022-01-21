

// here we are defining the handlers for the Index page

import { EmailConfirmation, LoginRequest } from "../../apiGraphql/Apicalls"
// email validator
import validator from 'validator'


const LoginHandler = async (from,router, endRequest,loginWithToken, setServerErrorLogin, setLoginError, username, password, dispatch) => {
    setServerErrorLogin('')
    setLoginError('')

    if (username !== '' || password !== '') {

        const res = await LoginRequest(dispatch , { username, password }).then(res => {

            return res
        }).catch(err => {
            return err
        })
        if (res.ServerError) {
            setServerErrorLogin(res.message)
            setLoginError('')

        } else if (res.isSuccess === true) {
            loginWithToken()
            if (from === "recover") {
                router.push("/")
            } else {
                router.push('/home')
            }
        } else if (res.isSuccess === false) {
            setLoginError(res.message)
            setServerErrorLogin('')
        }
        dispatch(endRequest())
    }


}

const SentMailHandler = async (setEmailError, setEmailSuccess,setServerError, dispatch, email, endRequest) => {

    setEmailError('')
    setEmailSuccess('')
    setServerError('')

    if (validator.isEmail(email)) {
        const res = await EmailConfirmation(email, dispatch)
            .then(res => {
                return res
            }).catch(err => {
                return err
            })
        if (res.isSuccess === false) {
            console.log(res.message)
            setEmailError(res.message)
            setEmailSuccess('')
            setServerError('')
        } else if (res.isSuccess === true) {
            // reset input
            setEmailSuccess(res.message)
            setEmailError('')
            setServerError('')
        } else {
            //if server error
            setServerError(res.message)
            setEmailError('')
            setEmailSuccess('')

        }
        dispatch(endRequest())

    } else {
        setEmailError('Enter valid Email!')
        setEmailSuccess('')
        setServerError('')

    }

}


export { LoginHandler , SentMailHandler};