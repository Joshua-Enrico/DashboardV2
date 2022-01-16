import React from 'react'
import {Cont, CompContainer, GlobalStyle } from "./Style"
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';


const PreloaderComp = () => {
    const theme = useSelector((state) => state.theme.theme)
    return (
        <ThemeProvider theme={theme}>
        <Cont>
            <CompContainer className="container">
                <div className="dot dot-1" />
                <div className="dot dot-2" />
                <div className="dot dot-3" />
            </CompContainer>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
                    </filter>
                </defs>
            </svg>
        </Cont>
        </ThemeProvider>

    )
}

export default PreloaderComp
