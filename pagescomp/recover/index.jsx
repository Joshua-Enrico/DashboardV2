import { GlobalStyle, MainContainer, FormContainer, PanelsContainer, SignInUp, SignInForm, Tittle, InputFields, Itag, TextInput, Submit, SocialText, SocialDiv, Panel, Content, H3, LeftImg, Bottom } from "./Style"
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { endRequest } from "../../redux/userRedux.js";
// importins mutations / queries
import { LoginRequest, LoginRequest2, ResetPwd } from "../../apiGraphql/Apicalls"

import { useRouter } from 'next/router';
import { useAuth } from '../../utils/auth1';

//icons
import { BsFacebook, BsWhatsapp, BsFillPersonFill } from 'react-icons/bs';
import { FaMailBulk } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import Loader from "../../components/loader/Loader";

const jwt = require('jsonwebtoken');

//token from url



const RcoverAccount = ({ id, name }) => {

    const dispatch = useDispatch();
    const router = useRouter();

    // IndexValidation(router)

    // graphql requests
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [Rsuccess, setRsuccess] = useState('')
    const [Rerror, setRerror] = useState('')
    const [RserverError, setRserverError] = useState('')
    const [serverErrorLogin, setServerErrorLogin] = useState('')
    const [loginError, setLoginError] = useState('')

    const { isFetching, error } = useSelector((state) => state.user)
    const { loginWithToken } = useAuth();

    // new user password
    const [newPassword, setNewPassword] = useState('')
    const [replyPassword, setReplyPassword] = useState('')



    const LoginQuery = async (e) => {
        e.preventDefault()
        setServerErrorLogin('')
        setLoginError('')
        //LoginRequest2(username, password)
        // LoginRequest(dispatch, router ,{username, password})
        // if (username === '' || password === '') {
        //     alert("Please fill all the fields")
        // }
        if (username !== '' || password !== '') {

            const res = await LoginRequest(dispatch, router, { username, password }).then(res => {

                return res
            }).catch(err => {
                return err
            })
            if (res.ServerError) {
                setServerErrorLogin(res.message)
                setLoginError('')

            } else if (res.isSuccess === true) {
                loginWithToken()
                router.push('/')
            } else if (res.isSuccess === false) {
                setLoginError(res.message)
                setServerErrorLogin('')
            }
            dispatch(endRequest())
        }

    }


    const HandleTransition = () => {

        const Container = document.querySelector('.container')
        if (Container.classList.contains('sign-up-mode')) {
            Container.classList.remove('sign-up-mode')
        }

        Container.classList.add('sign-up-mode')

    }
    const HandleTransition1 = () => {

        const Container = document.querySelector('.container')


        Container.classList.remove('sign-up-mode')

    }

    const ResetPasswordFunc = async (e) => {
        e.preventDefault()
        console.log(newPassword, replyPassword)
        if ((newPassword !== '' && replyPassword !== '') && (newPassword === replyPassword)) {
            const res = await ResetPwd(id, newPassword, replyPassword, dispatch)
                .then(res => {
                    return res
                }).catch(err => {

                    return err
                })
            console.log(res)
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
    const theme = useSelector((state) => state.theme.theme)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainContainer className="container">
                <FormContainer>
                    <SignInUp>
                        <SignInForm className="signin">
                            <Tittle>New Password</Tittle>
                            <InputFields>
                                <div><MdPassword /></div>
                                <TextInput type="password" placeholder="password" onChange={(event) => setNewPassword(event.target.value)} />
                            </InputFields>
                            <InputFields>
                                <div><MdPassword /></div>
                                <TextInput type="password" placeholder="repat password" onChange={(event) => setReplyPassword(event.target.value)} />
                            </InputFields>
                            {Rsuccess && <p style={{ color: 'green' }}>{Rsuccess}</p>}
                            {Rerror && <p style={{ color: 'red' }}>{Rerror}</p>}
                            {RserverError && <p style={{ color: 'red' }}>{RserverError}</p>}
                            {!Rsuccess && (isFetching ? <Loader /> : <Submit type="submit" onClick={(e) => ResetPasswordFunc(e)}>Reset Password</Submit>)}

                            <SocialText>Contact Help Area</SocialText>
                            <SocialDiv>
                                <div><BsFacebook /></div>
                                <div><BsWhatsapp /></div>
                                <div><FaMailBulk /></div>

                            </SocialDiv>
                        </SignInForm>
                        <SignInForm className="recover">
                            <Tittle>Log In</Tittle>
                            <InputFields>
                                <div><BsFillPersonFill /></div>
                                <TextInput type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)} />
                            </InputFields>
                            <InputFields>
                                <div><MdPassword /></div>
                                <TextInput type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                            </InputFields>
                            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                            {serverErrorLogin && <p style={{ color: 'red' }}>{serverErrorLogin}</p>}
                            {isFetching ? <Loader /> : <Submit onClick={(e) => LoginQuery(e)}>Sign in</Submit>}
                            <SocialText>or Sign in with social platforms</SocialText>
                            <SocialDiv>
                                <div><BsFacebook /></div>
                                <div><BsWhatsapp /></div>
                                <div><FaMailBulk /></div>

                            </SocialDiv>
                        </SignInForm>
                    </SignInUp>

                </FormContainer>
                <PanelsContainer>
                    <Panel className="left-panel">
                        <Content>
                            <H3>He {name}, just one more step to reset your password</H3>
                            <p>Put your new password, make sure you will remember it , promise me</p>
                        </Content>
                        <LeftImg src="ForgotPassword.svg" className="image leftimg" alt="" />
                    </Panel>
                    <Panel className="right-panel">
                        <Content>
                            <H3>Welcome back</H3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, minus!</p>
                            <Bottom id="rightbottom" type="submit" className="rbottom" onClick={() => HandleTransition1()}>Sign In</Bottom>
                        </Content>
                        <LeftImg src="Team.svg" className="image rightimg" alt="" />
                    </Panel>
                </PanelsContainer>
            </MainContainer>

        </ThemeProvider>


    )
}

export default RcoverAccount

