import styled from 'styled-components';
import  {Mobile, Tablet} from './Resposive';


import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
   background-color: ${props => props.theme.Cbackground};

}
`

export const MainContainer = styled.div`

    display: grid;
    width: 96%;
    margin: 0 auto;
    gap: 1.8rem;
    grid-template-columns: 14rem auto 23rem;
    color: ${props => props.theme.Cdark};
    ${Tablet({
        width: '94%',
        gridTemplateColumns: '7rem auto 23rem',
    })}
    ${Mobile({
        width: '100%',
        gridTemplateColumns: '1fr',
    })}

    
    .text-muted {
        color: ${props => props.theme.CinfoDark};
      }

    p{
        color: ${props => props.theme.CdarkVariant};
    }

    b{
        color: ${props => props.theme.Cdark};
    }

    .primary{
        color: ${props => props.theme.Cprimary};
    }

    .danger{
        color: ${props => props.theme.Cdanger};
    }

    .success{
        color: ${props => props.theme.Csuccess};
    }

    .warning{
        color: ${props => props.theme.Cwarning};
    }

`

export const Main = styled.main`

    margin-top: 1.4rem;
    ${Mobile({
        marginTop: '8rem',
        padding: '0 1rem',
    })}

`

export const RightSide = styled.div`
    margin-top: 1.4rem;
    ${Mobile({
        width: '94%',
        margin: "0 auto 4rem",
    })}
    
`

export const Title = styled.h1`
    color: ${props => props.theme.Cdark};
    ${Mobile({
        marginTop: '-3.5rem',
    })}
`