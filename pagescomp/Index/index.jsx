import { GlobalStyle, MainContainer, FormContainer, PanelsContainer, SignInUp, SignInForm, Tittle, InputFields, Itag, TextInput, Submit, SocialText, SocialDiv, Panel, Content, H3, LeftImg, Bottom } from "./Style"
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { useEffect, useState } from "react";
// importins mutations / queries
import { LoginRequest, LoginRequest2 } from "../../apiGraphql/Apicalls"

import { useRouter } from 'next/router';
import { useAuth } from '../../utils/auth1';

//icons
import { BsFacebook, BsWhatsapp, BsFillPersonFill } from 'react-icons/bs';
import { FaMailBulk } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';




const Index = () => {


    const dispatch = useDispatch();
    const router = useRouter();

    // IndexValidation(router)

    // graphql requests
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { isFetching, error } = useSelector((state) => state.user)
    const { loginWithToken } = useAuth();



    const LoginQuery = async (e) => {
        e.preventDefault()
        //LoginRequest2(username, password)
        // LoginRequest(dispatch, router ,{username, password})
        if (username === '' || password === '') {
            alert("Please fill all the fields")
        }
        if (username !== '' || password !== '') {


            const res = await LoginRequest(dispatch, router, { username, password }).then(res => {

                return res
            }).catch(err => {

                return err
            })
            if (res.data.data.login.token) {
                loginWithToken()
                router.push('/home')
            }
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
                                <TextInput type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)} />
                            </InputFields>
                            <InputFields>
                                <div><MdPassword /></div>
                                <TextInput type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                            </InputFields>
                            <Submit onClick={(e) => LoginQuery(e)}>Sign in</Submit>
                            <SocialText>or Sign in with social platforms</SocialText>
                            <SocialDiv>
                                <div><BsFacebook /></div>
                                <div><BsWhatsapp /></div>
                                <div><FaMailBulk /></div>

                            </SocialDiv>
                        </SignInForm>
                        <SignInForm className="recover">
                            <Tittle>Revocer Account</Tittle>
                            <InputFields>
                                <div><BsFillPersonFill /></div>
                                <TextInput type="text" placeholder="email" />
                            </InputFields>
                            <Submit type="submit" >Sent Email</Submit>
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
                            <Bottom id="rightbottom" className="rbottom" onClick={() => HandleTransition1()}>Sign In</Bottom>
                        </Content>
                        <LeftImg src="Team.svg" className="image rightimg" alt="" />
                    </Panel>
                </PanelsContainer>
            </MainContainer>

        </ThemeProvider>


    )
}

export default Index

