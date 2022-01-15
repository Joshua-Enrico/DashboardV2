import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${props => props.theme.background};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: "Open Sans", sans-serif;
    color: ${props => props.theme.primary};

}`

const Boxform = styled.div`
        margin: 1.2rem auto;
        margin-top: 6%;
        width: 80%;
        background: #FFFFFF;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        flex: 1 1 100%;
        align-items: stretch;
        justify-content: space-between;
        box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.4);

        @media (max-width: 980px) {
            flex-flow: wrap;
            text-align: center;
            align-content: center;
            align-items: center;
            
        }



    `

const Left = styled.div`
        width: 80%;
        color: #FFFFFF;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("https://static.vecteezy.com/system/resources/previews/002/800/120/non_2x/admin-control-panel-vector.jpg");
        overflow: hidden;
        @media (max-width: 980px) {
            width: 100%;
        }
        @media (max-width: 600px) {
            height: 30rem;
        }


`
const Overlay = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  background: #5961f9ad;
  overflow: hidden;
  box-sizing: border-box;

`
const H1 = styled.h1`
        font-size: 10vmax;
        line-height: 1;
        font-weight: 900;
        margin-top: 40px;
        margin-bottom: 20px;
`
const P = styled.p``
const Span = styled.span`
        & > p {
            margin-top: 30px;
        }
        & > a {
            background: #3b5998;
            color: #FFFFFF;
            margin-top: 10px;
            padding: 14px 50px;
            border-radius: 100px;
            display: inline-block;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

        }
        & > a:last-child {
            background: #3b5998;
            margin-left: 20px;
        }
`

const Right = styled.div`
        padding: 40px;
        overflow: hidden;
        @media (max-width: 980px) {
            width: 100%;
        }

`

const H5 = styled.h5`
        margin-top:5rem;
        font-size: 6vmax;
        line-height: 0;
`

const Pright = styled.p`
        margin-top: 7rem;
        font-size: 14px;
        color: #B0B3B9;
`

const InputCont = styled.div`
        overflow: hidden;
`

const Input = styled.input`
        width: 100%;
        padding: 10px;
        margin-top: 20px;
        font-size: 16px;
        border: none;
        outline: none;
        border-bottom: 2px solid #B0B3B9;
`
const RememberCont = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > label::before {
            content: ' \f00c';
            width: 10px;
            height: 10px;
            position: absolute;
            font-family: FontAwesome;
            background: transparent;
            border: 3px solid #70F570;
            border-radius: 4px;
            color: transparent;
            left: -30px;
            transition: all 0.2s linear;
            cursor: pointer;

            &:hover {
                font-family: FontAwesome;
                color: red;
                content: ' \f00c';
                background: #70F570;
            }
        }

`

const Input2 = styled.input`
        margin: 0;
        margin-right: 7px;
        width: auto;
`
const Button = styled.button`
        float: right;
        color: #FFFFFF;
        font-size: 16px;
        cursor: pointer;
        padding: 12px 35px;
        border-radius: 50px;
        border: none;
        outline: none;
        box-shadow: ${props => props.theme.BoxShadowTopBar};
        background-image: linear-gradient(to right, #3b5998, #3b5998);
`

const Label = styled.label`
        display: block;
        position: relative;
        margin-left: 30px;

`

const CheckText = styled.span`
        display: inline-block;
        height: auto;
        position: relative;
        cursor: pointer;
        transition: all 0.2s linear;
`


export { Boxform, GlobalStyle, Left, Overlay, H1, P, Span, Right, H5, Pright, InputCont, Input, RememberCont, Input2 ,Button, Label, CheckText };