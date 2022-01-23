import styled from 'styled-components';
import { Mobile, Tablet } from "../../styles/Resposive";


const MainContainer = styled.div`
    width: 80%;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-top: 100px;
    margin-right: 100px;

    ${Tablet({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        flexDirection: 'column',
    
    })}
    ${Mobile({
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        flexDirection: 'column',
    
    })}
`;


const ItemsContainer = styled.div`
    margin: 10px;
    width: 90%;
    box-shadow: ${props => props.theme.BoxShadow};
    border-radius: ${props => props.theme.CardBorderRadius};
    padding: ${props => props.theme.CardPadding};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.Cbackground};
`

const Title = styled.div`
    padding: ${props => props.theme.Padding};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: right;
`;


const Logo = styled.div`
    padding: ${props => props.theme.Padding};
    font-size: 2rem;
    font-weight: bold;

    border-radius: 50%;
    display: flex;
    flex-direction: column;

    &.total {
        color: ${props => props.theme.Cprimary};
        background-color: rgba(115, 103, 240, 0.12);
    }

    &.paid {
        color: #EA5455;
        background-color: rgba(234, 84, 85, 0.12);
    }

    &.activeusrs {
        color: #41F1B6;
        background-color: rgba(65, 241, 182, 0.12);
    }

    &.pendings {
        color: #FFBB55;
        background-color: rgba(255, 187, 85, 0.12);
    }

`;

// number
const Amount = styled.h1`
    font-size: 1.5rem;
`


const Info = styled.h3`
    color: ${props => props.theme.CinfoDark};
    margin-top: 0.2rem;
`




export { MainContainer, ItemsContainer, Title, Logo, Amount, Info };