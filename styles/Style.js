import styled from 'styled-components';


export const MainContainer = styled.div`

    display: grid;
    width: 96%;
    margin: 0 auto;
    gap: 1.8rem;
    grid-template-columns: 14rem auto 23rem;
    color: ${props => props.theme.Cdark};
    
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

`

export const RightSide = styled.div`
    margin-top: 1.4rem;
    
`

export const Title = styled.h1`

`