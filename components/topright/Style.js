import styled from 'styled-components';

const TopRightContainer = styled.div`
    display: flex;
    justify-content: end;
    gap: 2rem;
`;

const Button = styled.button`
    display: none;
    border: none;

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
`;

const Profile = styled.div`
    display: flex;
    gap: 2rem;
    text-align: right;

`;

const Info = styled.div`
    

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

