import styled from 'styled-components';
import { GlobalCssVr } from './Colors';


export const MainContainer = styled.div`

    display: grid;
    width: 96%;
    margin: 0 auto;
    gap: 1.8rem;
    grid-template-columns: 14rem auto 23rem;

    
    .text-muted {
        color: ${GlobalCssVr.CinfoDark};
      }

    p{
        color: ${GlobalCssVr.CdarkVariant};
    }

    b{
        color: ${GlobalCssVr.Cdark};
    }

    .primary{
        color: ${GlobalCssVr.Cprimary};
    }

    .danger{
        color: ${GlobalCssVr.Cdanger};
    }

    .success{
        color: ${GlobalCssVr.Csuccess};
    }

    .warning{
        color: ${GlobalCssVr.Cwarning};
    }

`