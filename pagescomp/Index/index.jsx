//styled classses
import { GlobalStyle, MainContainer, FormContainer, PanelsContainer, SignInUp, SignInForm, Tittle, InputFields, Itag, TextInput, Submit, SocialText, SocialDiv, Panel, Content, H3, LeftImg, Bottom } from "./Style"
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { endRequest } from "../../redux/userRedux.js";

import { useRouter } from 'next/router';

// handle protected route
import { useAuth } from '../../utils/auth1';

//icons
import { BsFacebook, BsWhatsapp, BsFillPersonFill } from 'react-icons/bs';
import { FaMailBulk } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';


import Loader from "../../components/loader/Loader";
import { LoginHandler, SentMailHandler } from "./handlers";


const Index = () => {


    const dispatch = useDispatch();
    const router = useRouter();

    // IndexValidation(router)

    // needed variables
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailSuccess, setEmailSuccess] = useState('')
    const [serverError, setServerError] = useState('')
    const [serverErrorLogin, setServerErrorLogin] = useState('')

    const { isFetching, error } = useSelector((state) => state.user)
    const { loginWithToken } = useAuth();


    // functions and variables from redux
    const LoginQuery = async (e) => {
        e.preventDefault()
        const from = 'index'
        // this function will handle all the login operation
        LoginHandler(from, router, endRequest, loginWithToken, setServerErrorLogin, setLoginError, username, password, dispatch)
    }

    const SentMail = async (e) => {
        e.preventDefault()
        SentMailHandler(setEmailError, setEmailSuccess, setServerError, dispatch, email, endRequest)
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




    const theme = useSelector((state) => state.theme.theme)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainContainer className="container">
                <FormContainer>
                    <SignInUp>
                        <SignInForm className="signin">
                            <Tittle>Sign In</Tittle>
                            <InputFields>
                                <div><BsFillPersonFill /></div>
                                <TextInput type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                            </InputFields>
                            <InputFields>
                                <div><MdPassword /></div>
                                <TextInput type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />

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
                        <SignInForm className="recover">
                            <Tittle>Recover Account</Tittle>
                            <InputFields>
                                <div><BsFillPersonFill /></div>
                                <TextInput pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                            </InputFields>
                            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                            {emailSuccess && <p style={{ color: 'green' }} >{emailSuccess}</p>}
                            {serverError && <p style={{ color: 'red' }}>{serverError}</p>}
                            {!emailSuccess && (isFetching ? <Loader /> : <Submit id="emailinput" type="submit" onClick={(e) => SentMail(e)}>Sent Email</Submit>)}
                            {/* <SocialText>or Sign in with social platforms</SocialText> */}
                            {/* <SocialDiv>
                                <div><BsFacebook /></div>
                                <div><BsWhatsapp /></div>
                                <div><FaMailBulk /></div>

                            </SocialDiv> */}
                        </SignInForm>
                    </SignInUp>

                </FormContainer>
                <PanelsContainer>
                    <Panel className="left-panel">
                        <Content>
                            <H3>Did you forget your password?</H3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, minus!</p>
                            <Bottom id="leftbottom" className="lbottom" onClick={() => HandleTransition()}>Recover</Bottom>
                        </Content>
                        <LeftImg src="ForgotPassword.svg" className="image leftimg" alt="" />
                    </Panel>
                    <Panel className="right-panel">
                        <Content>
                            <H3>Already on our Team?</H3>
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

export default Index

