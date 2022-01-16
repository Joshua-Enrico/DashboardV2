import { GlobalStyle, Boxform, Left, Overlay, H1, P, Span, Right, H5, Pright, Input, InputCont, RememberCont, Input2, Button, Label, CheckText } from "./Style"
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { useEffect, useState } from "react";
// importins mutations / queries
import  {LoginRequest, LoginRequest2} from "../../apiGraphql/Apicalls"

import { useRouter } from 'next/router';
import { useAuth } from '../../utils/auth1';


const Index = () => {


    const dispatch = useDispatch();
    const router = useRouter();

    // IndexValidation(router)

    // graphql requests
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { isFetching, error } = useSelector((state) => state.user)
    const { loginWithToken } = useAuth();

 

    const LoginQuery = async () => {
        //LoginRequest2(username, password)
        // LoginRequest(dispatch, router ,{username, password})
        const res =  await LoginRequest(dispatch, router ,{username, password}).then(res => {

            return res
        }).catch(err => {

            return err
        })
        if (res.data.data.login.token){
            loginWithToken()
            router.push('/home')
        }

    }

    const theme = useSelector((state) => state.theme.theme)
    return (
        <ThemeProvider theme={theme}>
            <Boxform className="box-form">
                <GlobalStyle />
                <Left className="left">
                    <Overlay className="overlay">
                        <H1>Hello World.</H1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur et est sed felis aliquet sollicitudin</p>
                        <Span>
                            <p>login with social media</p>
                            <a href="#"><ImFacebook /></a>
                            <a href="#"><AiOutlineTwitter /> Login with Twitter</a>
                        </Span>
                    </Overlay>
                </Left>
                <Right className="right">
                    <H5>Login</H5>
                    <Pright>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</Pright>
                    <InputCont className="inputs">
                        <Input type="text" placeholder="user: Admin" onChange={(event) => setUsername(event.target.value)} />
                        <br />
                        <Input type="password" placeholder="password: Admin" onChange={(event) => setPassword(event.target.value)} />
                        {error && <p>Error</p>}
                    </InputCont>
                    <br /><br />
                    <RememberCont className="remember-me--forget-password">
                        {/* Angular */}
                        <Label>
                            <Input2 type="checkbox" name="item" defaultChecked />
                            <CheckText className="text-checkbox">Remember me</CheckText>
                        </Label>
                        <p>forget password?</p>
                    </RememberCont>
                    <br />
                    <Button disabled={isFetching} onClick={() => LoginQuery()}>Login</Button>
                </Right>
            </Boxform>
        </ThemeProvider>


    )
}

export default Index

