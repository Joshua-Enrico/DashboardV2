//styled classses
import { GlobalStyle, MainContainer, FormContainer, PanelsContainer, SignInUp, SignInForm, Tittle, InputFields, Itag,
         TextInput, Submit, SocialText, SocialDiv, Panel, Content, H3, LeftImg, Bottom } from "./Style"
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { endRequest } from "../../redux/userRedux.js";

import { useRouter } from 'next/router';
import { useAuth } from '../../utils/auth1';

//icons
import { BsFacebook, BsWhatsapp, BsFillPersonFill } from 'react-icons/bs';
import { FaMailBulk } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import Loader from "../../components/loader/Loader";
import { LoginHandler } from "../Index/handlers";
import { HandlerResestPwdFunc } from "./handlers";

const RcoverAccount = ({ id, name }) => {

    const dispatch = useDispatch();
    const router = useRouter();

    // needed variables
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [Rsuccess, setRsuccess] = useState('')
    const [Rerror, setRerror] = useState('')
    const [RserverError, setRserverError] = useState('')
    const [serverErrorLogin, setServerErrorLogin] = useState('')
    const [loginError, setLoginError] = useState('')

    // functions and variables from redux
    const { isFetching, error } = useSelector((state) => state.user)
    // use context function
    const { loginWithToken } = useAuth();

    // new user password
    const [newPassword, setNewPassword] = useState('')
    const [replyPassword, setReplyPassword] = useState('')

    // function to start Login process
    const LoginQuery = async (e) => {
        e.preventDefault()
        const from = 'recover'
        LoginHandler(
            from ,router, endRequest,loginWithToken,
            setServerErrorLogin, setLoginError,
            username, password, dispatch
            )

    }

    // function to start reset pwd request process
    const ResetPasswordFunc = async (e) => {
        e.preventDefault()
        HandlerResestPwdFunc(id,newPassword, replyPassword, dispatch,
            setRerror,setRserverError, setRsuccess, HandleTransition, endRequest
            )


    }

    // handle transitions
    const HandleTransition = () => {

        const Container = document.querySelector('.container')
        if (Container.classList.contains('sign-up-mode')) {
            Container.classList.remove('sign-up-mode')
        }

        Container.classList.add('sign-up-mode')

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
                        </Content>
                        <LeftImg src="Team.svg" className="image rightimg" alt="" />
                    </Panel>
                </PanelsContainer>
            </MainContainer>

        </ThemeProvider>


    )
}

export default RcoverAccount

