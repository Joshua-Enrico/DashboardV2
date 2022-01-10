import styled from 'styled-components';

const SalesAnalyticsContainer = styled.div`
    margin-top: 2rem;
`;

const H2 = styled.h2`
    margin-bottom: 0.8rem;

`;


const AddProduct = styled.div`
    background: transparent;
    border: 2px dashed ${props => props.theme.Cprimary};
    color: ${props => props.theme.Cprimary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    cursor: pointer;
    padding: 1.4rem ${props => props.theme.CardPadding};
    border-radius: ${props => props.theme.BorderRadius3};
    box-shadow: ${props => props.theme.BoxShadow};
    transition: all 300ms ease;

    &:hover {
        box-shadow: none;
    }
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;

    & > svg {
        font-weight: 600;
        & > path {
            stroke: ${props => props.theme.Cprimary};
        }
    }
`;



const H3 = styled.h3`


`;



export { SalesAnalyticsContainer, H2, AddProduct, Div, H3 };