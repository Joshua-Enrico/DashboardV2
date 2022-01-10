import styled from 'styled-components';


const Tr = styled.tr`

    td:last-child {
        cursor: pointer;
        color: ${props => props.theme.Cprimary};
    }
`

const Td = styled.td`
    height: 2.8rem;
    border-bottom: 1px solid ${props => props.theme.Clight};
    color: ${props => props.theme.CdarkVariant};

    &.Pending {
        color: ${props => props.theme.Cwarning};
    }

    &.Delivered {
        color: ${props => props.theme.Csuccess};
    }

    &.Declined {
        color: ${props => props.theme.Cdanger};
    }
`

export { Tr, Td };