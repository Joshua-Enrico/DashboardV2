import styled from 'styled-components';

const RecentOrdersContainer = styled.div`
    margin-top: 2rem;
`

const Title = styled.h2`
    margin-bottom: 0.8rem;
`

const Table = styled.table`
    background-color: ${props => props.theme.Cwhite};
    width: 100%;
    border-radius: ${props => props.theme.CardBorderRadius};
    padding: ${props => props.theme.CardPadding};
    text-align: center;
    box-shadow: ${props => props.theme.BoxShadow};
    transform: all 300ms ease;

    &:hover {
        box-shadow: none;
    }
    `

const Thead = styled.thead`

`

const Tbody = styled.tbody`
    tr:last-child {
        & > td {
            border-bottom: none;
        }
    }
`

const Tr = styled.tr`

`
const Th = styled.th`

`

const Td = styled.td`

`

const ShowAll = styled.a`
    text-align: center;
    display: block;
    margin: 1rem auto;
    color: ${props => props.theme.Cprimary};
    cursor: pointer;
    transition: all 300ms ease;
    &:hover {
        transform: scale(1.1)
    }
`


export { RecentOrdersContainer, Title, Table, Tbody, Thead, Tr, Th, Td, ShowAll };