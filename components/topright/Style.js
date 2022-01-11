import styled from 'styled-components';
import { Mobile } from '../../styles/Resposive';

const TopRightContainer = styled.div`
    display: flex;
    justify-content: end;
    gap: 2rem;

    ${Mobile({
        position: 'fixed',
        top: '0',
        left: '0',
        alignItems: 'center',
        padding: '0 0.8rem',
        height: '4.6rem',
        background: props => props.theme.Cwhite,
        width: '100%',
        margin: '0',
        zIndex: '2',
        boxShadow: `0 1rem 1rem rgba(132, 139, 200, 0.18)`,

    })}
`;

const Button = styled.button`
    display: none;
    border: none;
    background: transparent;
    ${Mobile({
        display: 'inline-block',
        cursor: 'pointer',
        color: props => props.theme.Cdark,
        position: 'absolute',
        left: '1rem',
        fontSize: '1.5rem',
    })}
    & > svg {
        ${Mobile({
            fontSize: '2rem',
        })}
    }

`;

// Toggle div
const ThemeToggle = styled.div`
    background-color: ${props => props.theme.Clight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 4.2rem;
    cursor: pointer;
    border-radius: ${props => props.theme.BorderRadius1};
    
    & > svg {
        font-size: 1.2rem;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &.active {
            background-color: ${props => props.theme.Cprimary};
            color: ${props => props.theme.Cwhite};
            border-radius: ${props => props.theme.BorderRadius1};
        }
    }
    ${Mobile({
        width: '4.4rem',
        position: 'absolute',
        left: '66%',
    })}
`;

const Profile = styled.div`
    display: flex;
    gap: 2rem;
    text-align: right;

`;

const Info = styled.div`
    ${Mobile({
        display: 'none',
    })}

`;

const P = styled.p`
    

`;

const B = styled.b`
    

`;


const Small = styled.small`
    color: ${props => props.theme.CinfoDark};

`;


const UserPhoto = styled.div`

`;
const Photo = styled.img`
    width: 3.6rem;
    margin-top: -5px;
`;





export { TopRightContainer, Button, ThemeToggle, Profile, Info, P, B, Small, UserPhoto, Photo };

