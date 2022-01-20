import styled from 'styled-components';
import { IndexMobile, Mobile, MobileSM } from '../../styles/Resposive';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
          padding: 0;
          margin: 0;
          box-sizing: border-box;
  }
  body, input {
          font-family: 'Poppins', sans-serif;
  }

}`


const Panel = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
        text-align: center;
        transition: transform 1.1s .4s ease-in-out;
        transition-delay: 0.6s;


        &.left-panel {
                pointer-events: all;
                padding: 3rem 17% 2rem 12%;
                z-index: 6;
                ${IndexMobile({
                        gridRow: '1 / 2',
                    })}
        }

        &.right-panel {
                transform: translateX(800px);
                pointer-events: none;
                padding: 3rem 12% 2rem 17%;
                z-index: 6;
                ${IndexMobile({
                        transform: 'translateY(300px)',
                        gridRow: '3 / 4',
                    })}
        }

        ${IndexMobile({
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '2.5rem 8%',
            })}
`

const SignInForm = styled.form`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5rem
        overflow: hidden;
        flex-direction: column;
        transition: all 1.1s .4s ease-in-out;
        grid-column: 1 / 2;
        grid-row: 1 / 2;

        &.signin {
                z-index: 2;
        }
        &.recover {

                opacity: 0;
        }
        ${Mobile({
                padding: '5.5rem 1.5rem',
            })}
`

const SignInUp = styled.div`
        position: absolute;
        top: 50%;
        left: 75%;
        transform: translate(-50%, -50%);
        transition: 1s 0.7s ease-in-out;
        width: 50%;
        display: grid;
        grid-template-columns: 1fr;
        z-index: 5;
        ${IndexMobile({
                width: '100%',
                left: '50%',
                top: '95%',
                transform: 'translate(-50%, -100%)',
                transition: '1s 0.8s ease-in-out',
                
            })}
`


const MainContainer = styled.div`
        position: relative;
        width: 100%;
        min-height: 100vh;
        background-color: #fff;
        overflow: hidden;

        :before {
                content: '';
                position: absolute;
                width: 2000px;
                height: 2000px;
                border-radius: 50%;
                background: linear-gradient(-45deg, #5162f8, #5a6af5, #6271f3, #6b79ef, #7380ec);
                top: -5%;
                right: 48%;
                transform: translateY(-50%);
                z-index: 6;
                transition:  1.5s ease-in-out;
                ${IndexMobile({
                        width: '1500px',
                        height: '1500px',
                        left: '30%',
                        bottom: '68%',
                        transform: 'translateX(-50%)',
                        right: 'initial',
                        top: 'initial',
                        transition: '2s ease-in-out',
                        
                    })}
                ${MobileSM({
                        bottom: '72%',
                        left: '50%',

                })}
        }
        &.sign-up-mode {
                ${SignInForm}{
                        &.recover {
                                z-index: 5;
                                opacity: 1;


                        }

                        &.signin {
                                
                                z-index: 2;
                                opacity: 0;
                        }

                }


                :before {
                        transform: translate(100%, -50%);
                        right: 52%;
                        ${IndexMobile({
                                transform: 'translate(-50%, 100%)',
                                bottom: '32%',
                                right: 'initial',
                        })}
                        ${MobileSM({
                                bottom: '28%',
                                left: '50%',
        
                        })}
                }
                ${Panel} {
                        &.left-panel {
                                pointer-events: none;
                                transform: translateX(-800px);
                        }
                        &.right-panel {
                                transform: translateX(0px);
                                pointer-events: all;
                        }
                        ${IndexMobile({
                                transform: 'translateY(-300px)',
                            })}
                }

                ${SignInUp} {
                        left: 25%;

                        ${IndexMobile({
                                top: '5%',
                                transform: 'translate(-50%,  0)',
                                left: '50%',
                            })}
                }
        }
        ${IndexMobile({
                minHeight: '800px',
                height: '100vh',
                
            })}
`

const FormContainer = styled.div`
        // position: absolute;
        // width: 100%;
        // height: 100%;
        // top: 0;
        // left: 0;
        // background-color: #fff;

`
const PanelsContainer = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        ${IndexMobile({
                
                gridTemplateColumns: '1fr',
                gridTemplateRows: '1fr 2fr 1fr',
            })}
`


const LeftImg = styled.img`
        width: 100%;
        transition: transform 1.1s ease-in-out;
        transition-delay: 0.4s;
        ${IndexMobile({
                width: '200px',
            })}
            ${MobileSM({
                display: 'none',
        })}

`

const H3 = styled.h3`
        font-weight: 600;
        line-height: 1;
        font-size: 2.5rem;
        ${IndexMobile({
                fontSize: '1.2rem',
            })}
`

const Content = styled.div`
        color: #fff;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.6s;
        & > p {
                font-size: .95rem;
                padding: 1rem 0;
                ${IndexMobile({
                        fontSize: '0.7rem',
                        padding: '0.5rem 0',
                    })}
        }
        ${IndexMobile({
                paddingRight: '15%',
            })}

            ${MobileSM({
                padding: '0.5rem 1rem',
        })}
`






const Tittle = styled.h2`
        font-size: 2.2rem;
        color: #444;
        margin-bottom: 10px;

`

const InputFields = styled.div`

        max-width: 380px;
        width: 100%;
        height: 55px;
        background-color: #f6f6f9;
        margin: 10px 0;
        border-radius: 55px;
        display: grid;
        grid-template-columns: 15% 85%;
        padding: 0 .4rem;
        & > div {
                text-align: center;
                line-height: 55px;
                color: #acacac;
                font-size: 1.2rem;
        }

`



const Itag = styled.i`


`

const TextInput = styled.input`

        background: none;
        outline: none;
        border: none;
        line-height: 1;
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;
        ::placeholder {
                color: #aaa;
                font-weight: 500;
        }

`

const Submit = styled.button`
        width: 150px;
        height: 49px;
        border: none;
        outline: none;
        border-radius: 49px;
        cursor: pointer;
        background-color: #7380ec;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        margin: 10px 0;
        transition: .5s;


`

const Submit1 = styled.span`
        width: 150px;
        height: 49px;
        border: none;
        outline: none;
        border-radius: 49px;
        cursor: pointer;
        background-color: #7380ec;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        margin: 10px 0;
        transition: .5s;


`

const Bottom = styled.button`
        width: 130px;
        height: 41px;
        outline: none;
        border-radius: 49px;
        cursor: pointer;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        fopnt-size: 1.1rem;
        transition: .5s;
        margin: 0;
        background: none;
        border: 2px solid #fff;
        margin-bottom: 10px;
        ${IndexMobile({
                width: '110px',
                height: '35px',
                fontSize: '0.7rem',
            })}
`


const SocialText = styled.p`
        padding: .7rem 0;
        font-size: 1rem;
`

const SocialDiv = styled.div`
        display: flex;
        justify-content: center;
        
        & > div {
                color: #333;
                font-size: 1.2rem;
                height: 46px;
                width: 46px;
                border: 1px solid #333;
                margin: 0 0.45rem;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                border-radius: 50%;
                transition: .5s;
                cursor: pointer;
                &:hover {
                        background-color: #7380ec;
                        border: 1px solid #7380ec;
                }
        }
`




export  { GlobalStyle, MainContainer, FormContainer,
        PanelsContainer, SignInUp , SignInForm, Tittle,
        InputFields, Itag, TextInput, Submit , SocialText,
        SocialDiv, Panel, Content, H3, LeftImg, Bottom, Submit1};