import styled from 'styled-components';
import { GlobalCssVr } from '../../styles/Colors';

const MainContainer = styled.aside`
    height: 100vh;

`;

 const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.4rem;
`;

 const Logo = styled.div`
    display: flex;
    gap: 0.8rem;
`;

const Image = styled.img`
    width: 2rem;
    height: 2rem;
`;

const H2 = styled.h2`
`;

const Span = styled.span`
    color: ${GlobalCssVr.Cdanger};

`;
const Close = styled.div`
`;

const SideBarNav = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    height: 87vh;
    position: relative;
    top: 3rem;

    & > div:last-child {
        & > div {
            position: absolute;
            bottom: 3rem;
            width: 100%;
        }
    }
`;

const RoutContainer = styled.div`

`;

const Section = styled.div`
    display: flex;
    color: ${GlobalCssVr.CinfoDark};
    margin-left: 2rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 3.7rem;
    transition: all 300ms ease;
    & > svg {
        font-size: 1.6rem;
    }
`;

const Pages = styled.div`
    display: none;
`;
const Page = styled.div`
`;


const Link = styled.span`
    color: ${GlobalCssVr.Cdark};
`;

const H3 = styled.h3`
    font-weight: 500;
`;





export { MainContainer, TopBar, Logo, Image, H2, Span, Close, SideBarNav, Link, H3, Section, Pages, Page, RoutContainer };