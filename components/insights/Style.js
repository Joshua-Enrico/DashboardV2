import styled from 'styled-components';
import { Tablet } from '../../styles/Resposive';

const InsightContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    ${Tablet({
        gridTemplateColumns: '1fr',
        gap: '0',
    })}
`;


export { InsightContainer };