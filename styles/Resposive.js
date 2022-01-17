import {css} from 'styled-components';

export const Tablet = (props) => {
    return css`
    @media only screen and (max-width: 1200px) {
        ${props}
    }
    `;
}

export const Mobile = (props) => {
    return css`
    @media only screen and (max-width: 768px) {
        ${props}
    }
    `;
}

export const IndexMobile = (props) => {
    return css`
    @media only screen and (max-width: 870px) {
        ${props}
    }
    `;
}

export const MobileSM = (props) => {
    return css`
    @media only screen and (max-width: 550px) {
        ${props}
    }
    `;
}