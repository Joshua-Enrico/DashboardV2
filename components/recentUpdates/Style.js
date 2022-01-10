import styled from 'styled-components';

const RecentUpdatesContainer = styled.div`
    margin-top: 1rem;
`

const Title = styled.h2`
    margin-bottom: 0.8rem;

`

const Updates = styled.div`
    background-color: ${props => props.theme.Cwhite};
    padding: ${props => props.theme.CardPadding};
    border-radius: ${props => props.theme.CardBorderRadius};
    box-shadow: ${props => props.theme.BoxShadow};
    transition: all 300ms ease;

    &:hover {
        box-shadow: none;
    }

`



export { RecentUpdatesContainer, Title, Updates};