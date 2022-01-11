import styled from 'styled-components';
import { Mobile, Tablet } from '../../styles/Resposive';




const MainContainer = styled.aside`
    height: 100vh;
    position: fixed;
    
    ${Mobile({
        display: 'none',
        position: 'fixed',
        left: '-100%',
        background: props => props.theme.Cwhite,
        width: '18rem',
        zIndex: '3',
        boxShadow:  '1rem 3rem 4rem rgba(132, 139, 200, 0.18)',
        height: '100vh',
        paddingRight: props => props.theme.Padding,
        animation: 'ShowMenu 0.3s ease forwards',
    
    })}
    &.active {
        display: block;
        
    }
`;

const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.4rem;
    margin-top: 1.4rem;
    margin-left: 1.4rem;
`;

const Logo = styled.div`
    display: flex;
    gap: 0.8rem;

    ${Mobile({
        marginLeft: '1rem',
    })}

`;

const Image = styled.img`
    width: 2rem;
    height: 2rem;
`;

const H2 = styled.h2`
    color: ${props => props.theme.Cdark};
    ${Tablet({
        display: 'none',
    })}
    ${Mobile({
        display: 'inline',
    })}

`;

const Span = styled.span`
    color: ${props => props.theme.Cdanger};

`;
const Close = styled.div`
    & > svg {
        display: none;
        font-size: 1.4rem;
        ${Mobile({
            display: 'inline-block',
            cursor: 'pointer',
        })}
    }

`;

const SideBarNav = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    background: transparent;
    height: 87vh;
    position: relative;
    top: 3rem;
    margin-left: 1.4rem;

    & > div:last-child {
        & > div {
            position: absolute;
            bottom: 3rem;
            width: 100%;
            ${Tablet({
                position: 'relative',
                marginTop: '3rem',
            })}
            ${Mobile({
                position: 'absolute',
                bottom: '5rem',
            })}
        }

    }
`;

const RoutContainer = styled.div`

`;

const Section = styled.div`
    display: flex;
    color: ${props => props.theme.CinfoDark};
    margin-left: 2rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 3.7rem;
    cursor: pointer;
    & > svg {
        transition: all 300ms ease;
    }

    &.active {
        background: ${props => props.theme.Clight};
        color: ${props => props.theme.Cprimary};
        margin-left: 0;
        & > svg {
            margin-left: calc(2rem - 20px);
        }
    }

    &.active:before {
        content: '';
        width: 0.5rem;
        height: 100%;
        background: ${props => props.theme.Cprimary};
    }

    ${Tablet({
        width: '6.5rem',
    })}
    ${Mobile({
        width: '100%',
        height: '3.4rem',
    })}
    

    transition: all 300ms ease;
    & > svg {
        font-size: 1.6rem;
    }

    &:hover {
        color: ${props => props.theme.Cprimary};
        & > svg {
            margin-left: calc(2rem - 20px);
        }
    }
`;

const Pages = styled.div`
    display: none;
`;
const Page = styled.div`
`;


const LinkPage = styled.span`
    color: ${props => props.theme.Cdark};
`;

const H3 = styled.h3`
    font-weight: 500;
    color: ${props => props.theme.CinfoDark};
    ${Tablet({
        display: 'none',
    })}
    ${Mobile({
        display: 'inline',
    })}
`;

const Nmessage = styled.span`
    background: ${props => props.theme.Cdanger};
    color: ${props => props.theme.Cwhite};
    padding: 2px 10px;
    font-size: 11px;
    border-radius: ${props => props.theme.BorderRadius1};
`




export { MainContainer, TopBar, Logo, Image, H2, Span, Close, SideBarNav, LinkPage, H3, Section, Pages, Page, RoutContainer, Nmessage };