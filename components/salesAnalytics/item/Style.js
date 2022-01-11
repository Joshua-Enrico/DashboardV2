import styled from 'styled-components';

const ItemDiv = styled.div`
    background: ${props => props.theme.Cwhite};
    display: flex;
    align-items: center;
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

const Icon = styled.div`
    padding: 0.6rem;
    color : ${props => props.theme.Cwhite};
    border-radius: 50%;
    background: ${props => props.theme.Cprimary};
    display: flex;

    &.negative {
        background: ${props => props.theme.Cdanger};
    }
    &.NEW{
        background: ${props => props.theme.Csuccess};
    }
`;

const RightDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 0;
    width: 100%;

`;

const Info = styled.div`


`;


const H3 = styled.h3`


`;

const H5 = styled.h5`
    &.negative {
        color: ${props => props.theme.Cdanger};
    }
    &.positive {
        color: ${props => props.theme.Csuccess};
    }


`;

const Qty = styled.h3` 
    

`;

const Small = styled.small`
    color: ${props => props.theme.CinfoDark}

`;


export { ItemDiv, Icon, RightDiv, Info, H3, H5, Small, Qty };