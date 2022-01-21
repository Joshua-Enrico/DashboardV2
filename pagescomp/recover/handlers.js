import { ResetPwd } from "../../apiGraphql/Apicalls"


const HandlerResestPwdFunc = async (id, newPassword, replyPassword, dispatch,setRerror,setRserverError, setRsuccess, HandleTransition, endRequest) => {

    if ((newPassword !== '' && replyPassword !== '') && (newPassword === replyPassword)) {
        const res = await ResetPwd(id, newPassword, replyPassword, dispatch)
            .then(res => {
                return res
            }).catch(err => {

                return err
            })
        if (res.isSuccess === false) {
            setRerror(res.message)
            setRserverError('')
            setRsuccess('')
        } else if (res.isSuccess === true) {
            setRsuccess(res.message)
            setRerror('')
            setRserverError('')
            HandleTransition()
        } else {
            setRserverError(res.message)
            setRerror('')
            setRsuccess('')
        }
        dispatch(endRequest())
    } else {
        setRerror('Password Does not match')
        setRserverError('')
        setRsuccess('')
    }


}

export { HandlerResestPwdFunc};