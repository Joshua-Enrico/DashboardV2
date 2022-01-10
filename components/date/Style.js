import styled from 'styled-components';


const DateContainer = styled.div`
    display: inline-block;
    background: ${props => props.theme.Clight};
    border-radius: ${props => props.theme.BorderRadius1};
    margin-top: 1rem;
    padding: 0.5rem 1.6rem;
`;
const Input = styled.input`
    background: transparent;
    color: ${props => props.theme.Cdark};
    border: none;
`;

export {DateContainer, Input};