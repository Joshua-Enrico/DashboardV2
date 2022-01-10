import styled from 'styled-components';

const InsightCardContainer = styled.div`
    background: ${props => props.theme.Cwhite};
    padding: ${props => props.theme.Padding};
    border-radius: ${props => props.theme.CardBorderRadius};
    margin-top: 1rem;
    transition: all 300ms ease;
    box-shadow: ${props => props.theme.BoxShadow};


    &:hover {
        box-shadow: none;
    }

    & > svg {
        background: ${props => props.theme.Cprimary};
        padding: 0.5rem;
        border-radius: 50%;
        color: ${props => props.theme.Cwhite};
        font-size: 3rem;
    }

    &.Expenses {
        & > svg {
            background: ${props => props.theme.Cdanger};

        }
    }
    &.Income {
        & > svg {
            background: ${props => props.theme.Csuccess};

        }
    }


    

`;
const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.3rem;
`;

const MiddleLeft = styled.div`

`;

const H1 = styled.h1`

`;

const H3 = styled.h3`
    margin: 1rem 0 0.6rem;
    font-size: 1rem;
`;

const Progress = styled.div`
    position: relative;
    width: 92px;
    height: 92px;
    border-radius: 50%;
`;

const Svg = styled.svg`
    width: 7rem;
    height: 7rem;
`;

const Circle = styled.circle`
    fill: none;
    stroke: ${props => props.theme.Cprimary};
    stroke-width: 14;
    stroke-linecap: round;
    transform: translate(5px, 5px);
    stroke-dasharray: 110;
    stroke-dashoffset: 92;

    &.Sales {
        stroke-dashoffset: -30;
        stroke-dasharray: 200;
    }
    &.Expenses {
        stroke-dashoffset: 20;
        stroke-dasharray: 80;
    }

    &.Income {
        stroke-dashoffset: 35;
        stroke-dasharray: 110;
    }
`;

const Number = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NumberP = styled.p`

`;

const SmallText = styled.small`
    color: ${props => props.theme.CinfoDark}
`;


export { InsightCardContainer, Middle, MiddleLeft, H3, 
         H1, Progress, Svg, Circle, Number, NumberP,
         SmallText };